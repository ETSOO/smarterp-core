import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { ListType1 } from "@etsoo/shared";

/**
 * Supported cultures list component
 * @param props Props
 * @returns Component
 */
export function CultureList(props: Omit<SelectExProps<ListType1>, "options">) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const { label = app.get("culture"), name = "culture", ...rest } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={app.settings.cultures.map((c) => ({
        id: c.name,
        label: c.label
      }))}
      {...rest}
    />
  );
}
