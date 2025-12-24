import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { PlaceCommon } from "../../dto/public/PlaceCommon";

/**
 * Address tiplist component props
 */
export type AddressTiplistProps = Omit<
  TiplistProps<PlaceCommon, "placeId">,
  "idField" | "loadData" | "name" | "label"
> &
  Partial<Pick<TiplistProps<PlaceCommon, "placeId">, "name" | "label">> & {};

/**
 * Address tiplist component
 * @param props Properties
 * @returns Component
 */
export function AddressTiplist(props: AddressTiplistProps) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const {
    fullWidth = true,
    getOptionLabel = (option) =>
      `${option.name} - ${option.formattedAddress} (${option.postalCode})`,
    name = "address",
    label = app.get("address") ?? "Address",
    maxItems = 10,
    ...rest
  } = props;

  return (
    <Tiplist<PlaceCommon>
      fullWidth={fullWidth}
      getOptionLabel={getOptionLabel}
      idField="placeId"
      label={label}
      loadData={(keyword, _, maxItems) =>
        keyword
          ? app.core.publicApi.queryPlace(
              {
                language: app.culture,
                query: keyword,
                pageSize: maxItems
              },
              { showLoading: false }
            )
          : Promise.resolve([])
      }
      name={name}
      {...rest}
    />
  );
}
