import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { PlaceCommon } from "../../dto/public/PlaceCommon";
import React from "react";
import { MapApiProvider } from "@etsoo/appscript";

/**
 * Address tiplist component props
 */
export type AddressTiplistProps = Omit<
  TiplistProps<PlaceCommon, "placeId">,
  "idField" | "loadData" | "name" | "label" | "onValueChange"
> &
  Partial<Pick<TiplistProps<PlaceCommon, "placeId">, "name" | "label">> & {
    /**
     * Value change handler
     * @param value New value
     * @param provider Map API provider
     */
    onValueChange?: (
      value: PlaceCommon | null,
      provider: MapApiProvider
    ) => void;
  };

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
      `${option.name} - ${option.formattedAddress}${
        option.postalCode ? ` (${option.postalCode})` : ""
      }`,
    name = "address",
    label = app.get("address") ?? "Address",
    maxItems = 10,
    onValueChange,
    ...rest
  } = props;

  // Provider
  const providerRef = React.useRef<MapApiProvider>(MapApiProvider.Google);

  return (
    <Tiplist<PlaceCommon>
      fullWidth={fullWidth}
      getOptionLabel={getOptionLabel}
      idField="placeId"
      label={label}
      loadData={async (keyword, _, maxItems) => {
        if (keyword && keyword.length > 2) {
          const [provider, results] = await app.core.publicApi.queryPlace(
            {
              language: app.culture,
              query: keyword,
              pageSize: maxItems
            },
            { showLoading: false }
          );

          // Save provider
          providerRef.current = provider;

          return results;
        } else {
          return [];
        }
      }}
      name={name}
      onValueChange={(value) => onValueChange?.(value, providerRef.current)}
      {...rest}
    />
  );
}
