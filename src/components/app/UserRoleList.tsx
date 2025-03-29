import { ComboBox, ComboBoxProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { DataTypes } from "@etsoo/shared";

/**
 * User role list component
 * @param props Props
 * @returns Component
 */
export function UserRoleList(
  props: DataTypes.Optional<Omit<ComboBoxProps, "options">, "name">
) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const { name = "userRole", label = app.get("role")!, ...rest } = props;

  return (
    <ComboBox name={name} label={label} options={app.getRoles()} {...rest} />
  );
}
