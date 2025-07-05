import { CoreUtils } from "../src";

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
