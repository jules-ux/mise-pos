# mise.pos

Belgian horeca POS foundation inspired by the supplied Lightspeed workflows, with an original mise.pos visual system.

## Run

```bash
npm install
npm run dev
```

Open the Vite URL printed by the command. Demo PINs: `1234` Sofie (ober), `0000` Marc (manager), `2222` Karim (keuken).

The current implementation is a frontend-first Phase 0/1 demo with tables, register mode, ordering by seat/course, modifiers, 86'd menu items, split-payment preview, receipts, KDS preview, and a simulated fiscal boundary. SimulatedFdm has no legal value and is not GKS 2.0 certification.

## Structure

- `apps/h-main`: React/Vite tablet POS demo
- `apps/hub`: Fastify-compatible Hub foundation
- `packages/shared`: shared domain constants and integer-cent helpers

Production work still required: PostgreSQL/Drizzle persistence, Socket.io transport, full offline queue/sync, real payment terminal, certified FDM/GKS 2.0 integration, Docker Hub, mDNS, and certification.
