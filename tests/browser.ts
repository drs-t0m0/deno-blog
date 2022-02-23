import puppeteer from "https://deno.land/x/puppeteer@9.0.2/mod.ts";
import {assertEquals} from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("browser test", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:8000/");

  await page.waitForSelector("#title", {visible: true});
  const title = await page.$("#title");
  const titleTextContent = await title?.getProperty("textContent");
  const value = await titleTextContent?.jsonValue();

  assertEquals(value, "Welcome to `fresh`. Try update this message in the ./pages/index.tsx file, and refresh.");

  await browser.close();
});
