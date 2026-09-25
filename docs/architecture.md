# Architecture Notes

## Goal

Demonstrate a healthcare operations architecture that is safe to discuss publicly and technically meaningful to AI/software employers.

## Principles

### Domain-first design
Clinical operations are represented as explicit domain entities and transitions. This reduces ambiguity and makes automated actions testable.

### External-system reconciliation
Scheduling platforms may be the operational source of truth for appointments. A reconciliation process should periodically compare external appointment IDs and timestamps with the internal model.

### Event-driven automation
Follow-ups, recalls, and background reconciliation are good candidates for queues. BullMQ/Redis is used in the target architecture.

### AI as an assistive layer
The AI layer classifies or summarizes operational context. It does not autonomously diagnose, prescribe, or execute irreversible clinical actions.

### Observability and audit
In production, every state transition should emit an audit event and be traceable with correlation IDs.

## Production extensions

- PostgreSQL persistence with Prisma
- BullMQ worker processes
- OpenTelemetry tracing
- role-based access control
- encrypted secrets and key rotation
- PHI-aware logging/redaction
- structured LLM outputs
- offline model evaluation set
- human approval queues
- webhook signature verification
