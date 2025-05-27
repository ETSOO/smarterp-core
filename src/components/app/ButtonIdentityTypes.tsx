import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import { ListType } from "@etsoo/shared";
import { IdentityTypeFlags } from "@etsoo/appscript";
import React from "react";
import { useRequiredAppContext } from "../../ICoreServiceApp";

export type ButtonIdentityTypesProps = Omit<
  ButtonPopupCheckboxProps<ListType>,
  "labelField" | "loadData" | "ids" | "value" | "onValueChange"
> & {
  /**
   * Base identity type
   */
  baseIdentity?: IdentityTypeFlags;

  /**
   * Value
   * 值
   */
  value?: IdentityTypeFlags;

  /**
   * Value change handler
   * @param value New value
   */
  onValueChange: (value: IdentityTypeFlags) => void;
};

export function ButtonIdentityTypes(props: ButtonIdentityTypesProps) {
  // App
  const app = useRequiredAppContext();

  // Labels
  const labels = app.getLabels("clickToChoose", "identityType");

  // Destruct
  const {
    inputName = "identityType",
    label = labels.identityType,
    labelEnd = labels.clickToChoose,
    baseIdentity,
    onValueChange,
    value,
    ...rest
  } = props;

  // Identities
  const identities = React.useMemo(
    () => app.core.getIdentityFlags(baseIdentity),
    [baseIdentity]
  );

  const ids: number[] = [];
  if (value != null) {
    // Convert to ids
    for (const identity of identities) {
      if ((value & identity.id) === identity.id) {
        ids.push(identity.id);
      }
    }
  }

  return (
    <ButtonPopupCheckbox<ListType>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => data.label}
      labelEnd={labelEnd}
      labelField="label"
      loadData={async () => identities}
      ids={ids}
      onValueChange={(ids) => {
        let newValue = IdentityTypeFlags.None;
        for (const id of ids) {
          newValue |= id;
        }
        onValueChange(newValue);
      }}
      {...rest}
    />
  );
}
