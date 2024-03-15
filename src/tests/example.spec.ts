import { test, expect } from "@playwright/test";

test("Checkly API Docs search input has a keyboard shortcut info", async ({
  page,
}) => {
  await page.goto("https://developers.checklyhq.com/"); // 1

  const searchBox = page.getByRole("button", { name: "Search" }); // 2

  await expect(searchBox).toContainText("CTRL-K"); // 3
});
