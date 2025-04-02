import { ComboBox, ComboBoxProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { DataTypes } from "@etsoo/shared";

/**
 * Status list component
 * @param props Props
 * @returns Component
 */
export function StatusList(
  props: DataTypes.Optional<Omit<ComboBoxProps, "options">, "name">
) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const { name = "status", label = app.get("status")!, ...rest } = props;

  return (
    <ComboBox
      name={name}
      label={label}
      options={app.getStatusList()}
      {...rest}
    />
  );
}
