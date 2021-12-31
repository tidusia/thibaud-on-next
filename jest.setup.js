import "@testing-library/jest-dom";
import "jest-axe/extend-expect";
import { format } from "util";

// Mark all console.errors as failing tests
const error = global.console.error;
global.console.error = function (...args) {
  error(...args);
  throw new Error(format(...args));
};
