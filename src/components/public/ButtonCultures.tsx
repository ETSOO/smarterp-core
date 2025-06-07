import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
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
    "zh-Hans",
    "zh-Hant",
    "fr",
    "de",
    "ja",
    "id",
    "es",
    "ru",
    "ar"
  ];

  defaultCultures.sort((a) => (app.culture.startsWith(a) ? -1 : 0));

  return (
    <ButtonPopupCheckbox<CultureItem>
      inputName={inputName}
      label={label}
      labelFormatter={(data) =>
        `${data.name === data.id ? data.englishName : data.name} (${data.id})`
      }
      labelEnd={labelEnd}
      labelField="name"
      loadData={async () =>
        (await app.core.publicApi.getCultures(defaultCultures)) ?? []
      }
      onAdd={async (ids) => {
        const data = await app.core.publicApi.getCultures(ids);
        if (data == null) return false;
        return data;
      }}
      {...rest}
    />
  );
}
