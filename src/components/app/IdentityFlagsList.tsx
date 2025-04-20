import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { ListType } from "@etsoo/shared";

/**
 * Identity flags list component
 * @param props Props
 * @returns Component
 */
export function IdentityFlagsList(
  props: Omit<SelectExProps<ListType>, "options">
) {
  // App
  const app = useRequiredAppContext();

  // Identities
  const identities = app.core.getIdentityFlags();

  // Destruct
  const {
    label = app.get("identityType"),
    name = "identityType",
    ...rest
  } = props;

  // Layout
  return <SelectEx label={label} name={name} options={identities} {...rest} />;
}
