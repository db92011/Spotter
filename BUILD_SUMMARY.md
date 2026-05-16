# Spotter Build Summary

Created: 2026-05-05

Spotter is the consolidated parent-facing protection program replacing the earlier `Spot` and `Idea Bank/Me` source folders for this concept.

## Current State

- Canonical product folder: `/Users/dannybrooking/Documents/GitHub = master copy/Spotter`
- Source notes preserved in: `source-imports/`
- Icon assets copied into: `assets/`
- App Machine prototype lives in: `/Users/dannybrooking/Documents/GitHub = master copy/app-machine/App Machine CTP app project template/ctp-ionic-app-machine`

## App Machine Prototype

The current Ionic App Machine prototype uses:

- `src/pages/Home.tsx`
- `src/pages/Home.css`

Prototype features:

- parent-facing hero
- emergency guidance
- concern mode picker
- SayIt-style parent scripts
- split-family / divorced parent documentation lane
- Local Safety Map / Local Help Packet preview
- timeline/evidence packet surface
- `$5/month` paid package positioning

## Product Definition

Spotter helps parents recognize warning signs, talk safely with a child, document clearly, and find local reporting/help paths.

It is not:

- an emergency service
- law enforcement
- legal advice
- clinical diagnosis
- an AI accusation engine

It should use careful language such as:

- "This may be concerning because..."
- "Consider documenting..."
- "If there is immediate danger, call emergency services."
- "If suicide or emotional crisis may be involved in the U.S., call or text 988."

## Pricing Direction

Recommended paid plan:

```text
$5/month or annual equivalent
```

Spotter is paid-only. There is no free version.

Primary CTA:

```text
Get Started - $5/month
```

In the App Machine prototype, the CTA is wired to:

```text
VITE_STRIPE_CHECKOUT_URL
```

Paid value centers on:

- month-to-month pattern comparison
- parent-owned documentation that turns scattered signs into a clearer record
- exportable proof packets for conversations with schools, platforms, therapists, CPS, law enforcement, or child advocacy professionals
- neutral split-family documentation for divorced parents, co-parents, custody transitions, child behavior changes between homes, and signs a child is being used as a messenger, monitor, or spy
- unlimited local safety packets
- parent conversation scripts
- saved localities
- printable who-to-contact PDFs
- source links with timestamps
- evidence packet support
- timeline builder

## Next Build Move

Keep shaping the phone-first experience inside Ionic App Machine until the parent flow feels real. Then port the proven shell into a standalone Spotter PWA runtime.
