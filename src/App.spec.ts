import { test } from "vitest";
import { mount } from "@vue/test-utils";
import App from "./App.vue";

test("should validate App the componnent", async () => {
  expect(App).toBeTruthy();

  const wrapper = mount(App, {});
  expect(wrapper.text()).toContain("Vite + Vue <3");
});
