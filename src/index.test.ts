import app from "./index";
import type { UnstableDevWorker } from "wrangler";
import { unstable_dev } from "wrangler";
import { afterAll, beforeAll, it, describe, expect, test } from "vitest";

describe("Example", () => {
  it("GET /", async () => {
    const res = await app.request("http://localhost:8787");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello Hono!");
  });

  //   it("GET /users", async () => {
  //     const res = await app.request("http://localhost:8787/users");
  //     expect(res.status).toBe(200);
  //     //   expect(await res.text()).toBe(`[
  //     //     {
  //     //         "id": 1,
  //     //         "saasId": "d;fakjd;akjdfowi",
  //     //         "displayName": "alfreds_01",
  //     //         "userCustomId": "Maria Anders"
  //     //     }
  //     // ]`);
  //   });
  //   it("GET /users/1", async () => {
  //     const res = await app.request("http://localhost:8787/users/1");
  //     expect(res.status).toBe(200);
  //     expect(await res.text()).toBe("Hello Hono!");
  //   });
});

// unstable_dev version
describe("Wrangler", () => {
  let worker: UnstableDevWorker;

  beforeAll(async () => {
    // relative path from project root to app file
    worker = await unstable_dev("./src/index.ts", {
      experimental: { disableExperimentalWarning: true },
    });
  });
  afterAll(async () => {
    await worker.stop();
  });

  test("GET /", async () => {
    const res = await worker.fetch("/");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello Hono!");
  });
  test("GET /users/", async () => {
    const res = await worker.fetch("/users");
    expect(res.status).toBe(200);
    /** responseが配列であることを確かめる*/
    const responseObj = (await res.json()) as unknown as Array<any>;
    expect(Array.isArray(responseObj)).toBe(true);
    // TODO: entity等を生成して、responseは型チェック関数を通して確認したい
    expect(
      responseObj.length > 0 &&
        !!responseObj.map(
          (obj) =>
            typeof obj["id"] === "number" &&
            typeof obj["saasId"] === "string" &&
            typeof obj["displayName"] === "string" &&
            typeof obj["userCustomId"] === "string"
        )
    ).toBe(true);
  });
});
