import { ComboBox, ComboBoxProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";

/**
 * User role list component
 * @param props Props
 * @returns Component
 */
export function UserRoleList(props: Omit<ComboBoxProps, "options">) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const { name = "userRole", label = app.get("role")!, ...rest } = props;

  return (
    <ComboBox name={name} label={label} options={app.getRoles()} {...rest} />
  );
}
