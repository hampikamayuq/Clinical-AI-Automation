import { describe, expect, it } from "vitest";
import { canTransitionLead, transitionLead } from "../src/domain/leadStateMachine.js";

describe("lead state machine", () => {
  it("allows scheduling -> appointment confirmed", () => {
    expect(canTransitionLead("SCHEDULING", "APPOINTMENT_CONFIRMED")).toBe(true);
    expect(transitionLead("SCHEDULING", "APPOINTMENT_CONFIRMED")).toBe("APPOINTMENT_CONFIRMED");
  });

  it("rejects completed -> new", () => {
    expect(() => transitionLead("COMPLETED", "NEW")).toThrow();
  });
});
