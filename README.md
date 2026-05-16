# Spotter

Spotter is a parent-facing protection tool for recognizing warning signs, talking calmly with a child, documenting what happened, and finding the right local help path.

It grew out of the earlier `Spot!` protection concept and the `Me!` support-methodology note. Those source notes are preserved in `source-imports/`; this folder is now the canonical Spotter product folder.

## Core Promise

Spotter helps parents:

- recognize grooming, coercion, manipulation, predatory targeting, isolation, harmful online influence, self-harm risk, and abuse-risk patterns earlier
- talk to a child without escalating shame or secrecy
- document observations, evidence, and timeline details clearly
- build a local safety/help packet using ZIP, city/state, and jurisdiction questions
- choose safer next steps without pretending the app is a legal, clinical, or law-enforcement authority

Spotter should not make definitive accusations, diagnose abuse, promise legal outcomes, or replace emergency services, therapists, CPS, law enforcement, school safety teams, or child advocacy professionals.

## Product Frame

Parent operating frame:

> I am a parent or guardian. Something feels off. Help me understand what I am seeing, document it clearly, talk to my child safely, and choose the safest next step.

Safer product language:

- "This may be concerning because..."
- "Consider documenting..."
- "If there is immediate danger, call emergency services."
- "If suicide or emotional crisis may be involved in the U.S., call or text 988."

Avoid:

- "AI catches predators"
- "Incel extraction"
- "Legal proof"
- "Diagnosis"
- "Confirmed abuse"

Use:

- "Isolation & Online Influence Safety Plan"
- "Parent Conversation Methodology"
- "Local Safety Map"
- "Local Help Packet"
- "Owner/parent-controlled evidence packet"

## App Machine Posture

Spotter is currently being shaped inside the Ionic App Machine shell:

```text
/Users/dannybrooking/Documents/GitHub = master copy/app-machine/App Machine CTP app project template/ctp-ionic-app-machine
```

The App Machine prototype currently lives in:

```text
src/pages/Home.tsx
src/pages/Home.css
```

Use App Machine for:

- phone-first Ionic shell shaping
- parent workflow prototype
- mode picker patterns
- SayIt-style conversation surfaces
- local packet preview
- timeline/evidence surface

When proven, Spotter can be ported into its own standalone PWA runtime under this `Spotter` folder.

## Icon Direction

Use the red binoculars app icon on a soft white rounded-square tile.

The symbol should communicate:

- watchfulness
- early recognition
- parent readiness
- calm alertness

It should not feel clinical, punitive, surveillance-heavy, or law-enforcement branded.

Assets copied from the old `Spot` folder live in `assets/`.

## Core Modes

- Something feels wrong
- My child is hiding something
- My child may be getting groomed
- My child is struggling between split homes
- I am a divorced or co-parenting parent trying to document concerns fairly
- My child may be isolated or radicalized
- My child may be suicidal
- My child was threatened or blackmailed online
- My child sent or received sexual images
- I need to ask without making it worse
- I need to set a boundary tonight
- What should I do right now?

## Parent Conversation Methodology

Spotter should include a SayIt-style conversation helper for parents and guardians.

Purpose:

Help a scared parent talk to a child in a way that lowers shame, preserves safety, and keeps the child connected instead of pushing them deeper into secrecy or isolation.

This should generate practical parent-facing language for:

- the next sentence
- the next question
- the next boundary
- what not to say
- when to pause
- when to escalate to crisis help, CPS, law enforcement, school safety, or a therapist

Core principles:

- Calm first.
- Connection before correction.
- Safety before interrogation.
- Curiosity before accusation.
- Preserve evidence before deleting.
- Do not shame the child for what happened online.
- Do not mock ideology, loneliness, sexual confusion, fear, or embarrassment.
- Do not promise secrecy if safety or abuse reporting may be involved.
- Do not confront suspected adults, exploiters, or online actors in a way that could increase risk.

Example parent scripts:

- "I am not mad. I am here because I am worried about your safety."
- "You are not in trouble for telling me."
- "Whatever someone said or asked you to do online, we can handle it together."
- "You do not have to explain it perfectly. Start wherever you can."
- "I may need help from another safe adult, but I will not leave you alone in this."
- "I am going to stay calm. Your job is just to be honest with me one step at a time."

## Local Safety Map

The billable core is the Local Safety Map / Local Help Packet.

Area code alone is not reliable enough for jurisdiction.

Use:

- ZIP code
- city/state
- optional current location
- where the child lives
- where the incident happened
- what kind of concern is involved

Spotter should return official/local resources such as:

- state CPS reporting hotline
- county child protective services office where available
- local police non-emergency number
- sheriff department where county jurisdiction matters
- emergency reminder to call 911 if there is immediate danger
- official online reporting links where available
- state mandatory reporting guidance
- school or student-safety contacts when relevant
- child advocacy center links where available
- NCMEC / CyberTipline path for online exploitation concerns
- Childhelp hotline as a national fallback
- 988 for suicide or emotional crisis support in the U.S.

## Split-Family / Divorced Parent Lane

Spotter should include a structured path for divorced parents, co-parents, guardians, and split-family situations.

This lane should help parents document without escalating conflict or coaching the child.

Common concern patterns:

- custody exchange distress
- sudden fear or shutdown before or after visits
- pressure to keep secrets between homes
- a child being asked to report, spy, monitor, or carry information about the other parent
- a child being used as a messenger between adults
- loyalty binds or being asked to choose sides
- inconsistent stories that need careful tracking
- bullying or sibling conflict across split households
- online contact or device issues between homes
- school behavior changes after transitions
- unsafe supervision concerns
- documentation needed for therapists, schools, mediators, attorneys, CPS, or court-adjacent professionals

Parent guidance should stay neutral and factual:

- record dates, times, locations, and exact child statements
- record exact requests made of the child, such as questions they were told to ask or information they were told to gather
- separate direct observation from interpretation
- avoid leading questions
- avoid using Spotter to coach a child against another parent
- focus on safety, stability, and documentation

Example script:

```text
You do not have to report on either home. I just want to understand how you are feeling and whether anything feels unsafe or confusing.
```

## Billable Shape

Recommended price:

```text
$5/month or annual equivalent
```

Spotter is paid-only. There is no free version.

Paid:

- month-to-month pattern comparison
- parent-owned documentation that turns scattered signs into a clearer record
- exportable proof packets for conversations with schools, platforms, therapists, CPS, law enforcement, or child advocacy professionals
- unlimited local safety packets
- saved localities
- printable who-to-contact PDF
- official source links with timestamps
- parent call/reporting scripts
- timeline builder
- evidence packet support
- local resource update checks
- multiple protected cases later

Primary CTA:

```text
Get Started - $5/month
```

The CTA should send the parent directly to Stripe checkout. In the App Machine prototype, this is controlled by:

```text
VITE_STRIPE_CHECKOUT_URL
```

Billable promise:

> Spotter helps parents find the right local reporting path before panic makes everything harder.

## Phase Plan

### Phase 1: App Machine Prototype

- parent-facing hero
- emergency guidance
- concern mode picker
- SayIt-style parent scripts
- local help packet preview
- timeline/evidence packet surface
- $5/month paid package positioning

### Phase 2: Local-First PWA Runtime

- standalone Spotter PWA shell
- local encrypted notes
- local cases
- local timeline builder
- printable parent packet PDF
- source-imported icon assets

### Phase 3: Data And AI

- curated local resource dataset
- ZIP/city/state lookup
- source timestamping
- AI-assisted parent-script generation
- AI-assisted timeline summary
- AI-assisted concern categorization

AI must never make accusations, diagnose abuse, or replace emergency/professional help.

## Source Imports

The previous source folders have been consolidated here:

- `source-imports/SPOT_ORIGINAL_README.md`
- `source-imports/ME_SPOTTER_IDEA_README.md`

The old `Spot` folder and `Idea Bank/Me` folder are no longer the canonical product homes after this consolidation.
