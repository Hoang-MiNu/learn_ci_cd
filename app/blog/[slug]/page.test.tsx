import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Slug: Test" }),
  ).toBeDefined();
});

test("Hoàng MiNu should be in page", () => {
  render(<Page params={{ slug: "Hoàng MiNu" }} />);
  expect(
    screen.findAllByText("Hoàng Minu"),
  ).toBeDefined();
});