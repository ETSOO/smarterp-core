import React from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { OrgGetMyData } from "@etsoo/smarterp-core";
import { useNavigate } from "react-router-dom";
import { ButtonPopover } from "@etsoo/materialui";
import { CoreServiceAppContext } from "../../ICoreServiceApp";
import { useRequiredContext } from "@etsoo/react";

export type OrgSwitchPopoverProps = {
  organizationName?: string;
};

export function OrgSwitchPopover(props: OrgSwitchPopoverProps) {
  // Destruct
  const { organizationName } = props;

  // Route
  const navigate = useNavigate();

  // App
  const { app } = useRequiredContext(CoreServiceAppContext);

  // Labels
  const labels = app.getLabels("currentOrg", "more", "switchOrg");

  // Refs
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  // Max items to read
  const maxItems = 10;

  // Current organization
  const currentOrg = app.userData?.organization;

  // Layout
  return (
    <ButtonPopover<OrgGetMyData[]>
      button={(callback) => (
        <React.Fragment>
          <ButtonGroup variant="text">
            <Button
              sx={{ display: { xs: "none", md: "block" } }}
              title={labels.currentOrg}
              onClick={() => callback(anchorRef.current!)}
            >
              {organizationName ?? labels.switchOrg}
            </Button>
            <Button
              title={labels.switchOrg}
              onClick={(e) => callback(e.currentTarget)}
              ref={(e) => {
                if (e) anchorRef.current = e;
              }}
            >
              <AccountTreeIcon />
            </Button>
          </ButtonGroup>
        </React.Fragment>
      )}
      loadData={() =>
        app.core.orgApi.getMy({ maxItems }, { showLoading: false })
      }
    >
      {(data) => {
        if (data == null) return <React.Fragment />;
        return (
          <Stack direction="column" margin={2}>
            {data.map(
              (org) =>
                currentOrg !== org.id && (
                  <Button
                    key={org.id}
                    onClick={async () => {
                      const result = await app.switchOrg(org.id);
                      if (result == null) return;

                      if (!result.ok) {
                        app.alertResult(result);
                        return;
                      }
                    }}
                  >
                    {org.name}
                  </Button>
                )
            )}
            {(data.length === 0 || data.length === maxItems) && (
              <Button onClick={() => navigate("./org/my")}>
                {labels.more}...
              </Button>
            )}
          </Stack>
        );
      }}
    </ButtonPopover>
  );
}
