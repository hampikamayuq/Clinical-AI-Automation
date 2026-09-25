import { describe, expect, it } from "vitest";
import { InMemoryIdempotencyStore } from "../src/services/idempotency.js";

describe("idempotency", () => {
  it("executes a key only once", () => {
    const store = new InMemoryIdempotencyStore();
    let counter = 0;
    store.runOnce("same-key", () => ++counter);
    store.runOnce("same-key", () => ++counter);
    expect(counter).toBe(1);
  });
});
