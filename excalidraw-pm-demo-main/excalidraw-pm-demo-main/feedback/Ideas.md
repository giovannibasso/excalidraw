# Feature Ideas — Ranked by Impact & Feasibility

> Synthesized from customer feedback (35 qualitative entries), feature request volumes, support tickets, and product analytics. See `FEEDBACK.md` for raw data.

---

## Ranking Criteria

- **Impact**: Feature request volume, NPS scores of affected users, analytics signals (abandonment rates, workflow friction), breadth of user segments affected, retention implications.
- **Feasibility**: Technical complexity relative to Excalidraw's current architecture, scope of code changes, availability of prior art or libraries, risk of regressions.

| Rank | Feature | Impact | Feasibility | Score |
|------|---------|--------|-------------|-------|
| 1 | Precision Corner Radius Controls | Very High | High | 🟢 Best |
| 2 | Canvas-Wide Find and Replace | High | High | 🟢 Best |
| 3 | Additional Shape Primitives | High | Medium | 🟡 Strong |
| 4 | Arrow & Connector Labels | Medium-High | Medium-High | 🟡 Strong |
| 5 | Saved Style Presets | Medium | High | 🟡 Strong |

---

## 1. Precision Corner Radius Controls

**Impact: Very High | Feasibility: High**

### Problem
The roundness slider is the #1 source of dissatisfaction across the entire product. **820 mentions (30% of all feedback)**, 11 out of 35 qualitative entries, and a **58% abandonment rate** on the corner radius workflow. Users average 2.3 re-adjustment attempts per interaction (24.2s total). Multiple detractors (NPS 3-5) cite this as the reason they leave for Figma.

### Proposed Solution
- Replace the vague roundness slider with a **numeric input field** displaying pixel values (e.g., `8px`).
- Add **per-corner radius controls** (top-left, top-right, bottom-right, bottom-left) with a toggle to link/unlink corners.
- Include **quick-select presets** for common values (4px, 8px, 12px, 16px, 24px).

### Why High Feasibility
The rendering engine already supports variable radius values internally — the slider maps to a numeric range. This is primarily a **UI/properties panel change**: add an input field, expose per-corner values, and wire them to the existing rendering path. Low regression risk since it extends (not replaces) existing behavior.

### Key Feedback
- FB-001 (NPS 6): "I want to set an exact corner radius in pixels — not drag a vague slider."
- FB-010 (NPS 4): "It's the #1 thing keeping me from using Excalidraw for UI wireframes."
- FB-017 (NPS 3): "Figma gives me independent control of each corner, numeric input, and smooth radius values."
- FB-025 (NPS 3): "For any precision work this is unusable."

---

## 2. Canvas-Wide Find and Replace

**Impact: High | Feasibility: High**

### Problem
No way to search or replace text across the canvas. **267 mentions (10% of feedback)**. Text editing is the 3rd-largest support ticket category at 245 tickets (15%). Power users with large diagrams (40+ elements) have zero workaround — they must double-click into every text element individually.

### Proposed Solution
- Add a **Ctrl+H / Cmd+H** find-and-replace dialog that searches all text elements on the canvas.
- Support **match case**, **whole word**, and **replace all** options.
- Highlight matching elements on the canvas and allow stepping through results one by one.

### Why High Feasibility
Text elements are already stored as structured objects with string content. The implementation is a UI dialog + iterate over `elements.filter(el => el.type === "text")` + string matching. No rendering engine changes needed. Well-understood pattern from every text editor.

### Key Feedback
- FB-006 (NPS 7): "I built a 40-element architecture diagram and then our team renamed a service. I had to double-click into every single text element."

---

## 3. Additional Shape Primitives

**Impact: High | Feasibility: Medium**

### Problem
Users are limited to rectangle, ellipse, and diamond. **298 mentions (11% of feedback)**, and shape & drawing tools is the **#1 support ticket category at 398 tickets (24%)**. Users resort to freehand drawing or hunting through community libraries for basic shapes.

### Proposed Solution
- Add **triangle, hexagon, pentagon, star, and parallelogram** as built-in shape tools.
- Implement as a shape picker dropdown or expandable toolbar section (not 6 new top-level tools).
- Each shape should support the same properties as existing shapes (fill, stroke, roundness, etc.).

### Why Medium Feasibility
Each new shape requires: a path-generation function, hit-testing/selection bounds, resize behavior, and property panel integration. The architecture supports this (shapes are rendered via path data), but each shape is incremental work. A polygon-based approach with configurable sides could reduce effort.

### Key Feedback
- FB-015 (NPS 6): "A built-in triangle, hexagon, pentagon, star, and parallelogram would cover 90% of my diagramming needs."

---

## 4. Arrow & Connector Labels

**Impact: Medium-High | Feasibility: Medium-High**

### Problem
Arrows between shapes cannot carry text labels. **154 mentions (6% of feedback)**. Users manually create separate text elements and position them near arrows, but labels don't move with the connector when shapes are rearranged. This breaks the core use case of architecture and sequence diagrams.

### Proposed Solution
- Allow **attaching a text label to an arrow's midpoint** (or configurable position: start, middle, end).
- The label should **move and rotate with the arrow** when connected shapes are repositioned.
- Double-clicking an arrow should create/edit its label inline.

### Why Medium-High Feasibility
Arrows already have a binding system for connecting to shapes. Adding a text binding at a parametric position along the arrow path extends this system. The main complexity is computing label position on curved/elbow arrows and handling re-rendering on arrow path changes.

### Key Feedback
- FB-019 (NPS 8): "I want to attach a text label to the midpoint of the arrow — like 'sends request' or 'returns data.' Right now I create a separate text element and try to position it manually."

---

## 5. Saved Style Presets

**Impact: Medium | Feasibility: High**

### Problem
Teams repeatedly re-create the same styles (colors, stroke width, radius, font) across diagrams. **143 mentions (5% of feedback)**. Team Plan users share screenshots of "use these settings" because there's no way to save and reuse named styles. This hurts brand consistency and wastes time.

### Proposed Solution
- Allow users to **save the current element's style as a named preset** (e.g., "Primary Card", "Secondary Label").
- Provide a **preset picker** in the properties panel to apply a saved style with one click.
- For Team Plan users, support **shared team presets** that sync across collaborators.

### Why High Feasibility
A style preset is a serializable JSON object of existing element properties (fill, stroke, strokeWidth, roundness, fontFamily, fontSize, etc.). Storage can use localStorage for free users and the existing sync infrastructure for team users. The UI is a dropdown + save button in the properties panel.

### Key Feedback
- FB-026 (NPS 9): "I want to define a 'primary box' style and a 'secondary box' style, then apply them with one click."
- FB-002 (NPS 7): "I use the same 5 brand colors across every diagram, but I have to re-enter the hex codes every time."

---

## Honorable Mentions (Not in Top 5)

| Feature | Mentions | Why Not Top 5 |
|---------|----------|---------------|
| Minimap / bird's-eye navigation | 221 (8%) | Medium feasibility — requires canvas thumbnail rendering; impacts power users (4.2% with 200+ elements) but smaller audience |
| Auto-layout for connected elements | 245 (9%) | Low feasibility — requires integrating graph layout algorithms (dagre/ELK); high engineering cost relative to other options |
| Gradient fills | 312 (11%) | High volume but lower NPS impact; cosmetic enhancement vs. workflow blocker |
| Presentation mode (frames as slides) | 176 (6%) | Medium feasibility; frames infrastructure exists but full-screen stepping is new UX territory |
| Per-frame export | 112 (4%) | High feasibility but lower mention volume; good quick win for a future iteration |
