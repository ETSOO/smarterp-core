import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import { CurrencyItem } from "../../dto/public/CurrencyItem";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import React from "react";

export function ButtonCurrencies(
  props: Omit<ButtonPopupCheckboxProps<CurrencyItem>, "labelField" | "loadData">
) {
  // App
  const app = useRequiredAppContext();

  // Labels
  const labels = app.getLabels("clickToChoose", "currencies");

  // Destruct
  const {
    inputName = "currencies",
    label = labels.currencies,
    labelEnd = labels.clickToChoose,
    ...rest
  } = props;

  const defaultCurrencies = [
    "USD",
    "CNY",
    "EUR",
    "GBP",
    "JPY",
    "AUD",
    "CAD",
    "SGD",
    "HKD",
    "NZD"
  ];

  defaultCurrencies.sort((a) => (a.startsWith(app.region) ? -1 : 0));

  // Load data
  const loadData = React.useCallback(
    async () =>
      (await app.core.publicApi.getCurrencies(defaultCurrencies)) ?? [],
    []
  );

  return (
    <ButtonPopupCheckbox<CurrencyItem>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => `${data.name} (${data.id})`}
      labelEnd={labelEnd}
      labelField="name"
      loadData={loadData}
      onAdd={async (ids) => {
        const data = await app.core.publicApi.getCurrencies(ids);
        if (data == null) return false;
        return data;
      }}
      {...rest}
    />
  );
}
