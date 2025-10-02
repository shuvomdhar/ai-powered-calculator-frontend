# AI Calculator Frontend 🎨

A modern, responsive frontend for the AI-powered calculator that recognizes hand-drawn mathematical expressions and provides instant solutions.

## 🌟 Overview

This React-based frontend provides an intuitive canvas interface where users can draw mathematical expressions with their mouse or touch device. The application captures these drawings, sends them to the backend API for AI-powered recognition, and displays the calculated results in real-time.

## ✨ Key Features

- **Interactive Drawing Canvas**: Smooth, responsive canvas for drawing mathematical expressions
- **Multi-color Support**: Choose from a palette of colors to organize different parts of your calculations
- **Real-time Recognition**: Instant processing and display of results
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean interface built with TailwindCSS and Shadcn/ui components
- **Clear & Reset**: Easy controls to clear the canvas and start fresh

## 🛠️ Tech Stack

- **React 18** - Latest version for optimal performance
- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn/ui** - Accessible, customizable component library
- **HTML5 Canvas API** - For drawing functionality

## 📋 Prerequisites

- **Node.js** v16.0.0 or higher
- **npm** v7.0.0 or higher (or **yarn** v1.22.0+)

## 🚀 Getting Started

### Installation

1. **Clone the repository** (if not already done):
```bash
git clone https://github.com/shuvomdhar/ai-powered-calculator/frontend.git
```

2. **Install dependencies**:
```bash
npm install
```

3. **Configure API endpoint** (if needed):

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:8000
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Shadcn/ui components
│   │   └── Canvas.tsx  # Main canvas component
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # TailwindCSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🎨 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run type-check` | Check TypeScript types |

## 🎯 Usage Guide

1. **Start Drawing**: Click or touch the canvas and drag to draw your mathematical expression
2. **Change Colors**: Select different colors from the color palette to organize your work
3. **Submit**: Click the "Calculate" button or the designated submit control
4. **View Results**: The AI-recognized expression and calculated result will appear below the canvas
5. **Clear Canvas**: Use the reset button to clear the canvas and start over

## 🔌 API Integration

The frontend communicates with the backend API using the following endpoint:

```typescript
POST /calculate
Content-Type: application/json

{
  "image": "base64_encoded_image_data",
  "dict_of_vars": {}
}
```

Response:
```typescript
{
  "expr": "2 + 2",
  "result": "4",
  "assign": false
}
```

## 🎨 Customization

### Canvas Configuration

Modify canvas settings in `src/components/Canvas.tsx`:
- **Brush size**: Adjust line width
- **Canvas dimensions**: Change width and height
- **Drawing smoothness**: Configure line smoothing

### Color Palette

Update available colors in the color selector component:
```typescript
const colors = [
  '#FFFFFF', // White
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  // Add more colors
];
```

### Styling

TailwindCSS utilities can be customized in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Custom colors
      },
    },
  },
};
```

## 🔧 Troubleshooting

### Canvas not responding
- Check if the canvas element is properly mounted
- Verify mouse/touch event listeners are attached
- Ensure there are no CSS conflicts affecting pointer events

### API connection issues
- Verify the backend server is running
- Check the API URL in `.env` file
- Look for CORS errors in browser console
- Ensure the backend allows requests from your frontend origin

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Update dependencies: `npm update`

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `typescript`: ^5.0.0

### UI & Styling
- `tailwindcss`: ^3.3.0
- `@radix-ui/*`: Various Radix UI primitives
- `lucide-react`: Icon library

### Development Dependencies
- `vite`: ^4.4.0
- `@vitejs/plugin-react`: ^4.0.0
- `eslint`: ^8.45.0
- `typescript`: ^5.0.2

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Configure vite.config.ts with base URL
# Deploy dist/ folder to gh-pages branch
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add new feature'`
6. Push: `git push origin feature/new-feature`
7. Open a Pull Request

## 📄 License

This project is for educational purposes only.

## 💡 Tips for Developers

- Use React DevTools for debugging components
- Enable Vite's fast refresh for better development experience
- Follow React best practices and hooks guidelines
- Keep components small and focused
- Use TypeScript for type safety

## 📞 Support

For issues or questions:
- Check existing GitHub issues
- Open a new issue with detailed information
- Include browser console errors if applicable

---

**Built with ⚡ Vite and ⚛️ React**

*Part of the AI-Powered Calculator project by Shuvom Dhar*