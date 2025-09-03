# Personal Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Vite. It's configured for deployment to GitHub Pages.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages. You can deploy it in two ways:

### Manual Deployment

To manually deploy the website to GitHub Pages:

1. Run the deployment script:
   ```bash
   npm run deploy
   ```

2. This will build the project and push it to the `gh-pages` branch of your repository.

### Automated Deployment

The project includes a GitHub Actions workflow that automatically deploys the website whenever changes are pushed to the main branch:

1. Push your changes to the main branch:
   ```bash
   git push origin main
   ```

2. GitHub Actions will automatically build and deploy your website to GitHub Pages.

### First-time Setup

1. Create a GitHub repository named `imlocle.github.io`
2. Push your code to the repository
3. In your repository settings, ensure GitHub Pages is configured to deploy from the `gh-pages` branch

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
