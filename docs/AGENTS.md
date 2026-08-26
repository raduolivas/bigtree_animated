Yes. This gives us enough to create a **proper master prompt for OpenCode** rather than just a generic “build a Three.js website” prompt.

The key idea I would use is:

**The tree is not just a hero animation. It is the visual information architecture of the entire site.**

The trunk represents **BTT Consulting**, the branches represent capabilities/areas, and the **fruits represent the actual services/products**. As the visitor scrolls, the tree grows, branches develop, fruits appear, and each fruit becomes associated with the corresponding section/service.

I would also avoid asking OpenCode to reproduce the Lovable site visually. Instead, use your old site **only as a content/reference source**, while giving the new site an entirely new premium Three.js identity.

Here is the master prompt I recommend giving to OpenCode.

---

# BTT CONSULTING — PREMIUM THREE.JS INTERACTIVE WEBSITE

## Master Development Prompt for OpenCode

You are a senior creative developer, Three.js engineer, UX engineer, and frontend architect.

Build a **production-quality premium website for BTT Consulting**, a senior technology consultancy helping small and medium businesses grow through AI, modern web technology, automation, cloud engineering, cybersecurity, and senior engineering expertise.

This is NOT a generic corporate website.

The website should feel like a **premium modern AI/technology company website** with immersive scroll-driven storytelling, WebGL/Three.js animation, sophisticated typography, subtle motion, and excellent performance.

The central visual metaphor of the entire experience is:

# THE BIG TREE

The Big Tree represents BTT Consulting.

The tree should progressively develop as the visitor scrolls through the website.

The visitor should feel as though they are **scrolling through the life and growth of a technological tree**.

The tree begins relatively minimal and gradually becomes a large, sophisticated living structure.

Its:

* roots represent foundations
* trunk represents BTT Consulting
* large branches represent technology capabilities
* smaller branches represent specialized areas
* fruits represent BTT's services/products
* particles represent data, AI, connectivity, and technological energy
* light represents growth, intelligence, and opportunity

The tree must be the primary visual storytelling device.

---

# 1. CORE CREATIVE CONCEPT

The website should communicate:

> "We help your business grow."

The visual metaphor should communicate:

> "Strong foundations + experienced people + technology + AI = business growth."

The tree should therefore NOT look like a fantasy forest or cartoon tree.

It should feel:

* architectural
* technological
* elegant
* organic
* intelligent
* premium
* sophisticated
* slightly futuristic
* Dutch minimalist
* restrained rather than flashy

Think of the visual quality of premium AI/startup websites, but create an original visual identity for BTT.

Do NOT copy another website.

---

# 2. TECHNOLOGY STACK

Use a modern production-ready frontend stack.

Preferred:

* React
* TypeScript
* Vite or Next.js
* Three.js
* React Three Fiber where appropriate
* @react-three/drei where useful
* GSAP and/or ScrollTrigger for sophisticated scroll choreography
* Lenis or another high-quality smooth-scroll implementation
* modern CSS
* responsive design
* accessible HTML
* semantic sections

Use WebGL/Three.js only where it adds meaningful visual value.

Do not turn the entire website into an unnecessarily heavy WebGL application.

The DOM content must remain real HTML and accessible.

Three.js should provide the immersive visual layer.

---

# 3. IMPORTANT DEVELOPMENT PRINCIPLE

Do not build the entire site as one giant React component.

Create a clean architecture.

Suggested structure:

src/
components/
sections/
three/
animations/
hooks/
data/
styles/
utils/

Possible components:

Hero
TrustBar
Services
ServiceCard
BTTAdvantage
Technology
BTTMethod
Contact
Footer

Three.js components:

BigTreeScene
TreeTrunk
TreeBranches
TreeRoots
TreeFruit
TreeParticles
TreeGlow
TreeCamera
TreeInteraction

Animation systems:

ScrollController
TreeGrowthController
SectionTransition
ParallaxController

Data:

services.ts
technology.ts
method.ts
siteContent.ts

Keep content separated from presentation.

---

# 4. TREE SYSTEM

Create the tree procedurally where practical.

Do not use a single flat tree image.

The tree needs to feel like an actual 3D object.

The tree can be constructed using combinations of:

* curves
* tubes
* cylinders
* spheres
* instanced geometry
* particles
* emissive materials
* custom shaders where useful

The exact implementation is your decision.

Prioritize:

1. visual quality
2. performance
3. responsive behavior
4. maintainability

The tree should have depth.

The camera should be able to move around it slightly.

Use subtle lighting and atmospheric depth.

---

# 5. TREE GROWTH ANIMATION

This is the most important interaction on the website.

The tree should progressively grow as the user scrolls.

At the beginning:

* only a small part of the tree is visible
* roots/trunk begin forming
* particles slowly appear
* the environment is calm
* the tree feels like it is waiting to grow

As the user scrolls:

### Phase 1 — ROOTS

The roots slowly appear.

They should visually communicate:

* foundation
* architecture
* infrastructure
* experience

Subtle data-like particles can travel through the roots.

Do not overdo this.

---

### Phase 2 — TRUNK

The central trunk grows upward.

The trunk represents:

# BTT CONSULTING

The trunk should become the visual anchor of the entire experience.

The growth should be smooth and organic.

Avoid a simple scale animation.

Prefer:

* progressive curve drawing
* geometry reveal
* procedural growth
* opacity
* shader reveal
* camera movement

or a combination.

---

### Phase 3 — MAIN BRANCHES

Large branches progressively grow from the trunk.

Each major branch represents one major capability.

For example:

AI
Consultancy
Web
Cloud
Backend
Automation
Security
Pentesting
Mobile

The branches should not necessarily contain large text permanently.

They should primarily exist visually.

---

# 6. FRUIT SYSTEM — EXTREMELY IMPORTANT

The fruits represent BTT's actual services/products.

As the tree develops, fruits should progressively appear.

Each fruit should correspond to one service.

The fruit should feel like a premium technological object rather than a literal apple.

Possible visual treatment:

* glowing organic orb
* crystalline fruit
* translucent sphere
* metallic-organic object
* subtle internal particles
* small energy core
* elegant gradient surface

Do NOT make them look childish.

Each fruit should have:

* unique identity
* subtle glow
* hover interaction
* service name
* short description
* connection to the relevant branch

Example:

TREE BRANCH:
AI

FRUIT:
AI Growth Solutions

TREE BRANCH:
Engineering

FRUIT:
Websites & Web Apps

TREE BRANCH:
Cloud

FRUIT:
Cloud & Platform Engineering

TREE BRANCH:
Security

FRUIT:
Cybersecurity & SOC

etc.

---

# 7. FRUIT INTERACTION

When the user reaches the relevant section:

The corresponding fruit should become visually important.

Possible animation:

* fruit moves slightly toward camera
* glow increases
* surrounding particles become active
* branch connection illuminates
* corresponding HTML service card appears
* camera subtly reframes
* fruit rotates slowly

The transition should feel like:

"discovering a capability of the tree."

Avoid aggressive zooms.

Everything should feel premium and controlled.

---

# 8. SCROLL STORYTELLING

Scrolling should not simply move the page vertically.

Scrolling should control the narrative.

The visitor should progressively discover:

1. BTT
2. Growth
3. Services
4. Expertise
5. Advantage
6. Technology
7. Method
8. Contact

The Three.js scene should remain visually connected to the page throughout the experience.

Use scroll progress as an animation parameter.

Conceptually:

scrollProgress = 0 → tree seed

scrollProgress = 0.15 → roots

scrollProgress = 0.30 → trunk

scrollProgress = 0.45 → branches

scrollProgress = 0.60 → services/fruits

scrollProgress = 0.75 → mature tree

scrollProgress = 0.90 → tree becomes connected network

scrollProgress = 1.0 → full BTT ecosystem

These percentages are starting points, not rigid requirements.

Tune the choreography visually.

---

# 9. HERO

Hero headline:

"Your Business Deserves to Grow."

Badge:

"Your Partner in Growth"

Subheadline:

"Not sure how AI or modern tech can help you? You're not alone. We help business owners — from quiet streets to busy city centers — discover simple, powerful ways to save time, win more customers, and grow with confidence. No tech jargon, no pressure."

CTA:

Request a Quote

Secondary CTA:

Our Services

Scroll indicator:

Discover More

The hero should initially focus attention on:

* headline
* tree
* subtle environmental motion

Do not overload the hero.

The tree should be immediately recognizable as the visual identity of BTT.

---

# 10. HERO CAMERA

The camera should initially show enough of the tree to create curiosity.

As the visitor scrolls:

* camera slowly moves upward
* perspective changes
* branches enter the viewport
* fruits appear
* camera occasionally moves closer to important objects

Use cinematic but restrained camera motion.

Avoid:

* extreme rotations
* nausea-inducing movement
* excessive zoom
* random camera movement

The user should always understand where they are.

---

# 11. VISUAL STYLE

Create an original visual identity based on:

Dutch Minimalism
+
Premium AI Technology
+
Organic Growth
+
Senior Engineering

Color direction:

Primary:

Deep Forest Green

Secondary:

Charcoal / near-black

Accent:

Electric Blue

Additional colors may be used very subtly for:

* service fruits
* data particles
* interaction states
* gradients

Do not create a rainbow interface.

Use color strategically.

---

# 12. TYPOGRAPHY

Use:

Inter

or another premium modern sans-serif.

Typography should be:

* crisp
* spacious
* highly readable
* modern
* professional

Use large typography for section headings.

Do not make everything huge.

Hierarchy matters.

---

# 13. BACKGROUND

The background should be primarily:

* deep charcoal
* very dark green
* subtle gradients

Use atmospheric effects:

* soft radial gradients
* very subtle noise
* faint particles
* subtle glow

Avoid:

* excessive stars
* cyberpunk aesthetics
* neon overload
* generic AI grid backgrounds

The result should feel expensive and calm.

---

# 14. TRUST BAR

Include:

"Our team brings experience from:"

Google
Rabobank
Ericsson
ING
Philips

Make this section visually restrained.

It should establish credibility without becoming a giant logo wall.

---

# 15. SERVICES SECTION

Eyebrow:

"What We Do"

Title:

"Simple Solutions. Real Growth."

Description:

"You don't need to understand cloud computing or AI to benefit from them. You just need a partner who explains things plainly, moves fast, and truly cares about your success — whether you're a one-person shop or a growing team."

Services:

1. AI Growth Solutions for Local Businesses
2. Strategic Consultancy
3. Websites & Web Apps
4. Cloud & Platform Engineering
5. Backend & Systems
6. DevOps & Automation
7. Cybersecurity & SOC
8. Pentesting & Vulnerability
9. Mobile App Development

Each service must visually correspond to a fruit on the tree.

The service cards should animate into view.

Use staggered reveals.

Do not make every card perform the same animation.

---

# 16. SERVICE CARD BEHAVIOR

Each service card should have:

* number
* title
* description
* visual indicator
* connection to tree/service fruit

On hover:

* subtle elevation
* border/glow
* corresponding fruit reacts
* branch connection may illuminate

If technically practical, hovering a DOM service card should communicate with the Three.js scene.

Example:

Hover "Cybersecurity & SOC"

→ Security fruit glows

→ branch illuminates

→ particles move toward the fruit

→ subtle camera adjustment

This is a major opportunity to make the website feel integrated rather than two disconnected layers.

---

# 17. BTT ADVANTAGE

Eyebrow:

"Our Unique Model"

Title:

"Your Growth Partner: World-Class Skill, Personal Care"

Description:

"We combine deep technical expertise with a down-to-earth, personal approach. Hand-picked senior specialists who listen first, then build practical solutions that help your business grow — enhanced with AI-powered tools and friendly guidance."

Connection cards:

LOCAL PRESENCE

"Real conversations, face-to-face or online — we listen first and build relationships that last."

Tags:

Personal Service
Client First

WORLD-CLASS EXPERTISE

"Deep technical talent — including senior developers (10+ years), AI specialists, and product strategists who care about results, not jargon."

Tags:

Senior Developers
AI & Strategy

Technology pills:

Azure
React
Python
Node.js
Angular
AWS

Advantage cards:

Experienced People

10+ Years Experience

Fast, Reliable Delivery

Senior-Only Team

Senior-Only Guarantee:

"Every engineer on your project has 10+ years of experience. No juniors, no compromises—only battle-tested specialists who deliver excellence."

---

# 18. TECHNOLOGY SECTION

Eyebrow:

"Tech That Works For You"

Title:

"Your Technology, Handled"

Description:

"We set up and run the technology behind your business — from your website to your internal tools — so you can focus on what you do best, without worrying about servers, updates, or downtime."

Capabilities:

Cloud Architecture

CI/CD Pipelines

Observability

Security by Design

Infrastructure as Code

Performance Tuning

Visually connect this section with the tree's roots and branches.

Technology particles can become more structured here.

The tree can transition into a more architectural/network-like visualization.

This is an important conceptual transition:

ORGANIC TREE

→

TECHNOLOGICAL SYSTEM

---

# 19. BTT METHOD

Eyebrow:

"How We Work"

Title:

"The BTT Method"

Description:

"A proven five-step process that takes your business from idea to growth — built on 16+ years of experience scaling products at Google, Rabobank, and Ericsson."

Timeline:

01 — Discover

02 — Strategize

03 — Build

04 — Launch

05 — Grow

Create a sophisticated timeline.

The tree should visually respond to the five stages.

Potentially:

Discover → roots

Strategize → trunk

Build → branches

Launch → fruits

Grow → mature tree

This should reinforce the core metaphor.

---

# 20. VISION CARD

"Our vision"

"Become the most trusted IT partner for small and medium businesses across the Netherlands — and beyond, with our sights set on bringing the same elite engineering and AI-driven growth to Canada next."

Give this section breathing room.

This should feel aspirational.

---

# 21. CONTACT SECTION

Eyebrow:

"Get Started Today"

Title:

"Let's Talk About Your Growth"

Description:

"Tell us what you're trying to achieve — more customers, less busywork, or a better website. We'll show you the simplest way to get there, with no pressure and no tech jargon."

Form:

Full Name

Company Email

Service Needed

Project Brief

Urgent Project

Send Request

Success state:

Thank You!

"Your request has been received. Our senior engineers will review your project and get back to you within 24 hours."

Submit Another Request

The tree should reach its most complete state around this part of the experience.

The final tree should feel:

* mature
* alive
* connected
* intelligent
* stable

The visitor should understand:

"This is what growth looks like."

---

# 22. FOOTER

BTT Consulting

"Practical technology solutions for businesses that want to grow. We combine real experience with AI-powered tools to help you work smarter, reach more customers, and compete with confidence."

Headquarters:

Amsterdam, Netherlands

Services:

Web App Development
Cloud Integration
DevOps & Automation
Strategic Consultancy

Company:

The BTT Advantage
The BTT Method
Contact Us

Connect:

[info@bttconsulting.com](mailto:info@bttconsulting.com)

LinkedIn

Bottom:

© {currentYear} BTT Consulting. All rights reserved.

Privacy Policy
Terms of Service

---

# 23. OLD WEBSITE CONTENT

The existing Lovable website is:

[https://btt-dutch-roots.lovable.app](https://btt-dutch-roots.lovable.app)

Use it only as a content/reference source.

Do NOT simply clone its visual design.

The new website should be a substantial evolution.

The existing site can provide:

* content references
* terminology
* existing messaging
* possible business information

The new website should have its own visual identity.

---

# 24. RESPONSIVE DESIGN

Desktop is the primary experience.

However, the site must work extremely well on:

* desktop
* laptop
* tablet
* mobile

On mobile, do NOT simply shrink the desktop Three.js experience.

Create an intentional mobile experience.

Possible mobile behavior:

* reduce geometry complexity
* reduce particle count
* simplify camera movement
* reduce post-processing
* reduce animation intensity
* maintain the tree metaphor
* keep important fruits visible
* preserve scroll storytelling

Performance is more important than visual complexity.

---

# 25. PERFORMANCE

This is a production website.

Pay particular attention to:

* GPU usage
* memory
* draw calls
* mobile performance
* asset loading
* shader complexity
* texture sizes
* animation loops
* unnecessary React renders

Use:

* instancing where appropriate
* lazy loading
* level of detail where useful
* reduced particle counts on mobile
* requestAnimationFrame efficiently
* disposal of Three.js resources
* code splitting

The page should feel smooth.

Target:

60fps on modern desktop hardware.

Gracefully degrade on weaker devices.

---

# 26. ACCESSIBILITY

The website must remain usable without WebGL.

Important content must exist in HTML.

Three.js is decorative/interactive enhancement, not the only source of information.

Include:

* semantic headings
* accessible navigation
* keyboard navigation
* accessible buttons
* labels for forms
* focus states
* sufficient contrast
* reduced-motion support

Respect:

prefers-reduced-motion

When reduced motion is enabled:

* disable intense camera movement
* reduce tree animation
* remove unnecessary parallax
* keep content immediately accessible

---

# 27. NAVIGATION

Navigation:

BTT Consulting

Home
Services
BTT Advantage
BTT Method
Contact

Anchor IDs:

#home
#services
#btt-advantage
#btt-method
#contact

The navigation should transition elegantly.

On desktop:

* transparent/floating navigation initially
* subtle background after scrolling
* minimal border
* smooth anchor scrolling

On mobile:

* elegant menu
* avoid generic hamburger styling if possible
* maintain premium aesthetic

---

# 28. MOTION LANGUAGE

Every animation should have purpose.

Use:

* smooth easing
* staggered reveals
* subtle opacity
* transform
* blur
* scale
* camera movement
* depth
* parallax

Avoid:

* bouncing UI
* excessive spring animations
* random movement
* constant floating everywhere
* animation for animation's sake

The overall movement should feel:

organic

like a tree growing.

This is important.

The animation language should reflect the brand metaphor.

---

# 29. THREE.JS VISUAL DETAILS

Consider implementing:

### Tree branches

Use Curve3D / CatmullRomCurve3 or equivalent.

### Branch geometry

Use TubeGeometry or procedurally generated geometry.

### Fruits

Use instanced meshes where possible.

### Particles

Use Points / BufferGeometry.

Particles should represent:

* data
* AI
* connections
* information
* growth

### Lighting

Use restrained:

* ambient light
* directional light
* point lights near fruits
* subtle emissive materials

### Post-processing

Use sparingly.

Possible:

* bloom
* subtle vignette
* slight depth of field

Do not make the site look like a video game.

---

# 30. TREE COLOR BEHAVIOR

The tree should primarily use dark organic materials.

Branches:

dark forest / charcoal

Energy:

electric blue

Fruits:

subtle variations around the BTT palette

As the tree matures:

the tree can become slightly brighter.

This visually represents increasing energy and growth.

---

# 31. INTERACTION MODEL

The tree should respond to:

SCROLL

HOVER

CLICK

MOUSE POSITION

TOUCH

But interactions must remain subtle.

Mouse movement:

very subtle camera parallax.

Hover:

service fruit reacts.

Click:

service information can be highlighted.

Scroll:

primary animation driver.

---

# 32. DATA-DRIVEN SERVICES

Do not hardcode each service separately into the rendering logic.

Create a service data structure.

Each service should have fields such as:

id
title
shortDescription
description
category
fruitPosition
branchId
accent
icon
slug

This makes future expansion easy.

---

# 33. OPTIONAL SERVICE DETAIL ROUTES

If routing is implemented, create individual service pages.

Routes:

/services/ai-growth
/services/strategic-consultancy
/services/web-apps
/services/cloud-platform
/services/backend
/services/devops
/services/cybersecurity
/services/pentesting
/services/mobile

These pages should inherit the same BTT design language.

The tree can appear as a smaller persistent visual element.

Do not duplicate enormous Three.js scenes unnecessarily.

---

# 34. SERVICE CONTENT

Use the complete service information provided in the project content/Markdown file.

Do not invent additional claims.

Where case studies are provided, use them.

Where technologies are provided, use them.

Keep content separated from UI components.

---

# 35. CONTENT SOURCE

I will provide the website content as a Markdown file.

Treat that Markdown file as the authoritative content source.

Create a structured content/data layer from it.

Do not bury large amounts of content directly inside React components.

---

# 36. IMPORTANT BRAND MESSAGE

Throughout the site, repeatedly reinforce:

Senior expertise.

Simple technology.

AI-enhanced growth.

No unnecessary jargon.

Personal partnership.

Practical results.

Growth.

The website should make a small business owner feel:

"I finally understand what technology can do for my business."

Not:

"I need to become a software engineer to understand this company."

---

# 37. DESIGN QUALITY BAR

The final result must look like a website created by:

* a senior frontend engineer
* a senior creative developer
* a professional product designer
* a Three.js specialist

Do not produce:

* template-like layouts
* generic SaaS sections
* generic gradient blobs
* stock photos
* excessive glassmorphism
* excessive cards
* generic AI aesthetics
* cheap 3D effects
* random floating cubes
* generic particle backgrounds

The tree is the hero.

The tree is the story.

The tree is the brand metaphor.

---

# 38. IMPLEMENTATION PHASES

Build the project in phases.

## PHASE 1 — Foundation

Create:

* project architecture
* routing
* global styles
* typography
* color system
* responsive layout
* navigation
* content data structures

Do not spend excessive time on polish yet.

---

## PHASE 2 — Three.js Tree

Build:

* scene
* camera
* lighting
* roots
* trunk
* branches
* fruits
* particles

Create the tree as a reusable component.

---

## PHASE 3 — Scroll Engine

Implement:

* smooth scrolling
* scroll progress
* tree growth
* camera movement
* section synchronization

Make scroll progress deterministic.

Do not rely on random animation timing.

---

## PHASE 4 — Hero

Create the complete hero experience.

Focus heavily on:

* first impression
* typography
* tree
* camera
* scroll transition

This is the most important visual section.

---

## PHASE 5 — Services

Connect:

DOM service cards

to:

Three.js fruits.

Hovering a service should influence the corresponding fruit.

---

## PHASE 6 — Advantage / Technology / Method

Implement the remaining storytelling sections.

Continue the tree's evolution.

---

## PHASE 7 — Contact

Create the final mature-tree state.

Implement:

* form validation
* loading state
* success state
* error state

Do not pretend the form is connected to a backend unless one exists.

---

## PHASE 8 — Responsive

Optimize:

desktop
tablet
mobile

---

## PHASE 9 — Accessibility

Implement:

keyboard navigation
focus states
reduced motion
semantic structure
ARIA where necessary

---

## PHASE 10 — Performance

Profile the Three.js scene.

Optimize:

draw calls
particles
geometry
textures
rendering
memory

---

# 39. DEVELOPMENT RULES FOR OPENCODE

Before writing significant code:

1. Inspect the project.
2. Identify existing architecture.
3. Identify available dependencies.
4. Read the Markdown content.
5. Determine whether Three.js / React Three Fiber already exists.
6. Reuse good existing infrastructure where appropriate.
7. Do not destroy working functionality without reason.

Then create an implementation plan.

Work incrementally.

After each major phase:

* run the application
* inspect for errors
* run TypeScript checks
* run linting
* fix errors
* verify responsive behavior

Do not generate the entire application blindly in one pass.

---

# 40. VISUAL VERIFICATION

After implementing each major visual section, inspect it visually.

Pay particular attention to:

* tree proportions
* typography
* spacing
* camera framing
* scroll timing
* fruit positioning
* section transitions
* mobile layout

The visual result is more important than merely satisfying the component checklist.

---

# 41. 9ROUTER / MODEL USAGE

The project may use 9router to route requests between available AI models.

Do not hardcode assumptions about a particular model.

When using an AI coding model:

* keep prompts/context focused
* inspect existing code before modification
* make incremental changes
* avoid unnecessary rewrites
* preserve working components
* explain architectural decisions in code comments only where useful

If token limits are reached, continue from the existing project state rather than recreating the application.

---

# 42. DO NOT OVERENGINEER

The goal is a beautiful website, not a Three.js technical demonstration.

If a visual effect can be achieved elegantly with CSS instead of WebGL, use CSS.

If Three.js provides a meaningful visual advantage, use Three.js.

Always prioritize:

UX > visual gimmicks

Performance > complexity

Clarity > decoration

Storytelling > technical novelty

---

# 43. FINAL EXPERIENCE

The complete visitor journey should feel approximately like this:

### OPEN

Dark, elegant environment.

Small developing tree.

Headline:

"Your Business Deserves to Grow."

The visitor immediately understands the brand.

### SCROLL

Roots develop.

The trunk grows.

The camera moves.

The tree becomes larger.

### DISCOVER

Branches develop.

The visitor begins discovering BTT's capabilities.

### SERVICES

Fruits appear.

Each fruit represents something BTT can provide.

The user can explore them.

### EXPERTISE

The tree becomes increasingly sophisticated.

Technology becomes visible within the organic structure.

### METHOD

The visitor understands how BTT transforms ideas into growth.

### FINAL

The tree is mature.

The ecosystem is alive.

The site arrives at:

"Let's Talk About Your Growth."

The visual story ends where the business relationship begins.

---

# 44. SUCCESS CRITERIA

The project is successful if:

1. The first 5 seconds feel premium.
2. The tree is immediately memorable.
3. Scrolling feels like controlling the growth of the tree.
4. The services are visually represented by fruits.
5. The Three.js scene and HTML content feel like one experience.
6. The website feels original rather than template-based.
7. The site communicates senior expertise without corporate jargon.
8. The website works on mobile.
9. The experience remains smooth.
10. The design feels appropriate for a serious technology consultancy.
11. The user understands BTT's value proposition without needing technical knowledge.
12. The tree metaphor remains coherent from hero through contact.
13. Accessibility is preserved.
14. Performance remains strong.
15. The codebase is maintainable and data-driven.

---

# FINAL INSTRUCTION

Do not start by generating a huge amount of code.

First inspect the existing project and Markdown content.

Then produce a concise implementation plan.

After the plan, begin with Phase 1.

Build the experience iteratively.

The most important visual requirement is:

**A large, beautiful, sophisticated Three.js tree that progressively grows and develops as the user scrolls, with its branches representing BTT capabilities and its fruits representing BTT services/products.**

The website should make the visitor feel that they are literally watching a business ecosystem grow.

The final emotional message should be:

# "Your business can grow. We build the technology that helps it happen."
