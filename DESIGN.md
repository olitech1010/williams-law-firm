## Design System: The Williams Law Firm

### Pattern
- **Name:** Local Trust & Community Pillar
- **CTA Placement:** Prominent in Hero and Contact sections (Direct Call to Action)
- **Sections:** Hero > Trust Badges > Practice Areas (Grid) > Attorney Bio > Contact & Map

### Style
- **Name:** Warm Professionalism
- **Mode Support:** Light ✓ Full | Dark ✓ Supported
- **Keywords:** Trustworthy, community-focused, accessible, traditional, warm
- **Best For:** Solo practitioner law firms, local professional services
- **Performance:** ⚡ Excellent | **Accessibility:** ✓ WCAG AA

### Colors
| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary / Brand | `#1E3A8A` | `--color-blue-900` |
| Secondary / Accent | `#B45309` | `--color-amber-700` |
| Background | `#F8FAFC` | `--color-slate-50` |
| Surface (Cards) | `#FFFFFF` | `--color-white` |
| Text Foreground | `#0F172A` | `--color-slate-900` |
| Muted Text | `#64748B` | `--color-slate-500` |

*Notes: A classic navy blue for authority, combined with a warm amber/wood tone to signify approachability and tradition (like a classic timber desk).*

### Typography
- **Heading:** Merriweather (Serif, for authoritative headers)
- **Body & Interface:** Open Sans (Clean, highly readable sans-serif for content)
- **Google Fonts:** https://fonts.google.com/share?selection.family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900|Open+Sans:ital,wght@0,300..800;1,300..800
- **CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
```

### Key Effects
- Solid, grounded layouts.
- Clear card boundaries with subtle shadows for Practice Areas.

### Pre-Delivery Checklist
- [ ] Custom SVG/Image logo implemented.
- [ ] Direct call link `tel:803-637-4902` on CTAs.
- [ ] Map embed configured for 201 Buncombe St, Edgefield, SC.
- [ ] WCAG AA contrast compliance.
