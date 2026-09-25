import { transitionLead } from "./domain/leadStateMachine.js";
import { InMemoryIdempotencyStore } from "./services/idempotency.js";
import { suggestOperationalTriage } from "./services/aiTriage.js";

const store = new InMemoryIdempotencyStore();

const result = store.runOnce("event:demo-001", () => {
  const nextStatus = transitionLead("SCHEDULING", "APPOINTMENT_CONFIRMED");
  const ai = suggestOperationalTriage("Patient asks to confirm appointment time");
  return { nextStatus, ai };
});

console.log(JSON.stringify(result, null, 2));
