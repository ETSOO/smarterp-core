import { isLocalTest, TestApp } from "./app/TestApp";
import { PublicApi } from "../src/PublicApi";
import { PinyinFormatType } from "../src/rq/public/PinyinRQ";
import { ApiProvider } from "../src/rq/public/PlaceQueryRQ";

const app = new TestApp();

// Make sure the app is initialized before running the tests
await new Promise((resolve) => setTimeout(resolve, 100));

await app.changeCulture(app.settings.cultures[0]);

const api = new PublicApi(app);

test("Test for getCurrencyLabel", () => {
  expect(api.getCurrencyLabel("USD")).toBe("美元");
});

test("Test for getUnitLabel", () => {
  expect(api.getUnitLabel(12, true)).toBe("每年");
});

test("Test for repeatOptions", () => {
  const options = api.repeatOptions(["MONTH", "QUATER", "YEAR"]);
  expect(options[2]).toStrictEqual({ id: 12, label: "每年" });
});

if (isLocalTest) {
  test("Test for createBarcode", async () => {
    const result = await api.createBarcode({
      content: "123456789",
      type: "CODE_128",
      width: 200,
      height: 80,
      backgroundText: "#ff0000",
      noPadding: true
    });
    expect(result?.startsWith("data:image/png;base64")).toBeTruthy();
  });

  test("Test for mobileQRCode", async () => {
    const result = await api.mobileQRCode("123", "http://localhost");
    expect(result?.startsWith("data:image/png;base64")).toBeTruthy();
  });

  test("Test for getCultures", async () => {
    const result = await api.getCultures(["zh-CN", "en-US", "fr-FR"]);
    expect(result).not.toBeNull();
    expect(result?.length).toBe(3);
  });

  test("Test for getCurrencies all", async () => {
    const result = await api.getCurrencies();

    expect(result).not.toBeNull();
    if (result == null) return;

    expect(result.length).toBeGreaterThan(20);
  });

  test("Test for getCurrencies", async () => {
    const result = await api.getCurrencies(["CNY", "USD", "NZD"]);

    expect(result).not.toBeNull();
    if (result == null) return;

    expect(result.length).toBe(3);
    expect(result[0].id).toBe("CNY");
    expect(result[2].id).toBe("NZD");
  });

  test("Test for getPinyin", async () => {
    const input = "重庆爱好真好重";
    const results = await Promise.all([
      api.getPinyin({
        input,
        format: PinyinFormatType.Full
      }),
      api.getPinyin({
        input,
        format: PinyinFormatType.Tone
      }),
      api.getPinyin({
        input,
        format: PinyinFormatType.Initial
      })
    ]);
    expect(results[0]).toBe("Chong Qing Ai Hao Zhen Hao Zhong");
    expect(results[1]).toBe("Chong2 Qing4 Ai4 Hao4 Zhen1 Hao3 Zhong4");
    expect(results[2]).toBe("CQAHZHZ");
  });

  test("Test for getRegions", async () => {
    const result = await api.getRegions(["CN", "US", "NZ"]);

    expect(result).not.toBeNull();
    if (result == null) return;

    expect(result.length).toBe(3);
    expect(result[0].id).toBe("CN");
    expect(result[2].id).toBe("NZ");
  });

  test("Test for CN queryPlace", async () => {
    const result = await api.queryPlace({
      query: "山东省青岛李沧清溪路88号玫瑰庭院10号楼二单元501室",
      region: "CN"
    });

    expect(result).not.toBeNull();
    if (result == null) return;

    const first = result.filter((x) => x.district === "李沧区")[0];
    expect(first.region).toBe("CN");
    expect(first.state).toBe("山东省");
    expect(first.city).toBe("青岛市");
    expect(first.formattedAddress).toBe(
      "山东省青岛市李沧区清溪路88号玫瑰庭院10号楼二单元501室"
    );
  });

  test("Test for world queryPlace", async () => {
    const result = await api.queryPlace({
      query: "14A Cranbrook Place, Glendowie, Auckland 1071",
      provider: ApiProvider.Google
    });

    expect(result).not.toBeNull();
    if (result == null) return;

    const first = result[0];
    expect(first.region).toBe("NZ");
    expect(first.state).toBe("Auckland");
    expect(first.city).toBe("Auckland");
    expect(first.district).toBe("Glendowie");
    expect(first.formattedAddress).toBe(
      "14A Cranbrook Place, Glendowie, Auckland 1071, New Zealand"
    );
  });
}
