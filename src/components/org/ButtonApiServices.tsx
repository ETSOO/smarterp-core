import { ListType } from "@etsoo/shared";
import React from "react";
import { ButtonPopupRadio, ButtonPopupRadioProps } from "@etsoo/materialui";
import { CoreApiService } from "../../dto/org/CoreApiService";
import { useRequiredAppContext } from "../../ICoreServiceApp";

export type ButtonApiServicesProps = Omit<
  ButtonPopupRadioProps<ListType>,
  "labelField" | "loadData" | "value" | "onValueChange"
> & {
  /**
   * Value
   * 值
   */
  value?: CoreApiService;

  /**
   * Value change handler
   * @param value New value
   */
  onValueChange: (value: CoreApiService) => void;
};

export function ButtonApiServices(props: ButtonApiServicesProps) {
  // App
  const app = useRequiredAppContext();

  // Labels
  const labels = app.getLabels("clickToChoose", "apiService");

  // Destruct
  const {
    inputName = "service",
    label = labels.apiService,
    labelEnd = labels.clickToChoose,
    onValueChange,
    value,
    ...rest
  } = props;

  const services = React.useMemo(() => app.core.getApiServices(), []);

  return (
    <ButtonPopupRadio<ListType>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => data.label}
      labelEnd={labelEnd}
      labelField="label"
      loadData={services}
      onValueChange={(value) => onValueChange(value)}
      value={value}
      {...rest}
    />
  );
}
