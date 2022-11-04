import React from "react";
import { expect, test } from "vitest";
import renderer from "react-test-renderer";
import IndexRoute from "..";

test("snapshot index route", () => {
  const component = renderer.create(<IndexRoute />);
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  expect(result).toMatchSnapshot();
});
