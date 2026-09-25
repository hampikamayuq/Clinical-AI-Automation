# Portfolio Story: how to discuss this project in interviews

## Problem
A small specialist clinic can accumulate operational friction across lead intake, scheduling, follow-up, recalls, results, and patient communication when multiple systems are involved.

## My contribution
I translated the clinical workflow into explicit software entities, business rules, state transitions, automation triggers, reconciliation logic, and AI-assisted review points.

## Why my medical background matters
As a physician, I can distinguish administrative automation from clinically consequential decisions and identify where deterministic rules, auditability, and human review are required.

## Technical decisions I can explain

- Why idempotency is necessary for webhooks and reconciliation jobs
- Why appointment confirmation should depend on an external appointment identifier
- Why state transitions should be explicit and tested
- Why queues are useful for delayed follow-up and recall jobs
- Why clinical AI should use human-in-the-loop review
- How to evaluate LLM outputs before operational adoption

## What I would build next

1. A working API using Fastify.
2. PostgreSQL + Prisma persistence.
3. BullMQ workers for follow-up and reconciliation.
4. A small React/Next.js operations dashboard.
5. An LLM adapter with JSON-schema output and evaluation tests.
6. Synthetic dataset and benchmark for triage classification.
