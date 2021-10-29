import React from "react";
import { render, screen } from "@testing-library/react";
import FeaturedPosts from "./index";

describe("FeaturedPosts", () => {
  test("should render the title", () => {
    render(
      <FeaturedPosts
        title="Post title"
        posts={[
          {
            href: "/",
            picture: "",
            pictureAlt: "",
            publishDate: "",
            timeReading: "",
            excerpt: "",
            title: "WIP",
          },
        ]}
      />,
    );
    screen.getByText("Post title");
  });
});
