import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { DocumentListData } from "../../dto/document/DocumentListData";
import { DocumentListRQ } from "../../rq/document/DocumentListRQ";

/**
 * Document tiplist properties
 * 文档提示列表属性
 */
export type DocumentTiplistProps = Omit<
  TiplistProps<DocumentListData, "id">,
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
   * Kind
   */
  kind: string;

  /**
   * Default request data
   */
  rq?: Partial<DocumentListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: DocumentListRQ) => DocumentListRQ;
};

/**
 * Document tiplist
 * 文档提示列表
 * @param props Properties
 * @returns Component
 */
export function DocumentTiplist(props: DocumentTiplistProps) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const {
    fullWidth = true,
    label = app.get("systemTemplate")!,
    maxItems = 10,
    getOptionLabel = (data) => data.title,
    onLoadData = (rq) => rq,
    name = "DocumentId",
    kind,
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<DocumentListData, "id">
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
            kind,
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
