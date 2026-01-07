import { ComboBox, ComboBoxProps } from "@etsoo/materialui";
import { DataTypes, ListType } from "@etsoo/shared";
import { useRequiredAppContext } from "../../ICoreServiceApp";

/**
 * Product base units component props
 */
export type ProductBaseUnitsProps = DataTypes.Optional<
  Omit<ComboBoxProps<ListType>, "options">,
  "name" | "label"
> & {
  /**
   * Is joined
   */
  isJoined?: boolean;

  /**
   * Custom options
   */
  options?: string[];
};

/**
 * Product base units component
 * @param props Props
 * @returns Component
 */
export function ProductBaseUnits(props: ProductBaseUnitsProps) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const {
    isJoined,
    label = app.get("baseUnit") ?? "Base unit",
    name = "baseUnit",
    options,
    ...rest
  } = props;

  return (
    <ComboBox<ListType>
      name={name}
      label={label}
      options={app.core.publicApi.units(options, isJoined)}
      {...rest}
    />
  );
}
