import { Utils } from "@etsoo/shared";
import { isLocalTest, TestApp } from "./app/TestApp";
import { EntityStatus } from "@etsoo/appscript";
import { OrgApi } from "../src/OrgApi";
import { OrgCreateRQ } from "../src/rq/org/OrgCreateRQ";

if (isLocalTest) {
  const app = new TestApp();
  await app.changeCulture(app.settings.cultures[0]);

  // Simulate logined
  app.authorize(
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGVuYyNrdy1hZXMyNTYiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwidHlwIjoiSldUIiwiY3R5IjoiSldUIn0.dtsirpxAaX-pHgFrSRp9bTEvkFkphcihoOC9Mj-hgNEY9fvgSrb4-NkaQxiw1KIIXdct_2wXeHe4-vcWOrkpABANtf6LHdJo.vk9wrjb6DIw0f9xLAj-3AQ.CwEV20n7LhwalIx3a3WDQkJjMAHW1Bn6VJGMjfckNVBZv0G_xcWZbo5Gg2CF4vdUjH6pqAH5IhuMmRqlkeCYwuF5d_rQVI_kLtmvgpAJoqYhU3-J_XqPrLpdWXPQ-V84lzngTAJlIX4On6JP_ZRTWLZDGxiiC1Tg_6GlWU3EUX2kcMBb03NWGczHaPS5-ivp4L9CntqaEOOK35cWQx6oZyp0KmwM6KjoY3ard5SLUofF10DqBwto6KqNAeZnLjBnJV_j9dX-si5FalrGrTV09KtjSMeXd7Rp3VfC5BRge5zSx5CecEzk_yt50GdYjvDRYj31whyVx0bVLKH9Pyz1OsHLDfolVpSRRIk-1UuaZz-5WfKcUrE6EWB-Mykn5Mxiyo7CxlhHOnEkUAJ5wdYGiRdVkk04HA8YdOxBRHUZzB44nrUVIWEYtWu8KddQTkWhYOCNc4OdCBweuiO_TEt2haxEsUmyuRZ0PgoVg-B8ZUXz0ot79GNQcd8ZYoaaap8WYhvMod8lw-e-HH7fABlCoAsIx8xt4aMGOD1iVgXFTnJ4qD9x5suZczHqj4BoeoKkgg1Lil_jG_3cADxIRPmReWqeOrrA6f54PjBd5kdSNNv72axxW3AfbZaOYQ-n7zzQjWUgKZnMnu4N2NXCkis8JvHCfVi3jgUO3jeGp6vVlPoaCbFXXMiKKL1bkhRXZT47uglPi4zD2tRqKOEzGMPpB4d0X_tZVt_lPRvbLFjUNUVikQGA3nD_9c5B5QfI4olFjA6H4eUN7b74R4HcVIr6hNBvDKGXeTJBmoopu4fGMAysCJ_ybUcJxWXldoy6nFTZjJ2QllbLLqdYuCvxYlTo3Z4nODna6NW18QcSXIIHj3U6H6VIDkXBnjArkvsgj_0uvqW_zyZNj_JIONAuwZYfDC6gsjbzV7llp53d3o3-xFhOBvxUibFTPvY39E-X_-crww6flp_tDyndlzBoVYMhybhnRLQy-PpO4dZQhzr2sdHpsF57Fj7SecXwbAtcQdKp.C6VZunr9ohscx6vVMVmRQnG37pWumGCHMLO0jJmLQXo"
  );

  const api = new OrgApi(app);

  test("Test for create, delete", async () => {
    const guid = Utils.newGUID().slice(0, 20);
    const random = Date.now() % 2 == 0;
    const rq: OrgCreateRQ = random
      ? {
          name: `青岛亿速思维网络科技有限公司`,
          brand: "亿速思维",
          pin: guid,
          region: "CN"
        }
      : {
          name: `上海亿商网络科技有限公司`,
          brand: "亿商",
          pin: guid,
          region: "CN"
        };

    const result = await api.create(rq);

    expect(result).not.toBeNull();
    if (result == null) return;

    const id = result.data?.id;
    expect(id).toBeGreaterThan(0);
    if (id == null) return;

    // Update
    const updateResult = await api.update({
      id,
      brand: "已更改",
      changedFields: ["brand"]
    });

    expect(updateResult?.ok).toBeTruthy();

    // Delete
    const deleteResult = await api.delete(id);

    expect(deleteResult?.ok).toBeTruthy();
  });

  test("Test for query zero return", async () => {
    const result = await api.query({
      keyword: "亿速",
      enabled: true,
      //id: 1001,
      //ids: [1002, 1003, 1004],
      status: EntityStatus.Approved,
      excludedIds: [1, 2, 3],
      queryPaging: {
        keysets: ["青岛亿速", 1100],
        batchSize: 5,
        orderBy: [{ field: "name" }]
      }
    });

    expect(result).not.toBeNull();
    if (result == null) return;
    expect(result.length).toBe(0);
  });

  test("Test for query several returns", async () => {
    const result = await api.query({
      keyword: "亿速",
      enabled: true,
      excludedIds: [1, 2, 3],
      queryPaging: {
        keysets: ["青岛亿速", 1100],
        batchSize: 5,
        orderBy: [{ field: "name" }, { field: "id", desc: true, unique: true }]
      }
    });

    expect(result).not.toBeNull();
    if (result == null) return;

    expect(result.length).toBeGreaterThan(0);

    const first = result[0];

    // Read for view
    const readResult = await api.read(first.id);
    expect(readResult?.ownerName).not.toBeNull();
    expect(readResult?.name).toBe(first.name);

    // Read for update
    const updateReadResult = await api.updateRead(first.id);
    expect(updateReadResult?.name).not.toBeNull();
    expect(updateReadResult?.name).toBe(first.name);
  });

  test("Test for list", async () => {
    const result = await api.list({
      keyword: "亿速",
      enabled: true,
      excludedIds: [1, 2, 3],
      queryPaging: 2
    });

    expect(result).not.toBeNull();
    if (result == null) return;

    expect(result.length).toBeGreaterThan(0);
  });

  test("Test for request token", async () => {
    const result = await api.requestToken();
    expect(result).not.toBeNull();
    if (result == null) return;

    expect(result.name).not.toBeNull();
  });
} else {
  test("Skip the test", () => {
    expect(true).toBeTruthy();
  });
}
