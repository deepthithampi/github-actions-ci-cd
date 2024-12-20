import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 3000,
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },
//as we dont need to run e2e tests
//comment for triggering the component tests
  // e2e: {
  //   baseUrl: 'http://localhost:3001',
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },
});
