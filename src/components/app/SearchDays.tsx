import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { ListType } from "@etsoo/shared";
import { useRequiredAppContext } from "../../ICoreServiceApp";

const options: ListType[] = [
  { id: "" as any, label: "---" },
  { id: 3, label: "3" },
  { id: 7, label: "7" },
  { id: 15, label: "15" },
  { id: 30, label: "30" },
  { id: 60, label: "60" },
  { id: 90, label: "90" },
  { id: 180, label: "180" }
];

/**
 * Days search component
 * @param props Props
 * @returns Component
 */
export function SearchDays(props: Omit<SelectExProps<ListType>, "options">) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const { label = app.get("days"), search = true, ...rest } = props;

  // Layout
  return <SelectEx label={label} search={search} options={options} {...rest} />;
}
