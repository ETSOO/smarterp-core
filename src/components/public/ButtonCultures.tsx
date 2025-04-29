import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import { ArrayUtils } from "@etsoo/shared";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { CultureItem } from "@etsoo/appscript";

export function ButtonCultures(
  props: Omit<ButtonPopupCheckboxProps<CultureItem>, "labelField" | "loadData">
) {
  // App
  const app = useRequiredAppContext();

  // Labels
  const labels = app.getLabels("clickToChoose", "cultures");

  // Destruct
  const {
    inputName = "cultures",
    label = labels.cultures,
    labelEnd = labels.clickToChoose,
    ...rest
  } = props;

  const defaultCultures = [
    "en",
    "zh-CN",
    "fr-FR",
    "de-DE",
    "ja-JP",
    "es-ES",
    "ru-RU",
    "ar-SA"
  ];

  defaultCultures.sort((a) => (a.endsWith(app.region) ? -1 : 0));

  return (
    <ButtonPopupCheckbox<CultureItem>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => `${data.name} (${data.id})`}
      labelEnd={labelEnd}
      labelField="name"
      loadData={async (ids) => {
        const queryIds = ArrayUtils.mergeArrays(ids ?? [], defaultCultures);
        const data = await app.core.publicApi.getCultures(queryIds);
        return data ?? [];
      }}
      onAdd={async (ids) => {
        const data = await app.core.publicApi.getCultures(ids);
        if (data == null) return false;
        return data;
      }}
      {...rest}
    />
  );
}
