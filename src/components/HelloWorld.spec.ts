import { test } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWord from "./HelloWorld.vue";

test("should validate App the componnent", async () => {
  expect(HelloWord).toBeTruthy();
  const wrapper = mount(HelloWord, {
    props: {
      msg: "Hello From Test",
    },
  });
  expect(wrapper.text()).toContain("Hello From Test");
});
