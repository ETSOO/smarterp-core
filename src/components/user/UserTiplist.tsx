import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredAppContext } from "../../ICoreServiceApp";
import { MemberListDto } from "../../dto/member/MemberListDto";
import { MemberListRQ } from "../../rq/member/MemberListRQ";

/**
 * User tiplist properties
 * 用户提示列表属性
 */
export type UserTiplistProps = Omit<
  TiplistProps<MemberListDto, "id">,
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
  rq?: Partial<MemberListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: MemberListRQ) => MemberListRQ;
};

/**
 * User tiplist
 * 用户提示列表
 * @param props Properties
 * @returns Component
 */
export function UserTiplist(props: UserTiplistProps) {
  // App
  const app = useRequiredAppContext();

  // Destruct
  const {
    fullWidth = true,
    label = app.get("user")!,
    maxItems = 10,
    getOptionLabel = (data) => data.name,
    onLoadData = (rq) => rq,
    name = "userId",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<MemberListDto>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        app.core.memberApi.list(
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
