import { ButtonPopupRadio, ButtonPopupRadioProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import React from "react";
import { RegionData } from "../../dto/public/RegionData";
import { CoreUtils } from "../../CoreUtils";

export function ButtonRadioRegions(
  props: Omit<ButtonPopupRadioProps<RegionData>, "labelField" | "loadData">
) {
  // App
  const app = useRequiredAppContext();

  // Labels
  const labels = app.getLabels("clickToChoose", "region");

  // Destruct
  const {
    inputName = "region",
    label = labels.region,
    labelEnd = labels.clickToChoose,
    ...rest
  } = props;

  const defaultRegions = [
    "CN",
    "US",
    "GB",
    "IE",
    "CA",
    "AU",
    "NZ",
    "DE",
    "FR",
    "JP",
    "SG",
    "HK"
  ];

  // Add application regions, starting from the end
  CoreUtils.mergeArray(defaultRegions, app.settings.regions);

  // Load data
  const loadData = React.useCallback(
    async () => (await app.core.publicApi.getRegions(defaultRegions)) ?? [],
    []
  );

  return (
    <ButtonPopupRadio<RegionData>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => `${data.name} (${data.id})`}
      labelEnd={labelEnd}
      labelField="name"
      loadData={loadData}
      onAdd={async (ids) => {
        const data = await app.core.publicApi.getRegions(ids);
        if (data == null) return false;
        return data;
      }}
      {...rest}
    />
  );
}
