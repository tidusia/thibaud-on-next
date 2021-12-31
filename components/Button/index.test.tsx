import React from "react";
import * as stories from "./index.stories";
import { axe } from "jest-axe";
import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

const { Default, Clicked } = composeStories(stories);

describe("Button", () => {
  describe("Default", () => {
    test("should be accessible", async () => {
      const { container } = render(<Default />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("Clicked", () => {
    test("should handle click", async () => {
      const onClick = jest.fn();
      const { container } = render(<Clicked onClick={onClick} />);
      await Clicked.play({ canvasElement: container });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
