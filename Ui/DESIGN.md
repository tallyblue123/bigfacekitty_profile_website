# Design System Strategy: The Infinite Curator

## 1. Overview & Creative North Star

### Creative North Star: "The Digital Curator"
This design system moves away from the rigid, boxed-in constraints of traditional SaaS dashboards. It adopts the persona of a **Digital Curator**—an environment that feels like a high-end physical workspace where thoughts are pinned, connected, and allowed to breathe. 

Instead of forced linear layouts, we embrace **intentional modularity**. The experience is designed to feel like a "second brain," where the "whiteboard" is not just a background, but a functional infinite canvas. We reject the "standard" web look by using asymmetric card placement, node-based connections, and a hierarchy driven by tonal depth rather than structural lines. The result is a premium, editorial experience that feels both creatively free and intellectually organized.

---

## 2. Colors & Surface Philosophy

The palette is rooted in soft, warm neutrals to reduce cognitive load, punctuated by high-energy accents that guide the eye to interactive nodes.

### The "No-Line" Rule
To achieve a high-end editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts or subtle tonal transitions. Use `surface-container-low` for large content areas sitting on the `surface` background.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of fine paper or frosted glass.
- **Canvas (The Base):** `background` (#f9f9f7) with a subtle dot grid (using `outline-variant` at 15% opacity).
- **Secondary Containers:** `surface-container-low` (#f3f4f2) for docked sidebars or bottom toolbars.
- **Floating Cards:** `surface-container-lowest` (#ffffff) to create maximum pop and clarity against the off-white background.

### The "Glass & Gradient" Rule
For floating action menus or tooltips, use **Glassmorphism**. Apply a semi-transparent `surface` color with a 12px-20px `backdrop-blur`. 
- **Signature Textures:** For primary CTAs or brand moments, use a subtle linear gradient from `primary` (#7f5700) to `primary-container` (#feb300) at a 135-degree angle. This adds a "soul" to the UI that flat colors lack.

---

## 3. Typography

The system utilizes a dual-font approach to balance approachable warmth with functional precision.

*   **Manrope (The Intellectual):** Used for all Display, Headline, Title, and Body styles. Its geometric yet soft curves feel modern and editorial.
*   **Inter (The Tool):** Reserved for Labels and small UI metadata. Its high x-height ensures legibility in dense, node-based "map" views.

**Hierarchy as Brand Identity:**
- **Display-LG/MD:** Use for overarching canvas titles. These should feel like a magazine header—large, confident, and with generous letter spacing.
- **Body-LG:** Our default "thought" size. It prioritizes readability for long-form notes within cards.
- **Title-SM:** Used for card headers. Bold and authoritative to anchor the card's content.

---

## 4. Elevation & Depth

In this design system, "depth" is a functional tool used to communicate the "Z-index" of ideas.

### The Layering Principle
Depth is achieved by stacking `surface-container` tiers. 
*   **Example:** Place a `surface-container-lowest` card inside a `surface-container-low` sidebar. The "lift" is perceived through the shift in lightness, creating a soft, natural hierarchy without artificial shadows.

### Ambient Shadows
When a card must "float" above the canvas (indicating it is draggable or active):
- **Shadow Specs:** Blur: 32px, Y-Offset: 8px.
- **Shadow Color:** Use `on-surface` (#2f3332) at an extremely low opacity (4%–6%). This mimics natural ambient light rather than a digital "drop shadow."

### The "Ghost Border" Fallback
If a container requires a border for accessibility (e.g., an input field), use a **Ghost Border**. Apply the `outline-variant` token at 20% opacity. **100% opaque borders are forbidden.**

---

## 5. Components

### Cards (The Primary Unit)
*   **Styling:** Background `surface-container-lowest`, Corner Radius `md` (0.75rem). 
*   **Constraint:** No dividers. Use 24px of vertical whitespace to separate header from content.
*   **Interaction:** On hover, shift from `surface-container-lowest` to `surface-bright`.

### Buttons
*   **Primary:** Gradient of `primary` to `primary-container`. Full rounded (`full`).
*   **Secondary:** `surface-container-high` background with `on-surface` text. No border.
*   **Tertiary:** Transparent background. On hover, apply a `primary-fixed-dim` tint at 10% opacity.

### Navigation Sidebar
*   **Styling:** `surface-container-low` background. 
*   **Active State:** Instead of a highlight box, use a vertical pill of `primary-fixed` (#feb300) 4px wide on the left edge of the active item, with the text switching to `on-primary-fixed`.

### Connection Lines (Nodes)
*   **Styling:** Use `outline-variant` (#afb3b0) at 40% opacity. 
*   **Weight:** 1.5px stroke. 
*   **Behavior:** Lines should be organic (slight curves/Bezier) rather than harsh right angles to maintain the "whiteboard" feel.

### Input Fields
*   **Styling:** `surface-container-lowest` with a 1px Ghost Border.
*   **Focus State:** The border transitions to `primary` (#7f5700) at 100% opacity with a subtle glow (4px spread of `primary` at 10%).

---

## 6. Do's and Don'ts

### Do
*   **DO** embrace white space. If you think there is enough room between cards, add 16px more.
*   **DO** use the dot grid as a layout guide, but feel free to break the alignment slightly for "organic" elements like hand-drawn annotations or stickers.
*   **DO** use `tertiary` (#466370) for secondary metadata to create a sophisticated, cool-toned contrast against the warm primary yellows.

### Don't
*   **DON'T** use black (#000000) for text. Use `on-surface` (#2f3332) to keep the "ink on paper" softness.
*   **DON'T** use sharp corners. Use the `md` (0.75rem) or `lg` (1rem) tokens to maintain the approachable, playful aesthetic.
*   **DON'T** use horizontal dividers. To separate list items, use a background color toggle (e.g., alternating `surface` and `surface-container-low`).
*   **DON'T** overcrowd the sidebar. It is a "Layer" controller, not a dumping ground for every feature. Keep it minimal and functional.