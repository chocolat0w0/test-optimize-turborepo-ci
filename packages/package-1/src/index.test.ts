import { hello } from "./index";
test("hello", () => {
  expect(hello()).toBe("Hello from package-1");
});
