# Supreme Group Website

A modern, responsive website built with Next.js, React, and TailwindCSS, following pixel-perfect design implementation and best practices.

## 🚀 Project Setup

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:

git clone [repository-url]
cd supreme-group


2. create a project using npx command:

npx create-next-app@latest

3. install tailwind css

- npm install tailwindcss @tailwindcss/postcss postcss

- create postcss.config.mjs file and add this boiler plate code 

<!-- const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config -->

- add this to global.css file

<!-- @import "tailwindcss"; -->


4. Run the development server:

npm run dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## 🏗️ Component Architecture

The project follows a modular and reusable component architecture:

- `src/components/`: Reusable UI components
- `src/app/`: Layout components for different page structures


## 🎨 Design Implementation

The website has been implemented following the provided Figma design with meticulous attention to detail:

- Pixel-perfect implementation of layouts and components
- Precise typography using custom font configurations
- Exact color schemes and spacing as per design specifications
- Consistent visual hierarchy across all pages

## 📱 Responsive Design Strategy

The website is fully responsive across all device sizes:

- Mobile-first approach using TailwindCSS breakpoints
- Fluid typography and spacing
- Responsive images and media
- Optimized layouts for:
  - Mobile (320px - 767px)
  - Tablet (768px - 1023px)
  - Desktop (1024px and above)

## ⚡ Performance Optimization

Several performance optimizations have been implemented:

- Next.js built-in optimizations:
  - Automatic image optimization
  - Code splitting
  - Server-side rendering (SSR)
  - Static site generation (SSG) where applicable
- Lazy loading of components and images
- Optimized asset loading and caching
- Minified CSS and JavaScript
- Efficient bundle size management

## ♿ Accessibility

The website follows WCAG 2.1 guidelines and implements:

- Semantic HTML structure
- ARIA labels and roles where necessary
- Keyboard navigation support
- Proper heading hierarchy
- Alt text for images
- Sufficient color contrast
- Focus management
- Screen reader compatibility

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.3
- **UI Library**: React 19
- **Styling**: TailwindCSS 4.1.10
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Linting**: ESLint
- **Package Manager**: npm/yarn

## 🧪 Testing

The project includes:

- Unit tests for components
- Integration tests for key features
- End-to-end testing for critical user flows
- Accessibility testing using automated tools

## 🔄 Development Workflow

1. Create a new branch for features/fixes
2. Implement changes following the established patterns
3. Write/update tests as needed
4. Submit a pull request for review
5. Ensure all tests pass and code meets quality standards
6. Merge after approval

## 🚀 Future Improvements

Planned enhancements and features:

- Enhanced animations and transitions
- Additional language support
- Performance monitoring integration
- Enhanced SEO optimization
- Advanced analytics integration
- Progressive Web App (PWA) implementation

## 📝 Notes and Decisions

- Chose Next.js for its built-in optimizations and SEO capabilities
- Implemented TailwindCSS for rapid development and consistent styling
- Used TypeScript for better type safety and developer experience
- Selected Turbopack for faster development builds

