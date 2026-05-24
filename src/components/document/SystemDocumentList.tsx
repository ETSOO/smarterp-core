import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { SystemDocumentListData } from "../../dto/document/SystemDocumentListData";
import { SystemDocumentListRQ } from "../../rq/document/SystemDocumentListRQ";

/**
 * System document tiplist properties
 * 系统文档提示列表属性
 */
export type SystemDocumentTiplistProps = Omit<
  TiplistProps<SystemDocumentListData, "id">,
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
  rq?: Partial<SystemDocumentListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: SystemDocumentListRQ) => SystemDocumentListRQ;
};

/**
 * System document tiplist
 * 系统文档提示列表
 * @param props Properties
 * @returns Component
 */
export function SystemDocumentTiplist(props: SystemDocumentTiplistProps) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const {
    fullWidth = true,
    label = app.get("systemTemplate")!,
    maxItems = 10,
    getOptionLabel = (data) => data.title,
    onLoadData = (rq) => rq,
    name = "systemDocumentId",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<SystemDocumentListData, "id">
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        app.core.documentApi.list(
          onLoadData({
            ...rq,
            keyword,
            id,
            queryPaging: {
              batchSize: maxItems
            }
          }),
          { showLoading: false, defaultValue: [] }
        )
      }
      {...rest}
    />
  );
}
