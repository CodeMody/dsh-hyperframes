# dsh-hyperframes

A config-only plugin bundle for [DeepSeek Harness](https://github.com/deepseek-ai) (DSH) that adds the six core [HyperFrames](https://github.com/heygen-com/hyperframes) agent skills as a single toggle in the Plugins manager. No JavaScript, nothing to build — just a Cordis patch row that mounts a dedicated skill scanner over this package's `skills/` folder.

HyperFrames is HeyGen's "write HTML, render video" system: agents author compositions as HTML + CSS + a little JS, and the `hyperframes` CLI renders them to MP4 with headless Chrome. These skills teach an agent how to drive it.

## The skills

| Skill | When it fires |
| --- | --- |
| `hyperframes` | Mandatory entry point — any request to make, create, edit, animate, or render a video/animation/motion graphic. |
| `hyperframes-cli` | The CLI dev loop: `init`, `check`, `preview`, `render`, `publish`, `doctor`, diagnostics. |
| `hyperframes-registry` | Before hand-building a named look (glitch, film grain, chart, confetti burst…), search the ~400-item block registry first. |
| `media-use` | Get or make any media for a video: music, SFX, images, voiceover, avatars, transcripts, colour grades. |
| `reverse-any-video` | Rebuild any existing video file as an editable HyperFrames project, frame-by-frame verified ("复刻这个视频"). |
| `style-sampling` | New episode in a proven style template (Collage / Finance / Animated Science / 3D Brand / 3D True Crime explainers). |

## Install

In DSH, install this repo as a plugin bundle (it works exactly like other `github:`-sourced bundles):

```
github:CodeMody/dsh-hyperframes
```

DSH pulls it via pnpm into the profile's `node_modules`, and the skills appear in agent sessions live — no restart. Disabling the bundle removes exactly these six skills again.

> **Note:** the patch mounts the skills from a **literal absolute path** into the `desktop` profile (`…\.dsh\profiles\desktop\node_modules\@local\dsh-hyperframes\skills`) rather than a profile-relative one. If you rename the profile or move `.dsh`, update `bundledSkillDir` in [`cordis.patch.yml`](cordis.patch.yml).

## Provenance

The skill folders are vendored verbatim from the HyperFrames desktop app (app-pinned CLI **0.9.30**), upstream © HeyGen, [Apache License 2.0](LICENSE). The DSH packaging in this repo (patch, locales, icon) is the same Apache-2.0 license.

The `hyperframes` CLI itself is **not** bundled here: skills invoke it as `npx hyperframes …` (Node ≥ 22; the first real `render` downloads a Puppeteer-managed Chrome automatically).
