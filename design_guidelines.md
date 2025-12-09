# Design Guidelines: Savant Kulkatni Social Media Marketing Agency

## Design Approach
**Glassmorphism-Enhanced Modern Agency**: Drawing inspiration from contemporary SaaS platforms (Linear, Vercel, Stripe) combined with signature frosted glass aesthetics. The glassmorphism effect creates depth and sophistication while maintaining professionalism.

## Core Visual Language

### Typography
- **Headlines**: Inter or Poppins, bold (700), large scales (text-4xl to text-6xl)
- **Subheadings**: Medium weight (500-600), text-2xl to text-3xl
- **Body**: Regular (400), text-base to text-lg for readability
- **Navigation**: Medium (500), text-sm uppercase tracking-wide

### Layout System
**Tailwind spacing primitives**: 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-6 to gap-8 for grids
- Container: max-w-7xl with px-6 gutters

### Glassmorphism Implementation
**Glass Cards/Panels**:
- Background: `bg-white/10` to `bg-white/20` with `backdrop-blur-lg`
- Border: `border border-white/20` or subtle gradient borders
- Shadow: Soft shadows `shadow-xl` with subtle glow effects
- Hover: Increase opacity to `bg-white/30` with smooth transitions

## Component Library

### Navigation Bar (per reference)
- Sticky top navigation with glassmorphism effect
- Logo left-aligned with Savant Kulkatni branding
- Horizontal menu items with Services dropdown
- Smooth hover animations with underline effects
- Mobile: Hamburger menu with slide-in panel

### Hero Section
- Full-width background with gradient overlay
- Large hero image showcasing digital marketing/team
- Centered headline + subheadline + dual CTA buttons
- Buttons with blurred backgrounds on image overlay
- Height: 85vh with content vertically centered

### Service Cards
- Glass cards in 2-3 column grid (responsive)
- Icon + emoji at top (📱, 🔍, etc.)
- Service title + brief description
- Hover: Lift effect with increased blur intensity
- Internal padding: p-8

### Pricing Tiers
- 3-column layout for plan comparison
- Glass cards with highlighted "Popular" tier
- Feature lists with checkmarks
- CTA buttons per tier
- Tier differentiation through border accents

### Portfolio Grid
- Masonry or uniform grid layout (2-3 columns)
- Project cards with image + overlay on hover
- Glass information panel revealing on hover
- Filter buttons using glass pill design
- Modal view for project details

### Blog Cards
- Featured post: Large horizontal card with glass overlay
- Grid of smaller cards (2-3 columns)
- Category tags as glass pills
- Read time + date metadata
- Image + title + excerpt structure

### Contact Form
- Two-column layout: Form (left) + Info panel (right)
- Glass form fields with subtle borders
- Input fields: `bg-white/5` with `backdrop-blur-sm`
- Embedded map with glass overlay showing address
- Success/error states with glass notification banners

### Footer
- Multi-column layout: Services, Company, Resources, Social
- Newsletter signup with glass input field
- Social media icons in glass containers
- Copyright + legal links
- Background: Deeper glass effect `bg-white/5`

## Page Structures

**Home**: Hero + Services overview (grid) + Stats section + Testimonials carousel + CTA section

**Service Pages**: Hero banner + Service breakdown (2-column alternating) + Process steps + Case study preview + CTA

**Portfolio**: Filter bar + Project grid + Load more functionality

**Pricing**: Comparison table + FAQ accordion + Trust badges

**Blog**: Featured post + Article grid + Pagination + Sidebar (categories/recent)

**Careers**: Open positions list (glass cards) + Company culture section + Application CTA

**Contact**: Split layout (form + map/info) + Office locations + Response time indicator

## Interactive Elements
- Smooth scroll navigation with offset for sticky header
- Fade-in animations on scroll (subtle, performance-conscious)
- Button hover: Increased blur + slight scale
- Card hover: Lift transform + glow effect
- Form validation: Real-time with glass error messages
- Loading states: Glass skeleton screens

## Images
- **Hero**: Professional team/office environment or abstract digital marketing visuals (1920x1080)
- **Service pages**: Relevant stock imagery for each service type
- **Portfolio**: Client project screenshots/mockups
- **About/Team**: Professional headshots with glass frame treatment
- **Blog**: Featured images for articles (16:9 ratio)

## Responsive Behavior
- Desktop (lg+): Multi-column layouts, full glass effects
- Tablet (md): 2-column grids, maintained glass styling
- Mobile: Single column stack, simplified glass effects for performance, hamburger navigation