import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonPopover } from "@etsoo/materialui";
import { AppQueryData } from "../../dto/app/AppQueryData";
import { useRequiredAppContext } from "../../ICoreServiceApp";

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
    <ButtonPopover<AppQueryData[]>
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
        app.core.appApi.getMy({ maxItems }, { showLoading: false })
      }
    >
      {(data) => {
        if (data == null) return <React.Fragment />;
        return (
          <Stack direction="column" margin={2}>
            {data.map(
              (app) =>
                currentApp !== app.id && (
                  <Button key={app.id} onClick={async () => {}}>
                    {app.name}
                  </Button>
                )
            )}
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
