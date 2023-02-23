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

test("should validate App the componnent", async () => {
  expect(HelloWord).toBeTruthy();
  const wrapper = mount(HelloWord, {
    props: {
      msg: "Hello From Test",
    },
  });
  expect(wrapper.text()).toContain("count is 0");
});

test("should validate App the componnent", async () => {
  expect(HelloWord).toBeTruthy();
  const wrapper = mount(HelloWord, {
    props: {
      msg: "Hello From Test",
    },
  });
  await wrapper.get("button").trigger("click");
  expect(wrapper.text()).toContain("count is 1");
});

test("should validate App the componnent", async () => {
  expect(HelloWord).toBeTruthy();
  const wrapper = mount(HelloWord, {
    props: {
      msg: "Hello From Test",
    },
  });
  for (let index = 0; index < 10; index++) {
    await wrapper.get("button").trigger("click");
  }
  expect(wrapper.text()).toContain("count is 10");
});

test("should overwrite the text on page", async () => {
  expect(HelloWord).toBeTruthy();

  const wrapper = mount(HelloWord, {
    props: {
      msg: "Welcome to the Test",
    },
  });
  
  const buttonWrapper = wrapper.find({ ref: "switchTextButton" });
  await buttonWrapper.trigger("click");

  expect(wrapper.text()).toContain("Text Switched Successfully!!");
});

test("should show an image on page", async () => {
  expect(HelloWord).toBeTruthy();

  const wrapper = mount(HelloWord, {
    props: {
      msg: "Welcome to the Test",
    },
  });
  
  const imgBeforeClick = wrapper.findAll('.lado1');
  expect(imgBeforeClick.length).toBe(0);

  const buttonWrapper = wrapper.find({ ref: "showImage" });
  await buttonWrapper.trigger("click");

  const imgAfterClick = wrapper.findAll('.lado1');
  expect(imgAfterClick.length).toBe(1);
});