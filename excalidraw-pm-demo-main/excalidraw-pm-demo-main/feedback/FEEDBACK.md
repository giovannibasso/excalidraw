# Excalidraw Product Feedback Dataset

> **Workshop Material** — This document contains synthesized customer feedback and product analytics for Excalidraw, an open-source virtual whiteboard. Use this data to practice PM workflows.

---

## Customer Feedback (Qualitative)

### Color & Styling Improvements

**FB-001** | NPS: 6 | Segment: Free User | Role: Product Designer
"The roundness slider is way too limited. I want to set an exact corner radius in pixels — like 8px or 16px — not drag a vague slider between 'sharp' and 'round.' Every other design tool lets me type a precise radius value, and Excalidraw should too."

**FB-002** | NPS: 7 | Segment: Team Plan | Role: Engineering Manager
"The color picker needs a 'recently used colors' section. I use the same 5 brand colors across every diagram, but I have to re-enter the hex codes every time. A row of recent or saved colors at the top of the picker would save me so much time."

**FB-003** | NPS: 5 | Segment: Free User | Role: UX Researcher
"I need per-corner radius control on rectangles. When I'm mocking up UI cards, I want the top two corners rounded and the bottom two sharp — like a card header. The current 'roundness' property applies uniformly and there's no way to do this without faking it."

**FB-004** | NPS: 8 | Segment: Team Plan | Role: Product Manager
"The fill styles should have more variety. Hachure, cross-hatch, solid, and zigzag cover the basics but I want dot patterns, diagonal stripes at different angles, or custom pattern fills. When I'm building a legend-heavy diagram, four fill styles aren't enough to distinguish categories."

**FB-005** | NPS: 4 | Segment: Free User | Role: Software Engineer
"I want per-side border colors on rectangles. When I'm mocking up UI wireframes, I need shapes where the top border is one color and the sides are another — like a tab or card component. Right now strokeColor applies uniformly to the whole shape."

### Text Editing

**FB-006** | NPS: 7 | Segment: Team Plan | Role: Design Lead
"There's no find-and-replace for text. I built a 40-element architecture diagram and then our team renamed a service. I had to double-click into every single text element and manually update the name. A canvas-wide find-and-replace would have taken 5 seconds."

**FB-007** | NPS: 3 | Segment: Free User | Role: Student
"I want more font options. The current set — Excalifont, Nunito, Lilita One, and Comic Shanns — is very limited. I'd love to be able to load custom fonts or at least have a broader selection. For academic diagrams, a proper serif font would be really useful."

**FB-008** | NPS: 6 | Segment: Team Plan | Role: Technical Writer
"Text auto-resize behavior is confusing. When autoResize is on, the text box grows horizontally forever. When it's off, text wraps but I have to manually size the box first. I want a mode where the box has a fixed width but auto-grows vertically — like every other text editor."

**FB-009** | NPS: 5 | Segment: Free User | Role: Engineering Manager
"Rich text formatting within a single text element would be amazing — bold a keyword, italicize a note, maybe even inline code formatting. Right now every character in a text element shares the same style, so I end up creating multiple overlapping text boxes."

**FB-010** | NPS: 4 | Segment: Team Plan | Role: Frontend Developer
"The corner radius situation is painful. In Figma I can set each corner independently — like 12px top-left and top-right, 0px bottom corners — to make a tab shape. In Excalidraw I get a single 'roundness' slider that goes from sharp to round with no numeric precision. It's the #1 thing keeping me from using Excalidraw for UI wireframes."

### Canvas Navigation & Organization

**FB-011** | NPS: 5 | Segment: Free User | Role: Product Manager
"I desperately need a minimap. On large canvases with hundreds of elements, I lose my orientation constantly. I spend more time zooming out to find where I am than actually editing. A small bird's-eye overview in the corner — like VS Code's minimap — would be a game-changer."

**FB-012** | NPS: 4 | Segment: Team Plan | Role: VP of Engineering
"Frames are a good start, but I want multi-page support. In Figma I can have separate pages in one file — 'Architecture,' 'Sequence Diagrams,' 'Wireframes.' In Excalidraw I have to put everything on one infinite canvas or use separate files. Tabbed pages would be a huge organizational win."

**FB-013** | NPS: 6 | Segment: Free User | Role: Freelance Designer
"Corner radius presets would save me so much time. I use 4px, 8px, 12px, and 16px constantly in my wireframes. Instead of fiddling with the roundness slider every time, give me quick-select buttons for common radius values, or at least let me type the exact number."

**FB-014** | NPS: 6 | Segment: Team Plan | Role: Product Lead
"Presentation mode using frames as slides would be incredible. I already organize my diagrams into frames — if I could step through them full-screen like a slideshow, I'd never need to screenshot into PowerPoint again. Frames are almost slides already, they just need a present button."

### Shape & Drawing Tools

**FB-015** | NPS: 6 | Segment: Team Plan | Role: Scrum Master
"I want more primitive shapes beyond rectangle, ellipse, and diamond. A built-in triangle, hexagon, pentagon, star, and parallelogram would cover 90% of my diagramming needs without having to draw them freehand or hunt through libraries."

**FB-016** | NPS: 4 | Segment: Free User | Role: Product Designer
"Individual corner manipulation on shapes would be powerful. I want to pull one corner of a rectangle to make a trapezoid, or round only two corners to make a tab shape. Right now the roundness slider (which goes from 4 to 128) applies uniformly to all corners."

**FB-017** | NPS: 3 | Segment: Team Plan | Role: UI Designer
"Coming from Figma, the corner radius in Excalidraw feels prehistoric. Figma gives me independent control of each corner, numeric input, and smooth radius values. Excalidraw has a binary sharp/round toggle with a vague slider. I need real corner radius control — numeric input per corner at minimum."

**FB-018** | NPS: 5 | Segment: Free User | Role: Student
"I wish I could edit individual points on a line or arrow after drawing it. When I draw a multi-point line and one point is slightly off, my only option is to redo the whole thing. Let me grab and drag individual vertices to adjust the path."

**FB-019** | NPS: 8 | Segment: Team Plan | Role: Director of Product
"Connectors should have labels. When I draw an arrow between two shapes, I want to attach a text label to the midpoint of the arrow — like 'sends request' or 'returns data.' Right now I create a separate text element and try to position it manually near the arrow, and it doesn't move with it."

### Arrow & Connector Improvements

**FB-020** | NPS: 7 | Segment: Free User | Role: Solutions Architect
"The elbow arrow routing needs manual override. The automatic routing is usually fine, but sometimes it takes a bizarre path around shapes. I want to be able to grab a segment of an elbow arrow and drag it to force a specific route, like you can in draw.io."

**FB-021** | NPS: 5 | Segment: Team Plan | Role: Software Engineer
"Can we please get a proper corner radius input field? I'm diagramming database schemas and I want my entity boxes to have exactly 6px rounded corners to match our app's design system. The current roundness slider is imprecise and I can never hit the exact value I need."

**FB-022** | NPS: 5 | Segment: Free User | Role: Data Engineer
"When I bind an arrow to a shape and then move the shape, the arrow anchor point sometimes jumps to a weird position on the shape boundary. I'd like to pin the anchor to a specific point — like 'always connect to the right edge, 25% from the top' — and have it stay fixed."

### Properties & Controls

**FB-023** | NPS: 8 | Segment: Team Plan | Role: Product Manager
"I want to type exact numeric values for corner radius. The roundness slider is the worst offender — I need 8px radius for card components and 24px for hero sections, but the slider gives me no feedback on what pixel value I'm actually setting. A numeric input field for corner radius is long overdue."

**FB-024** | NPS: 7 | Segment: Free User | Role: UX Designer
"The roughness setting (architect/artist/cartoonist) should have more granularity. 'Architect' is too clean and 'artist' is too sketchy for my taste — I want something in between. A continuous slider from 0 to 2 instead of three discrete options would be perfect."

**FB-025** | NPS: 3 | Segment: Free User | Role: Technical PM
"The whole roundness property needs to be rethought. It maps to some internal value between 'sharp' and 'round' but there's no way to know what actual pixel radius you're getting. Other tools show 'corner radius: 12px' — Excalidraw shows a slider. For any precision work this is unusable."

**FB-026** | NPS: 9 | Segment: Team Plan | Role: CTO
"Saved style presets would be huge for our team. I want to define a 'primary box' style (blue fill, 2px stroke, 32px radius, Nunito font) and a 'secondary box' style, then apply them with one click. Right now we share a screenshot of 'use these settings' and everyone eyeballs it."

### Layout & Alignment

**FB-027** | NPS: 5 | Segment: Free User | Role: Product Manager
"Auto-layout for connected elements would save me hours. When I build a flowchart with 20+ connected shapes, arranging them neatly by hand is the most tedious part. An auto-arrange button that lays out connected elements as a tree or directed graph would be transformative."

**FB-028** | NPS: 6 | Segment: Team Plan | Role: Design Systems Lead
"I use Excalidraw for design system documentation and the lack of precise corner radius control is a dealbreaker. Our design system specifies exact radius values — 4px for small components, 8px for cards, 16px for modals. I can't reproduce these in Excalidraw because the roundness slider has no numeric readout."

**FB-029** | NPS: 4 | Segment: Free User | Role: Data Scientist
"A 'tidy up' or 'arrange in grid' command for selected elements would be great. I often have a scattered set of shapes that I want to arrange into a neat grid — equal spacing, aligned rows and columns. Doing it manually takes forever and the result is never perfect."

**FB-030** | NPS: 5 | Segment: Team Plan | Role: Field Engineer
"Constraints or responsive layout rules would be powerful. I want to say 'this text element is always centered inside this rectangle' or 'these three shapes are always equally spaced horizontally' — and have those rules persist when I resize or move things."

### Library & Reusability

**FB-031** | NPS: 5 | Segment: Free User | Role: Project Manager
"The library panel needs better organization. Right now all my library items are in a flat list. I want folders or categories — 'AWS icons,' 'Flowchart shapes,' 'UI components' — so I can find things quickly when my library grows beyond 20-30 items."

**FB-032** | NPS: 4 | Segment: Team Plan | Role: Mobile Developer
"I tried building a UI mockup and needed rounded rectangles with different corner radii — 4px for inputs, 8px for cards, 24px for buttons. The roundness slider is hopeless for this. I ended up going to Figma. Excalidraw needs a numeric corner radius input at minimum."

**FB-033** | NPS: 8 | Segment: Team Plan | Role: VP of Product
"Team-shared libraries with version control would make Excalidraw viable for our design system documentation. Right now each person maintains their own library file. There's no way to share a canonical library across the team and keep it in sync."

### Export & Sharing

**FB-034** | NPS: 6 | Segment: Free User | Role: Data Scientist
"Export should support PDF. I need to include diagrams in formal documents and reports. PNG and SVG work for web, but for print and email I need proper PDF output with vector graphics preserved. Right now I export SVG and convert externally."

**FB-035** | NPS: 3 | Segment: Free User | Role: Project Manager
"I want to export individual frames as separate images. When I have a canvas with 5 frames, each containing a different diagram, I want to batch-export each frame as its own PNG instead of exporting the entire canvas and cropping manually."

---

## Product Analytics Data

### Feature Usage (Last 30 Days)

| Feature | Daily Active Users | Avg. Session Uses | % of Total Users |
|---------|-------------------|-------------------|-----------------|
| Rectangle Tool | 145,200 | 8.3 | 89% |
| Arrow Tool | 138,400 | 6.7 | 85% |
| Text Tool | 132,100 | 5.2 | 81% |
| Edge Roundness Toggle | 118,600 | 4.8 | 73% |
| Color Picker | 98,700 | 4.6 | 61% |
| Freehand Draw | 67,800 | 3.1 | 42% |
| Ellipse Tool | 54,300 | 2.4 | 33% |
| Export (PNG) | 43,200 | 1.2 | 27% |
| Elbow Arrows | 41,200 | 3.2 | 25% |
| Collaboration (Live) | 34,800 | 1.0 | 21% |
| Diamond Tool | 31,200 | 1.8 | 19% |
| Line Tool | 28,900 | 2.1 | 18% |
| Image Insert | 24,600 | 1.4 | 15% |
| Frames | 22,400 | 1.6 | 14% |
| Library Panel | 18,200 | 2.3 | 11% |
| Undo (Ctrl+Z) | 156,300 | 14.2 | 96% |
| Copy/Paste | 112,500 | 7.8 | 69% |
| Export (SVG) | 12,400 | 1.1 | 8% |

### User Flow: Corner Radius Workflow

| Step | Action | Avg. Time | Drop-off Rate |
|------|--------|-----------|---------------|
| 1 | Select rectangle element | 1.1s | 0% |
| 2 | Open properties panel | 2.6s | 10% |
| 3 | Locate roundness slider | 3.2s | 18% |
| 4 | Drag slider to desired roundness | 6.4s | 22% |
| 5 | Visually inspect result | 2.1s | 5% |
| 6 | Re-adjust slider (avg. 2.3 attempts) | 8.8s | 31% |
| **Total** | | **24.2s** | **58% abandon** |

> **Note:** 58% of users who attempt to adjust corner roundness abandon the flow before achieving their desired result. Post-session surveys cite "no numeric input" and "can't control individual corners" as top frustrations.

### User Flow: Color Change Workflow

| Step | Action | Avg. Time | Drop-off Rate |
|------|--------|-----------|---------------|
| 1 | Select element | 1.2s | 0% |
| 2 | Open properties panel | 2.8s | 12% |
| 3 | Click color swatch | 1.4s | 8% |
| 4 | Browse/select color | 4.1s | 15% |
| 5 | Confirm and close | 0.8s | 3% |
| **Total** | | **10.3s** | **38% abandon** |

### Session Metrics

| Metric | Value |
|--------|-------|
| Avg. session duration | 18.4 min |
| Median session duration | 11.2 min |
| Avg. elements per canvas | 47.3 |
| Median elements per canvas | 28 |
| P95 elements per canvas | 312 |
| Sessions with >200 elements | 4.2% |
| Avg. undo actions per session | 14.2 |
| Avg. roundness adjustments per session | 6.1 |
| % sessions with roundness slider interaction | 73% |
| Avg. frames per canvas | 1.4 |
| % canvases using frames | 18% |
| Canvas load time (P50) | 1.8s |
| Canvas load time (P95) | 8.4s |
| Canvas load time (P99) | 14.2s |

### Collaboration Metrics

| Metric | Value |
|--------|-------|
| % sessions that are collaborative | 21% |
| Avg. participants per collab session | 3.2 |
| Median participants per collab session | 2 |
| Sessions with 5+ participants | 6.8% |
| Avg. edit conflicts per collab session | 2.4 |
| Conflict resolution success rate | 78% |
| Avg. latency (2 participants) | 120ms |
| Avg. latency (5+ participants) | 890ms |
| Collab sessions with reported lag | 34% |

### Retention & Satisfaction

| Cohort | Day 1 | Day 7 | Day 30 | Day 90 |
|--------|-------|-------|--------|--------|
| Free Users | 100% | 42% | 18% | 8% |
| Team Plan | 100% | 78% | 62% | 51% |

| NPS Segment | Score | % of Responses |
|-------------|-------|---------------|
| Promoters (9-10) | — | 31% |
| Passives (7-8) | — | 38% |
| Detractors (0-6) | — | 31% |
| **Overall NPS** | **+0** | — |

### Feature Request Frequency (Last 30 Days)

| Requested Feature | Mentions | % of Feedback |
|-------------------|----------|---------------|
| Custom corner radius / per-corner rounding | 820 | 30% |
| Gradient fills | 312 | 11% |
| More shape primitives (triangle, hexagon, etc.) | 298 | 11% |
| Find-and-replace text across canvas | 267 | 10% |
| Auto-layout for connected elements | 245 | 9% |
| Minimap / bird's-eye navigation | 221 | 8% |
| Custom/additional fonts | 187 | 7% |
| Presentation mode using frames | 176 | 6% |
| Arrow/connector labels | 154 | 6% |
| Saved style presets | 143 | 5% |
| Per-frame export | 112 | 4% |

### Support Tickets by Category (Last 30 Days)

| Category | Tickets | % of Total | Avg. Resolution Time |
|----------|---------|-----------|---------------------|
| Shape & drawing tool requests | 398 | 24% | N/A |
| Styling & color feature requests | 312 | 19% | N/A |
| Text editing improvements | 245 | 15% | N/A |
| Navigation & canvas organization | 198 | 12% | N/A |
| Arrow & connector enhancements | 156 | 10% | N/A |
| Layout & alignment tools | 143 | 9% | N/A |
| Library & reusability | 112 | 7% | N/A |
| Export & sharing | 87 | 5% | N/A |

---

*This dataset is synthetic and created for workshop purposes. All names, companies, and metrics are fictional.*
