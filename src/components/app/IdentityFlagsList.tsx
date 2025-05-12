import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { ListType } from "@etsoo/shared";
import { IdentityTypeFlags } from "@etsoo/appscript";

/**
 * Identity flags list component
 * @param props Props
 * @returns Component
 */
export function IdentityFlagsList(
  props: Omit<SelectExProps<ListType>, "options"> & {
    baseIdentity?: IdentityTypeFlags;
  }
) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const {
    baseIdentity,
    label = app.get("identityType"),
    name = "identityType",
    ...rest
  } = props;

  // Identities
  const identities = app.core.getIdentityFlags(baseIdentity);

  // Layout
  return <SelectEx label={label} name={name} options={identities} {...rest} />;
}
