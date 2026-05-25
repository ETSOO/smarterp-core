import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { ListType1 } from "@etsoo/shared";

/**
 * Document kind list component
 * @param props Props
 * @returns Component
 */
export function DocumentKindList(
  props: Omit<SelectExProps<ListType1>, "options">
) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const { label = app.get("templateKind"), name = "kind", ...rest } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={app.core.getDocumentKinds()}
      {...rest}
    />
  );
}
