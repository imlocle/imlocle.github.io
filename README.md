# Personal Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Vite. It's configured for deployment to GitHub Pages.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages. You can deploy it in two ways:

### Manual Deployment

To manually deploy the website to GitHub Pages:

#### Option 1: Standard Deployment

1. Run the deployment script:
   ```bash
   npm run deploy
   ```

2. This will build the project and push it to the `gh-pages` branch of your repository.

#### Option 2: Deployment with Personal Access Token (More Reliable)

If you encounter permission issues with the standard deployment method:

1. Create a Personal Access Token (PAT) on GitHub:
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate a new token with `repo` scope
   - Copy the token

2. Set the token as an environment variable and deploy:
   ```bash
   GH_TOKEN=your_token_here npm run deploy:token
   ```

3. This method is more reliable for deployment as it uses explicit authentication.

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
4. For GitHub Actions deployment, make sure the workflow has proper permissions:
   - Go to your repository settings
   - Navigate to Actions > General
   - Under "Workflow permissions", select "Read and write permissions"
   - Save the changes

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
