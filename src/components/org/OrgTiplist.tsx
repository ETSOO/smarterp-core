import { Tiplist } from "@etsoo/materialui";
import { OrgListDto } from "../../dto/org/OrgListDto";
import { CoreApp } from "../../CoreApp";

/**
 * Organization tiplist properties
 * 机构提示列表属性
 */
export type OrgTiplistProps = {
  /**
   * API Application
   * 接口应用
   */
  api: CoreApp;

  /**
   * Label
   * 标签
   */
  label?: string;

  /**
   * Max items
   * 最大项目
   * @default 10
   */
  maxItems?: number;

  /**
   * Name
   * 名称
   * @default 'organizationId'
   */
  name?: string;
};

/**
 * Organization tiplist
 * 机构提示列表
 * @param props Properties
 * @returns Component
 */
export function OrgTiplist(props: OrgTiplistProps) {
  // Destruct
  const {
    api,
    label = api.app.get("org")!,
    maxItems = 10,
    name = "organizationId"
  } = props;

  // Layout
  return (
    <Tiplist<OrgListDto>
      label={label}
      getOptionLabel={(data) => data.name + "(" + data.pin + ")"}
      name={name}
      fullWidth
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        api.orgApi.list({
          enabled: true,
          keyword,
          id,
          queryPaging: {
            batchSize: maxItems,
            orderBy: [{ field: "name" }]
          }
        })
      }
    />
  );
}
