import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { OrgListDto } from "../../dto/org/OrgListDto";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { OrgListRQ } from "../../rq/org/OrgListRQ";

/**
 * Organization tiplist properties
 * 机构提示列表属性
 */
export type OrgTiplistProps = Omit<
  TiplistProps<OrgListDto, "id">,
  "loadData" | "label" | "name"
> & {
  /**
   * Label
   */
  label?: string;

  /**
   * Name
   */
  name?: string;

  /**
   * Default request data
   */
  rq?: Partial<OrgListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: OrgListRQ) => OrgListRQ;
};

/**
 * Organization tiplist
 * 机构提示列表
 * @param props Properties
 * @returns Component
 */
export function OrgTiplist(props: OrgTiplistProps) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const {
    fullWidth = true,
    label = app.get("org")!,
    maxItems = 10,
    getOptionLabel = (data) => data.name + "(" + data.pin + ")",
    onLoadData = (rq) => rq,
    name = "organizationId",
    rq = { enabled: true },
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
          onLoadData({
            ...rq,
            keyword,
            id,
            queryPaging: {
              batchSize: maxItems,
              orderBy: [{ field: "CoreOrganization.Name" }]
            }
          }),
          { showLoading: false, defaultValue: [] }
        )
      }
      {...rest}
    />
  );
}
