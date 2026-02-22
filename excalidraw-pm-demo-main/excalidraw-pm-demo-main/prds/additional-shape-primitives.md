# PRD: Additional Shape Primitives

## Overview

**Author:** Claude (AI-generated)
**Date:** 2026-02-20

## Problem Statement

Excalidraw currently offers only three geometric shape primitives — rectangle, ellipse, and diamond — leaving users without access to common shapes they need for everyday diagramming. This forces users into time-consuming workarounds: drawing shapes freehand, hunting through community libraries, or abandoning Excalidraw for tools with broader shape support.

Users have been vocal about this gap. As one Scrum Master on a Team Plan put it: *"I want more primitive shapes beyond rectangle, ellipse, and diamond. A built-in triangle, hexagon, pentagon, star, and parallelogram would cover 90% of my diagramming needs without having to draw them freehand or hunt through libraries"* (FB-015). This sentiment is echoed across the user base — **"More shape primitives (triangle, hexagon, etc.)"** is the 3rd most-requested feature with **298 mentions in the last 30 days**, representing **11% of all feedback**.

The downstream impact is significant. "Shape & drawing tool requests" is the **#1 support ticket category** at **398 tickets (24% of all tickets)** in the last 30 days. Users who need shapes like triangles for warning icons, hexagons for architecture diagrams, or parallelograms for flowchart I/O blocks are either building them manually from lines (error-prone and time-consuming) or switching to other tools entirely. The Diamond tool — the only non-rectangular, non-elliptical shape — already sees **19% daily active usage (31,200 DAU)**, demonstrating clear demand for geometric variety beyond the basics.

With an overall NPS of +0 and 31% detractors, feature gaps like this contribute directly to user dissatisfaction and poor retention, particularly among Free Users (only 18% Day-30 retention vs. 62% for Team Plan users).

## Goals

1. **Add the most-requested shape primitives** — triangle, hexagon, pentagon, star, and parallelogram — as first-class tools, covering the shapes users explicitly asked for (FB-015)
2. **Maintain the Excalidraw hand-drawn aesthetic** — new shapes should render with the same roughness/sketchiness options (architect, artist, cartoonist) as existing shapes
3. **Support all existing shape properties** — fill styles (solid, hachure, cross-hatch, zigzag), stroke color, stroke width, opacity, and edge roundness should work on all new shapes
4. **Keep the toolbar uncluttered** — introduce the new shapes without overwhelming the existing toolbar by using a shape picker submenu or expandable section
5. **Enable use in flowcharts and diagrams** — new shapes should support text binding and arrow/connector attachment, making them useful for structured diagrams (not just decorative)

## Non-Goals

- **Custom/arbitrary polygon tool** — Users can draw custom shapes with the line tool; this PRD covers predefined primitives only
- **Per-corner radius control** — Independent corner radius is a separate, heavily-requested feature (820 mentions, FB-001/003/010/017) and will be addressed in its own PRD
- **Individual corner manipulation / shape morphing** — Dragging a rectangle corner into a trapezoid (FB-016) is a different interaction model and is out of scope
- **Custom pattern fills** — Dot patterns, diagonal stripes, and custom fills (FB-004) apply to all shapes and should be addressed separately
- **Auto-layout for connected elements** — Layout and arrangement improvements (FB-027, FB-029) are independent of shape availability
- **Shape libraries or stencil sets** — While libraries can contain custom shapes (FB-031), this PRD focuses on built-in primitives

## User Stories

- As a **Scrum Master** (Team Plan), I want built-in triangle, hexagon, pentagon, star, and parallelogram shapes so that I can diagram without drawing them freehand or searching through libraries. *(FB-015)*
- As a **Product Designer** (Free User), I want to use standard geometric shapes in my wireframes so that I can represent UI patterns (e.g., play buttons as triangles, badge icons as stars) without switching tools. *(FB-016, tangential)*
- As a **Product Manager** (Free User), I want parallelogram shapes for flowchart I/O blocks so that I can follow standard flowchart conventions without workarounds. *(FB-015)*
- As a **Engineering Manager** (Team Plan), I want hexagon shapes for architecture diagrams (e.g., microservice nodes) so that I can visually distinguish between component types. *(FB-015)*
- As a **Product Manager** (Team Plan), I want new shapes to support the same fill and styling options as rectangles so that I can maintain visual consistency across my diagrams. *(FB-004, tangential)*
- As a **Director of Product** (Team Plan), I want text labels to work inside new shapes so that I can use them as labeled nodes in flowcharts and architecture diagrams. *(FB-019, tangential)*

## Proposed Solution

### New Shapes

Add five new shape primitives to Excalidraw:

| Shape | Description | Primary Use Cases |
|-------|-------------|-------------------|
| **Triangle** | Equilateral triangle, resizable | Warning indicators, play buttons, hierarchy diagrams, directional indicators |
| **Hexagon** | Regular hexagon | Architecture diagrams, chemistry diagrams, honeycomb layouts, microservice nodes |
| **Pentagon** | Regular pentagon | Specialized diagrams, process flows, decision models |
| **Star** | 5-pointed star | Ratings, highlights, emphasis markers, favorite indicators |
| **Parallelogram** | Slanted rectangle (configurable skew) | Flowchart I/O blocks, data flow diagrams, process inputs/outputs |

### Toolbar Integration

Rather than adding 5 new top-level toolbar buttons (which would crowd the toolbar), introduce a **"More Shapes"** flyout:

- Add a single **"More Shapes"** button to the toolbar (or extend the existing shape area with a dropdown arrow)
- Clicking it reveals a panel with: Triangle, Hexagon, Pentagon, Star, Parallelogram
- Once a shape is selected, it becomes the active tool and can be placed via click-drag (same interaction as rectangle/ellipse/diamond)
- The last-used shape from the flyout is promoted to the toolbar for quick re-access (sticky selection)

### Shape Behavior

All new shapes should:
- **Resize proportionally** by default (hold Shift to allow free-form resize)
- **Support text binding** — double-click to add a centered text label inside the shape
- **Support arrow/connector attachment** — arrows can bind to shape edges with smart anchor points
- **Support all existing style properties**: fill color, fill style (solid, hachure, cross-hatch, zigzag), stroke color, stroke width, stroke style (solid, dashed, dotted), opacity, roughness (architect/artist/cartoonist)
- **Support edge roundness** — corners/vertices can be rounded using the existing roundness control
- **Support grouping, framing, and layering** — work with all existing organization features

### Shape-Specific Parameters

- **Star**: Configurable number of points (default: 5, range: 3–12) and inner radius ratio (how "pointy" the star is)
- **Parallelogram**: Configurable skew angle (default: ~15°, range: 5°–45°)
- **Triangle**: No additional parameters (equilateral by default, becomes isosceles/scalene when resized non-uniformly)

## Technical Approach

### Architecture Overview

Excalidraw's shape system is built around element types defined in the `@excalidraw/element` package. Each shape has:
1. A **type constant** in the element type system
2. A **creation function** for generating new elements
3. A **rendering path** that produces the SVG/canvas path via `roughjs`
4. **Bounds calculation** for selection, hit-testing, and connector attachment
5. **Toolbar registration** with icon and keyboard shortcut

### Implementation Strategy

The approach mirrors how the existing `diamond` shape is implemented — as a distinct element type with its own path generation, rendered through the same `roughjs` pipeline as all other shapes.

### Affected Areas

- **`packages/element/src/types.ts`** — Add new element type literals: `"triangle"`, `"hexagon"`, `"pentagon"`, `"star"`, `"parallelogram"`
- **`packages/element/src/shape.ts`** — Add path generation functions for each new shape (compute vertices from bounding box dimensions)
- **`packages/element/src/bounds.ts`** — Add bounds calculation for each shape (used for selection, hit-testing)
- **`packages/element/src/newElement.ts`** — Add factory functions for creating new elements of each type
- **`packages/element/src/typeChecks.ts`** — Add type guard functions (e.g., `isTriangleElement()`)
- **`packages/element/src/binding.ts`** — Register shapes as bindable elements for arrow/connector attachment
- **`packages/excalidraw/components/icons.tsx`** — Add toolbar icons for each shape
- **`packages/excalidraw/components/Toolbar.tsx`** (or equivalent) — Add "More Shapes" flyout with new shape tools
- **`packages/excalidraw/actions/`** — Register actions for each new shape tool
- **`packages/excalidraw/locales/en.json`** — Add labels for each shape name
- **`packages/excalidraw/scene/`** — Update element rendering and selection logic
- **`packages/common/src/constants.ts`** — Add any new constants (star point count defaults, parallelogram skew defaults)

### Dependencies

- **`roughjs`** — Already used for all shape rendering; supports arbitrary polygon paths, so no changes needed to the rendering library
- **No new external dependencies** — All shapes are defined as polygonal paths and rendered through the existing `roughjs` pipeline

### Path Generation Approach

Each shape's vertices are computed from the element's bounding box (`width` × `height`):

- **Triangle**: 3 vertices — top-center, bottom-left, bottom-right
- **Hexagon**: 6 vertices — evenly spaced around center, flat-top orientation
- **Pentagon**: 5 vertices — evenly spaced around center, point-up orientation
- **Star**: `n` outer + `n` inner vertices alternating (default n=5), inner radius configurable
- **Parallelogram**: 4 vertices — rectangle skewed by configurable angle

These vertex arrays are passed to `roughjs`'s `polygon()` method, which handles the hand-drawn aesthetic, fill styles, and roughness levels automatically.

## Success Metrics

| Metric | Current Baseline | Target | How Measured |
|--------|-----------------|--------|--------------|
| "More shape primitives" feature requests | 298 mentions/month (11% of feedback) | <50 mentions/month (<2%) | Feedback tracking |
| Shape & drawing tool support tickets | 398 tickets/month (24% of total) | <200 tickets/month (<12%) | Support ticket categorization |
| Diamond tool usage (proxy for non-rect shape demand) | 19% of users (31,200 DAU) | 30%+ of users use any new shape | Analytics: tool usage |
| New shape adoption (any of the 5 new shapes) | 0% (doesn't exist) | 15%+ of users within 30 days of launch | Analytics: tool usage |
| NPS among detractors citing shape limitations | Subset of 31% detractor pool | Reduce detractor % by 3-5 points | NPS survey correlation |
| Free user Day-30 retention | 18% | 20%+ (hypothesis: more shape tools = more reasons to return) | Cohort retention analysis |
| Avg. elements per canvas | 47.3 | Increase (more shapes = richer diagrams) | Session metrics |
| Library panel usage for shape workarounds | 11% of users | Decrease (users no longer need library shapes for basic primitives) | Analytics: library panel |

## Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Toolbar clutter — 5 new shapes overwhelm the UI | Medium | High | Use a "More Shapes" flyout/submenu rather than top-level buttons; sticky last-used selection reduces friction |
| Performance impact on large canvases with many complex shapes | Low | Medium | Shapes are simple polygons (3–12 vertices); roughjs already handles diamond efficiently; benchmark with P95 canvas sizes (312 elements) |
| Inconsistent hand-drawn aesthetic for new shapes | Medium | High | Use the same roughjs polygon rendering pipeline as diamond; QA across all three roughness levels (architect/artist/cartoonist) |
| Arrow binding edge cases with irregular shapes | Medium | Medium | Implement smart anchor point calculation per shape; leverage existing binding logic from diamond (also non-rectangular) |
| Parallelogram skew angle confuses users | Low | Low | Default to a sensible skew (~15°); show skew control only in properties panel, not in main toolbar |
| Star inner-radius ratio is hard to explain | Low | Low | Default to a standard 5-point star; expose inner radius as an advanced property with visual preview |
| Users expect shapes not in this set (e.g., trapezoid, cross, arrow-shape) | Medium | Low | Document the initial set clearly; the "More Shapes" flyout is extensible for future additions |
| Increased file size / serialization complexity | Low | Low | Each new shape adds only a type field and at most 1–2 extra properties (star points, parallelogram skew); negligible impact |

## Open Questions

- [ ] **Toolbar placement**: Should the "More Shapes" flyout replace the existing shape buttons or appear alongside them? Should rectangle/ellipse/diamond remain top-level?
- [ ] **Keyboard shortcuts**: What shortcuts should be assigned to new shapes? Current shortcuts (R=rectangle, O=ellipse, D=diamond) use single letters — are T (triangle), H (hexagon), P (pentagon) available and intuitive? Note: H is currently assigned to the Hand tool.
- [ ] **Star configurability**: Should star point count (3–12) and inner radius be exposed in the initial release, or should we ship a fixed 5-point star and add configurability later?
- [ ] **Parallelogram skew direction**: Should the default skew lean right (standard flowchart convention) or be configurable from the start?
- [ ] **Shape switching**: Should the existing "Switch shape type" tool (convertElementType) support converting between new shapes and existing ones (e.g., rectangle → hexagon)?
- [ ] **Text binding behavior**: For non-convex shapes (star), how should text be bounded — inscribed circle, bounding box, or shape-aware wrapping?
- [ ] **Community input**: Should this be proposed as an RFC to the open-source community before implementation, given that shape additions affect the element type system and file format?
