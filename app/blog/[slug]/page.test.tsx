import { expect, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Page from "./page";

test("App Router: Works with dynamic route segments", async () => {
  const ui = await Page({ params: Promise.resolve({ slug: "Test" }) });

  render(ui);

  expect(
    screen.getByRole("heading", { level: 1, name: "Slug: Test" }),
  ).toBeDefined();

  cleanup();
});

test("Hoàng MiNu should be in page", async () => {
  const ui = await Page({
    params: Promise.resolve({ slug: "Hoàng MiNu" }),
  });

  render(ui);

  expect(
    screen.getByRole("heading", { level: 1, name: "Slug: Hoàng MiNu" }),
  ).toBeDefined();

  cleanup();
});
