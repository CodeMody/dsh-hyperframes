/**
 * dsh-hyperframes entry module.
 *
 * This is a config-only bundle: its single row (`hyperframes-skills`) is
 * declared in `cordis.patch.yml` and runs from the shipped
 * `@deepseek-ai/dsh-skill-filesystem` plugin. This module exists so the
 * package satisfies the DSH plugin entry contract — it exports an
 * `apply(ctx)` plugin module — and as the stable import target for tooling.
 */
export default function apply(ctx) {
  // Nothing to register: the row is wired entirely through cordis.patch.yml.
}
