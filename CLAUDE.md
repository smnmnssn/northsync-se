# Northsync

Northsync is a Swedish web development and digital solutions business.

## Project goal

Build and maintain the official Northsync website at:

https://northsync.se

Northsync builds both new solutions and improves existing ones.

Core areas:

- Websites
- E-commerce
- Digital systems
- Integrations
- Automation and internal tools

Core positioning:

"Bygga nytt. Förbättra befintligt. Förenkla digitalt."

Do not position Northsync only as a website modernization company.

## Source of truth

Before making significant design, layout or copy changes, read:

`docs/northsync-v1-spec.md`

That file contains the approved design direction, brand system, content, layout and V1 scope.

Do not silently deviate from approved copy or design direction.

## Technical principles

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Geist / Geist Mono
- Custom SVG components where appropriate

Keep the project simple.

Do not add unnecessary abstractions, dependencies or infrastructure.

V1 does not need:

- database
- CMS
- authentication
- admin dashboard
- analytics
- chatbot
- booking system
- automated test framework

Automated tests should only be introduced later if new functionality materially benefits from them.

## Validation

For relevant changes, use:

- lint
- typecheck
- production build
- responsive visual review
- accessibility basics
- keyboard/focus checks
- navigation/link verification

Check layouts at approximately:

320px
390px
768px
1024px
1440px

No horizontal overflow is acceptable.

## Coding-agent efficiency

Keep context usage low.

Do not repeatedly restate the entire project specification in plans or reports.

Read the relevant project files instead.

Do not produce unnecessary documentation.

Do not create extensive progress reports unless requested.

When context usage becomes high, first reach a clean checkpoint before using `/compact`.

Never `/compact` in the middle of unresolved implementation or debugging work.

Prefer small, well-defined implementation steps over repeatedly re-analyzing the whole project.