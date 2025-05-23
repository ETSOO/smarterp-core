import React from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useNavigate } from "react-router-dom";
import { ButtonPopover } from "@etsoo/materialui";
import { OrgGetMyData } from "../../dto/org/OrgGetMyData";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export type OrgSwitchPopoverProps = {
  appId?: number;
  organizationName?: string;
};

export function OrgSwitchPopover(props: OrgSwitchPopoverProps) {
  // Destruct
  const { appId, organizationName } = props;

  // Route
  const navigate = useNavigate();

  // App
  const app = useRequiredAppContext();

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
              ref={anchorRef}
            >
              <AccountTreeIcon />
            </Button>
          </ButtonGroup>
        </React.Fragment>
      )}
      loadData={() =>
        app.core.orgApi.getMy({ appId, maxItems }, { showLoading: false })
      }
    >
      {(data) => {
        if (data == null) return <React.Fragment />;

        // Remove the current organization
        if (currentOrg != null) {
          const index = data.findIndex((org) => org.id === currentOrg);
          if (index >= 0) data.splice(index, 1);
        }

        return (
          <Stack direction="column" margin={2}>
            {data.map((org) => (
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
            ))}
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
