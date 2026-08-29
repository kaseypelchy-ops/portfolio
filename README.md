# Kasey Alexander Pelchy — Interactive Portfolio

A multi-page interactive portfolio showcasing work across **software engineering, data engineering, analytics, automation, AI, decision-support systems, and marketing technology**.

This portfolio is built with **Next.js, React, and TypeScript** and is designed around interactive technical case studies rather than static project summaries.

Each featured project explains:

- the business or operational problem
- what was built
- how the system was designed
- key engineering decisions
- the technology involved
- an interactive synthetic demonstration of the workflow

> Production systems, credentials, private data, proprietary business logic, and confidential operational information are intentionally excluded.

---

## Live Portfolio

**[View the interactive portfolio →](https://kaseys-portfolio.vercel.app)**

---

# Featured Projects

## Market Recovery Intelligence Platform

A full-stack market-intelligence and decision-support system designed to identify declining markets, investigate underlying causes, prioritize recovery opportunities, and measure intervention outcomes.

The system brings together operational evidence such as acquisition activity, churn behavior, subscriber history, market identity, lifecycle state, and recovery-project information into a canonical analytical model.

The architecture separates:

```text
Operational Data
        ↓
Validation & Normalization
        ↓
Canonical Market Identity
        ↓
Derived Metrics
        ↓
Health Signals
        ↓
Recovery Scoring
        ↓
Eligibility Policy
        ↓
Deterministic Ranking
        ↓
Market Investigation
        ↓
Recovery Project
        ↓
Outcome Measurement
```

### Interactive Demo

The synthetic browser-based demonstration includes:

- fictional market selection
- subscriber movement
- acquisition and churn signals
- data completeness
- severity assessment
- actionability / eligibility
- recovery prioritization
- ranking rationale
- simulated recovery-project creation
- immutable baseline capture

### Selected Engineering Work

- canonical data modeling
- multi-horizon trend analysis
- coverage-aware scoring
- data-completeness modeling
- deterministic ranking
- transactional project creation
- immutable measurement baselines
- analytical read-path optimization
- shared TypeScript domain logic
- PostgreSQL indexing
- regression validation

### Technology

Next.js · React · TypeScript · PostgreSQL · Supabase · SQL · Data Engineering · Analytics

### Technical Showcase

[View the Market Recovery technical showcase →](https://github.com/kaseypelchy-ops/market-recovery-platform-showcase)

---

## Field Sales Operations Platform

A field-sales operations platform connecting serviceable-address data, territory management, canvassing, customer dispositions, pricing, installation scheduling, sale submission, post-sale review, invoicing, lifecycle tracking, and reporting.

The application is designed around an address-centered workflow for field representatives while providing centralized operational visibility for management.

The system accounts for real-world field conditions such as unreliable connectivity, shared scheduling capacity, realtime updates, transactional workflows, and preservation of unsynced work.

### Interactive Demo

The synthetic demonstration walks through a field-sales workflow:

```text
Select Territory
        ↓
Choose Address
        ↓
Record Disposition
        ↓
Select Offer
        ↓
Choose Installation
        ↓
Submit Synthetic Sale
        ↓
Operational State Updates
```

### Selected Engineering Work

- transactional sales workflows
- progressive web application behavior
- offline synchronization
- realtime reconciliation
- installation-capacity management
- pricing snapshots
- duplicate-safe notifications
- lifecycle tracking
- PostgreSQL functions
- role-based workflows
- data-quality controls
- operational reporting
- cross-system integration

### Technology

JavaScript · HTML · CSS · PostgreSQL · PL/pgSQL · Supabase · Vercel · Leaflet

### Technical Showcase

[View the FieldOS technical showcase →](https://github.com/kaseypelchy-ops/fieldos-project-showcase)

---

## AI Call Quality & Coaching Platform

An AI-powered quality assurance, coaching, and management analytics system for customer-service calls.

Completed recordings move through an asynchronous processing pipeline that validates eligibility, prevents duplicate analysis, acquires processing locks, performs structured AI evaluation, applies deterministic application scoring, stores the result, and routes the output into coaching workflows.

The architecture separates ingestion, queueing, AI evaluation, deterministic business logic, persistence, notification delivery, coaching, and reporting.

### Interactive Demo

The synthetic pipeline demonstrates:

```text
Recording Received
        ↓
Eligibility Check
        ↓
Duplicate Check
        ↓
Processing Lock
        ↓
Structured AI Evaluation
        ↓
Application Scoring
        ↓
Persist Result
        ↓
Coaching Recommendation
```

The portfolio demonstration does not process real recordings or production customer data.

### Selected Engineering Work

- queue-based processing
- asynchronous workers
- idempotent analysis
- structured LLM output
- deterministic scoring
- retry handling
- processing locks
- duplicate prevention
- automated notifications
- coaching workflows
- effectiveness measurement
- operational-health monitoring
- management analytics

### Technology

Python · TypeScript · React · Next.js · PostgreSQL · PL/pgSQL · Supabase · Google Cloud · Cloud Tasks · Vercel · AI / LLMs

### Technical Showcase

[View the AI Call Quality technical showcase →](https://github.com/kaseypelchy-ops/ai-call-quality-platform-showcase)

---

## Fiber Service Area Mapping Pipeline

A geospatial data-processing pipeline that converts KML and KMZ service-area boundaries into structured broadband-location datasets.

The pipeline parses and repairs geometry, calculates bounding areas, reduces a large broadband-location dataset into a smaller candidate set, performs exact point-in-polygon analysis, normalizes matched locations, and produces structured downstream outputs.

The cloud workflow also includes duplicate protection, processing locks, stale-lock recovery, lineage tracking, and optional cost-controlled enrichment.

### Interactive Demo

The demonstration visualizes:

```text
Service-Area Geometry
        ↓
Parse & Repair
        ↓
Bounding Box
        ↓
Candidate Reduction
        ↓
Point-in-Polygon Match
        ↓
Normalization
        ↓
Structured Output
```

### Selected Engineering Work

- geometry parsing
- geometry repair
- coordinate transformations
- bounding-box filtering
- DuckDB query optimization
- exact point-in-polygon analysis
- streaming record processing
- normalization
- deduplication
- processing locks
- stale-lock recovery
- lineage tracking
- cloud automation

### Technology

Python · DuckDB · SQL · Shapely · PyProj · Google Cloud · KML / KMZ · FCC Broadband Fabric

### Technical Showcase

[View the Fiber Mapping technical showcase →](https://github.com/kaseypelchy-ops/fiber-service-area-mapping-showcase)

---

## SEO, AEO & Search Intelligence Platform

A production search-operations platform connecting structured website content, technical site health, organic-search performance, optimization workflows, and AI-visibility measurement.

The project began as a database-driven SEO and Answer Engine Optimization system. Pages, geographic hierarchy, services, promotions, keywords, FAQs, sections, internal links, redirects, metadata, and publishing state are modeled as relational data and rendered through reusable WordPress templates.

It has since expanded into a protected Next.js application that combines managed page data, live rendered-site evidence, Google Search Console performance, GA4 AI referral data, Bing AI citation evidence, automated monitoring, prioritization models, internal-link workflows, and optimization experiments.

### Interactive Demo

The synthetic demonstration lets visitors move across the platform's connected operating layers:

```text
Structured Content
        ↓
Publish + Render
        ↓
Search + Site Evidence
        ↓
Opportunity Intelligence
        ↓
Implementation + Verification
        ↓
Outcome Measurement
```

Visitors can explore localized publishing, Search Console opportunity evidence, technical health, AI referral and citation measurement, and the combined public-safe evidence object.

### Selected Engineering Work

- relational content modeling
- hierarchical geography
- JSONB document assembly
- PL/pgSQL content generation
- reusable WordPress publishing
- Search Console integration
- intent and page-ownership intelligence
- opportunity prioritization
- content-gap and cannibalization analysis
- rendered-site health monitoring
- internal-link execution and verification
- optimization experiment tracking
- GA4 AI-referral measurement
- Bing AI citation intelligence
- import lineage and pipeline operations
- explainable scoring and guardrails

### Technology

Next.js · React · TypeScript · PostgreSQL · Supabase · WordPress · PHP · Google Search Console · Google Analytics 4 · Bing Webmaster Tools · REST APIs · JSONB · JSON-LD · Vercel

### Technical Showcase

[View the SEO, AEO & Search Intelligence technical showcase →](https://github.com/kaseypelchy-ops/seo-aeo-content-platform-showcase)

---

# Portfolio Architecture

The portfolio itself is a multi-page Next.js application.

```text
/
├── projects
│   ├── market-recovery
│   ├── fieldos
│   ├── ai-call-quality
│   ├── fiber-mapping
│   └── seo-aeo
│
├── about
├── experience
└── contact
```

Each project page uses a shared case-study structure so the portfolio remains consistent while still allowing each system to communicate its own architecture and workflow.

---

# Case Study Structure

Each featured project is organized around the same general progression:

```text
The Problem
        ↓
What Was Built
        ↓
Architecture
        ↓
Interactive Demonstration
        ↓
Engineering Challenges
        ↓
Key Decisions
        ↓
Technology
        ↓
Technical Showcase
```

The goal is to explain both:

**why the system mattered**

and

**how the system was engineered**

---

# Business View & Engineering View

The portfolio is designed to communicate technical work to different audiences.

Some project experiences distinguish between two perspectives.

## Business View

Focuses on:

- the operational problem
- who needed the solution
- what decision needed to be made
- how the workflow changed
- what value the system created

## Engineering View

Focuses on:

- system architecture
- data models
- state transitions
- database behavior
- processing pipelines
- validation
- failure handling
- integration patterns
- performance
- implementation decisions

This reflects the way I approach most projects: the technical architecture is designed around the business process rather than treated as a separate concern.

---

# Areas of Work

My work spans several overlapping disciplines:

### Software Engineering

- full-stack applications
- internal business systems
- workflow applications
- transactional processes
- reusable application architecture
- API integration

### Data Engineering & Analytics

- PostgreSQL
- relational modeling
- ETL workflows
- analytical views
- scoring systems
- data normalization
- decision-support systems
- reporting

### Automation & AI

- AI / LLM workflows
- asynchronous workers
- queue-based processing
- notifications
- scheduled automation
- duplicate protection
- idempotent processing
- operational orchestration

### Marketing Technology

- marketing operations
- SEO
- AEO
- structured content
- localized content systems
- field-sales technology
- acquisition analytics
- market intelligence

### Geospatial Engineering

- KML / KMZ processing
- geometry repair
- coordinate transformations
- spatial filtering
- point-in-polygon analysis
- broadband-location processing

---

# Technology

## Languages

- TypeScript
- JavaScript
- Python
- PHP
- SQL
- PL/pgSQL
- HTML
- CSS

## Application

- React
- Next.js
- WordPress
- Progressive Web Applications

## Databases & Data

- PostgreSQL
- Supabase
- DuckDB
- JSON
- JSONB

## Cloud & Integration

- Vercel
- Google Cloud
- Cloud Tasks
- REST APIs
- event-driven workflows

## AI

- LLM-based analysis
- structured model outputs
- deterministic application scoring
- asynchronous AI pipelines
- AI-assisted coaching workflows

## Geospatial

- Shapely
- PyProj
- KML
- KMZ
- point-in-polygon processing
- spatial joins
- FCC Broadband Fabric

## Web & Structured Content

- JSON-LD
- structured data
- dynamic metadata
- localized content architecture
- SEO
- AEO

---

# How I Build

I tend to start with the process rather than the technology.

I look for situations where:

- work is repetitive
- important information is disconnected
- reporting is difficult
- important decisions depend on manual analysis
- several systems need to communicate
- existing software does not match the real workflow
- a process works at small scale but becomes difficult to manage as it grows

My general approach is:

1. Map the workflow and decision points.
2. Identify the entities, state, and business rules.
3. Design the data model.
4. Separate source evidence from analytical and operational logic.
5. Choose the smallest architecture that can solve the problem reliably.
6. Build for retries, failures, changing data, and changing requirements.
7. Validate the system against the real workflow.
8. Turn the output into something useful for the person making the decision.

The technology is a means of solving the business problem rather than the starting point.

---

# Engineering Principles

## Model the process before the interface

The workflow, data relationships, state transitions, and business rules should be understood before the user interface begins dictating the architecture.

## Preserve clear sources of truth

When multiple screens or services depend on the same rule, shared domain logic and canonical data sources are preferable to duplicated implementations.

## Separate evidence from decisions

Raw evidence, analytical interpretation, and operational policy are different concerns.

Keeping them separate makes systems easier to understand, test, explain, and change.

## Treat missing data explicitly

Missing information should remain missing rather than silently becoming a healthy value, successful result, or false certainty.

## Design for failure and retries

Imports can repeat.

Workers fail.

Connections drop.

Users retry actions.

Systems should expect those conditions rather than assume perfect execution.

## Preserve history

Changing today's configuration should not silently rewrite what happened yesterday.

Historical decisions, measurements, prices, baselines, and outcomes should remain explainable.

## Build for the person making the decision

A technically correct system still fails if the person using it cannot understand the result or determine what to do next.

---

# Interactive Demonstrations

All interactive portfolio demonstrations are intentionally browser-based and synthetic.

They are designed to demonstrate the workflow and architecture of the underlying systems without requiring access to private production infrastructure.

The demos use combinations of:

- fictional markets
- fictional addresses
- synthetic metrics
- synthetic customer scenarios
- generalized rules
- reconstructed interfaces
- simulated state transitions
- representative workflows

They do not connect to production databases or internal company APIs.

---

# Run Locally

Clone the repository:

```bash
git clone https://github.com/kaseypelchy-ops/portfolio.git
```

Move into the project:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# Validation

Before deployment, run:

```bash
npm run lint
npm run build
```

Both commands should complete successfully.

---

# Deployment

The portfolio is designed for deployment through **Vercel** using the standard Next.js configuration.

Typical configuration:

```text
Framework Preset: Next.js
Root Directory: ./
Build Command: next build
Install Command: npm install
```

The public interactive demonstrations do not require production credentials or private environment variables.

---

# Repository Structure

```text
portfolio/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   │
│   ├── about/
│   ├── contact/
│   ├── experience/
│   │
│   └── projects/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── PerspectiveToggle.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectDemo.tsx
│   ├── SiteFooter.tsx
│   ├── SiteHeader.tsx
│   │
│   └── demos/
│       ├── AIQualityDemo.tsx
│       ├── FiberDemo.tsx
│       ├── FieldOSDemo.tsx
│       ├── MarketRecoveryDemo.tsx
│       └── SeoDemo.tsx
│
├── lib/
│   └── projects.ts
│
├── public/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── eslint.config.mjs
```

---

# Public Portfolio Boundary

This repository is intentionally designed as a **public reconstruction of engineering work rather than a mirror of production systems**.

The objective is to demonstrate:

- architecture
- workflow design
- engineering reasoning
- data modeling
- system behavior
- technical decisions
- implementation patterns
- user experience

without exposing confidential systems or information.

The repository may contain:

- synthetic data
- fictional entities
- generalized schema names
- generalized workflows
- reconstructed interfaces
- representative code
- architecture diagrams
- sanitized examples

The repository should never contain:

- production credentials
- API keys
- customer information
- employee information
- private infrastructure identifiers
- production database credentials
- raw operational exports
- confidential pricing
- proprietary production datasets
- internal customer identifiers
- private company metrics
- exact confidential scoring weights
- exact proprietary business thresholds
- production source code that should remain private

---

# Related Technical Showcases

These repositories contain deeper technical documentation and sanitized examples for the systems represented in the portfolio.

### Market Recovery Intelligence

https://github.com/kaseypelchy-ops/market-recovery-platform-showcase

### Field Sales Operations

https://github.com/kaseypelchy-ops/fieldos-project-showcase

### AI Call Quality & Coaching

https://github.com/kaseypelchy-ops/ai-call-quality-platform-showcase

### Fiber Service Area Mapping

https://github.com/kaseypelchy-ops/fiber-service-area-mapping-showcase

### SEO, AEO & Search Intelligence Platform

https://github.com/kaseypelchy-ops/seo-aeo-content-platform-showcase

---

# Connect

**LinkedIn**

https://www.linkedin.com/in/kaseypelchy19/

**GitHub**

https://github.com/kaseypelchy-ops
