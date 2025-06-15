# 🚀 Custom Web Application

> A modern, responsive web application built with Next.js, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 🌟 Overview

A modern, full-stack web application showcasing best practices in React development. Built with cutting-edge technologies to deliver exceptional performance and user experience.

### ✨ Key Features

- 🎨 **Modern Design** - Clean, professional interface with responsive design
- 📱 **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- ⚡ **Fast Performance** - Optimized for speed and SEO
- � **TypeScript** - Full type safety throughout the application
- � **Component-Based** - Reusable and maintainable component architecture
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- � **SEO Optimized** - Built-in SEO features with Next.js

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd custom-web-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) - React framework with SSR/SSG
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: Custom SVG icons optimized for performance

### Development Tools

- **Linting**: ESLint with TypeScript rules
- **Code Formatting**: Prettier (configured)
- **Build System**: Next.js built-in build system
- **Development**: Hot reloading and fast refresh

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── contact/           # Contact page
│   └── menu/              # Menu page with layout
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header with mobile menu
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section component
│   ├── MenuCard.tsx       # Card component
│   ├── ImageSlider.tsx    # Image carousel component
│   └── StatCounter.tsx    # Animated counter component
├── constants/             # Application constants
│   └── index.ts          # App configuration and data
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── types/                 # TypeScript type definitions
└── utils/                 # Helper functions
    └── cn.ts             # Tailwind CSS class name utility
```

## 🎨 Design System

### Styling Approach

- **Utility-First**: Tailwind CSS for rapid development
- **Component-Based**: Reusable styled components
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean and professional interface

### Responsive Breakpoints

- **Mobile First**: Designed primarily for mobile users
- **Breakpoints**:
  - `sm`: 640px+ (Small tablets)
  - `md`: 768px+ (Tablets)
  - `lg`: 1024px+ (Laptops)
  - `xl`: 1280px+ (Desktops)

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type Checking
npx tsc --noEmit     # TypeScript type checking
```

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Configure build settings (auto-detected for Next.js)
3. Deploy with automatic CI/CD

### Other Platforms

- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **DigitalOcean**: VPS deployment
- **Traditional Hosting**: Build static files with `npm run build`

## 🚀 Performance Features

- **Server-Side Rendering (SSR)**: Fast initial page loads
- **Static Site Generation (SSG)**: Pre-built pages for better performance
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Built-in Next.js image optimization
- **Font Optimization**: Automatic font loading optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## � Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow ESLint and Prettier configurations
- Use meaningful component and variable names
- Write clean, self-documenting code

### Component Structure

- Keep components small and focused
- Use proper TypeScript interfaces
- Implement proper error handling
- Follow React best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/dyakupoglu/custom-web-app-v1/blob/main/LICENSE) file for details.

**MIT License**  
Copyright (c) 2025 Doğukan Bekir Yakupoğlu

---

<div align="center">
  <p><strong>Custom Web Application</strong> - Built with Modern Technologies</p>
  <p>Made with ❤️ using Next.js, TypeScript & Tailwind CSS</p>
</div>
