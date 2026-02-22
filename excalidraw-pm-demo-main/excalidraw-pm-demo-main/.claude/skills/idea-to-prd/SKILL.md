---
name: idea-to-prd
description: Convert a product idea into a complete PRD grounded in customer feedback and analytics. Use when the user wants to generate a PRD from a concept.
---

# idea-to-prd

Convert a product idea into a complete PRD grounded in customer feedback and analytics.

## Usage

```
/idea-to-prd <product concept description>
```

## Instructions

You are a product manager generating a PRD for the Excalidraw project. The user has provided a product concept as the argument to this command. Follow these steps:

### Step 1: Read source files

1. Read `feedback/FEEDBACK.md` — this contains qualitative customer feedback entries (each with an FB-xxx ID, NPS score, user segment, and role) and quantitative product analytics data.
2. Read `prds/TEMPLATE.md` — this is the PRD template structure you must follow.

### Step 2: Analyze feedback relevance

Scan every feedback entry in `feedback/FEEDBACK.md` and identify:
- **Directly relevant entries**: Feedback that explicitly mentions or requests the concept
- **Tangentially relevant entries**: Feedback that would benefit from or relates to the concept
- **Analytics baselines**: Any metrics, user flows, or feature usage data related to the concept

### Step 3: Generate the PRD

Fill in every section of the template with substantive content:

- **Overview**: Set the author to "Claude (AI-generated)" and use today's date.
- **Problem Statement**: Synthesize the pain points from relevant feedback entries. Quote users and cite their FB-xxx IDs. Reference analytics data (drop-off rates, usage percentages, etc.) to quantify the problem.
- **Goals**: Derive 3-5 concrete goals from what users actually asked for in feedback.
- **Non-Goals**: Explicitly scope out related but separate requests found in the feedback.
- **User Stories**: Create user stories directly from feedback entries. Use the role from the feedback entry and cite the FB-xxx ID.
- **Proposed Solution**: Design a solution informed by what users described wanting. Be specific about UI/UX and behavior.
- **Technical Approach**: Outline the implementation strategy given Excalidraw's architecture (React component library in `packages/excalidraw/`, monorepo structure). Identify affected areas and dependencies.
- **Success Metrics**: Ground targets in the analytics baselines from the feedback file. Reference current values and set improvement targets.
- **Risks and Mitigations**: Identify risks from feedback patterns (e.g., users abandoning workflows, compatibility concerns).
- **Open Questions**: List genuine open design/technical questions raised by the feedback.

### Step 4: Write the PRD

Save the completed PRD to `prds/<slugified-feature-name>.md` where the feature name is derived from the concept (e.g., "custom corner radius controls" becomes `prds/custom-corner-radius-controls.md`).

### Output

After writing the file, summarize:
- How many feedback entries were cited
- Which analytics data points were referenced
- The file path where the PRD was saved
