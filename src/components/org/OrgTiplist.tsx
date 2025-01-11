import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { OrgListDto } from "../../dto/org/OrgListDto";
import { useRequiredContext } from "@etsoo/react";
import { CoreServiceAppContext } from "../../ICoreServiceApp";

/**
 * Organization tiplist properties
 * 机构提示列表属性
 */
export type OrgTiplistProps = Omit<
  TiplistProps<OrgListDto, "id">,
  "loadData" | "label"
> & {
  /**
   * Label
   */
  label?: string;
};

/**
 * Organization tiplist
 * 机构提示列表
 * @param props Properties
 * @returns Component
 */
export function OrgTiplist(props: OrgTiplistProps) {
  // App
  const { app } = useRequiredContext(CoreServiceAppContext);

  // Destruct
  const {
    fullWidth = true,
    label = app.get("org")!,
    maxItems = 10,
    getOptionLabel = (data) => data.name + "(" + data.pin + ")",
    name = "organizationId",
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<OrgListDto>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        app.core.orgApi.list(
          {
            enabled: true,
            keyword,
            id,
            queryPaging: {
              batchSize: maxItems,
              orderBy: [{ field: "name" }]
            }
          },
          { showLoading: false, defaultValue: [] }
        )
      }
      {...rest}
    />
  );
}
