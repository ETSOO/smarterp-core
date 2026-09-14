import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPopover, SVGUtils } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { AppData } from "../../dto/app/AppData";
import { IdentityType } from "@etsoo/appscript";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AppSwitchCall } from "../../AppSwitchCall";

export type AppSwitchPopoverProps = {
  appName: string;
  maxItems?: number;
};

export function AppSwitchPopover(props: AppSwitchPopoverProps) {
  // Destruct
  const { appName, maxItems = 10 } = props;

  // Route
  const navigate = useNavigate();

  // App
  const app = useRequiredAppContext();

  // Labels
  const labels = app.getLabels("more", "switchApp");

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
          <Stack direction="column" sx={{ margin: 2 }}>
            {data.map((appData) => (
              <Button
                key={appData.id}
                onClick={() => AppSwitchCall(app, appData)}
                startIcon={SVGUtils.createIcon(appData.logo)}
                sx={{ justifyContent: "flex-start" }}
              >
                {app.core.getAppName(appData)}
              </Button>
            ))}
            {(data.length === 0 || data.length === maxItems) && (
              <Button
                onClick={() => navigate("./app/my")}
                sx={{ justifyContent: "flex-end" }}
              >
                {labels.more}...
              </Button>
            )}
          </Stack>
        );
      }}
    </ButtonPopover>
  );
}
