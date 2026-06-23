import { CoreUtils, PeriodReportData } from "../src";
import { TestApp } from "./app/TestApp";

const app = new TestApp();

test("Test for transformReportData", () => {
  const source: PeriodReportData[] = [
    {
      period: 202601,
      value: 236
    },
    {
      period: 202602,
      value: 99
    },
    {
      period: 202603,
      value: 120
    },
    {
      period: 202604,
      value: 199
    },
    {
      period: 202605,
      value: 230
    },
    {
      period: 202606,
      value: 3
    },
    {
      period: 202505,
      value: 215
    }
  ];

  const result = CoreUtils.transformReportData(app, source, true, 2026);

  expect(result.labels.length).toBe(12);
  expect(result.currentYearData[5]).toBe(3);
  expect(result.lastYearData[4]).toBe(215);
});

test("Test for validateJson with string schema", async () => {
  const schema =
    '{"type":"object","properties":{"cc":{"type":"array","format":"email","uniqueItems":true},"bcc":{"type":"array","format":"email","uniqueItems":true}}}';

  let [valid, errors] = await CoreUtils.validateJson(schema, "{}");
  expect(valid).toBeTruthy();

  [valid, errors] = await CoreUtils.validateJson(schema, {
    cc: ["a@b.com", "a@b.com"]
  });
  expect(valid).toBeFalsy();
  expect(errors?.[0].keyword).toBe("uniqueItems");
});

test("Test for validateJson with object schema", async () => {
  const schema = {
    type: "object",
    properties: {
      cc: {
        type: "array",
        format: "email",
        uniqueItems: true
      },
      bcc: {
        type: "array",
        format: "email",
        uniqueItems: true
      }
    }
  };

  let [valid, errors] = await CoreUtils.validateJson(schema, {
    cc: "abc"
  });
  expect(valid).toBeFalsy();
  expect(errors?.[0].keyword).toBe("format");
});
