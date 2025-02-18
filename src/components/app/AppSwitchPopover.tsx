import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonPopover } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { IdentityType } from "../../dto/IdentityType";
import { AppData } from "../../dto/app/AppData";

export type AppSwitchPopoverProps = {
  appName: string;
};

export function AppSwitchPopover(props: AppSwitchPopoverProps) {
  // Destruct
  const { appName } = props;

  // Route
  const navigate = useNavigate();

  // App
  const app = useRequiredAppContext();

  // Labels
  const labels = app.getLabels("more", "switchApp");

  // Max items to read
  const maxItems = 10;

  // Current app
  const currentApp = app.settings.appId;

  // Layout
  return (
    <ButtonPopover<AppData[]>
      button={(callback) => (
        <Typography
          variant="h6"
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontWeight: "700",
            ml: 0.5,
            whiteSpace: "nowrap",
            cursor: "pointer"
          }}
          title={labels.switchApp}
          onClick={(e) => callback(e.currentTarget)}
        >
          {appName}
        </Typography>
      )}
      loadData={() =>
        app.core.appApi.getMy(
          { maxItems, identityType: IdentityType.User },
          { showLoading: false }
        )
      }
      position="left"
    >
      {(data) => {
        if (data == null) return <React.Fragment />;

        // Remove the current app
        const index = data.findIndex((a) => a.id === currentApp);
        if (index >= 0) data.splice(index, 1);

        return (
          <Stack direction="column" margin={2}>
            {data.map((appData) => (
              <Button
                key={appData.id}
                onClick={async () => {
                  const tasks = appData.urls.map((u) =>
                    app.core.authApi.getLogInUrl(
                      "APP",
                      { showLoading: false, onError: () => false },
                      u.api
                    )
                  );

                  const result = await Promise.allSettled(tasks);
                  const success = result.find(
                    (r) => r.status === "fulfilled" && r.value != null
                  ) as PromiseFulfilledResult<string> | undefined;
                  if (success) {
                    app.loadUrlEx(success.value);
                  } else {
                    app.notifier.alert(app.get("networkFailure"));
                  }
                }}
              >
                {app.core.getAppName(appData)}
              </Button>
            ))}
            {(data.length === 0 || data.length === maxItems) && (
              <Button onClick={() => navigate("./app/my")}>
                {labels.more}...
              </Button>
            )}
          </Stack>
        );
      }}
    </ButtonPopover>
  );
}
