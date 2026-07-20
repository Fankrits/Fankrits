// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { expect, test } from "vite-plus/test";
import { ShaderBackground } from "../ShaderBackground";

test("renders ShaderBackground placeholder on server/initial mount", () => {
  const { container } = render(<ShaderBackground />);
  expect(container.firstChild).toBeNull();
});
