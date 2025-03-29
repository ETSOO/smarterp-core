import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { ListType } from "@etsoo/shared";

/**
 * Identity type list component
 * @param props Props
 * @returns Component
 */
export function IdentityTypeList(
  props: Omit<SelectExProps<ListType>, "options">
) {
  // App
  const app = useRequiredAppContext();

  // Identities
  const identities = app.core.getIdentities();

  // Destruct
  const {
    label = app.get("identityType"),
    name = "identityType",
    ...rest
  } = props;

  // Layout
  return <SelectEx label={label} name={name} options={identities} {...rest} />;
}
