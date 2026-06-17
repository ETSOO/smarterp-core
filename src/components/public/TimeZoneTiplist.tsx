import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { TimeZoneItem } from "../../dto/public/TimeZoneItem";
import { TimeZoneRQ } from "../../rq/public/TimeZoneRQ";

/**
 * Time zone tiplist properties
 * 时区提示列表属性
 */
export type TimeZoneTiplistProps = Omit<
  TiplistProps<TimeZoneItem, "id">,
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
  rq?: Partial<TimeZoneRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: TimeZoneRQ) => TimeZoneRQ;
};

/**
 * Time zone tiplist
 * 时区提示列表
 * @param props Properties
 * @returns Component
 */
export function TimeZoneTiplist(props: TimeZoneTiplistProps) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const {
    fullWidth = true,
    label = app.get("timeZone")!,
    maxItems = 10,
    getOptionLabel = (data) => data.displayName,
    onLoadData = (rq) => rq,
    name = "timeZone",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<TimeZoneItem, "id">
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        app.core.publicApi.getTimeZones(
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
