import "../styles/index.css";
import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story: any) => (
    // Put here future global decorators for stories and tests relying on those stories
    <>
      <Story />
    </>
  ),
];
