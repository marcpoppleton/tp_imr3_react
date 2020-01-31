import React from "react";
import { render , waitForElement} from "@testing-library/react";
import { Characters } from "./Characters";

beforeAll(() => {
  jest.spyOn(global, 'fetch').mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      json: () => {
        return Promise.resolve([
          {
            surname: "Surname 1",
            name: "Name 1",
            resume:
              "Resume 1"
          }]
        );
      }
    });
  });
});

afterAll(() =>{
  fetch.mockClear();
});

test("backend is called", () => {
  render(<Characters />);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://imr3-react-backend.herokuapp.com');
})

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Characters />, div);
});

test("does not contains menu after initial render", () => {
  const { container } = render(<Characters />);
    const menu = container.querySelector(`[id="menu"]`);
    expect(menu).toBeNull();
});
test("does not contains main-content after initial render", () => {
  const { container } = render(<Characters />);
  const main_content = container.querySelector(`[id="main-content"]`);
  expect(main_content).toBeNull();
});
test("contains menu after async fetch", async () => {
  const { container } = render(<Characters />);
    const menuAfterGet = await waitForElement(() => container.querySelector(`[id="menu"]`));
    expect(menuAfterGet).toBeInTheDocument();
});
test("menu is an aside tag after async fetch", async () => {
  const { container } = render(<Characters />);
  const menuAfterGet = await waitForElement(() => container.querySelector(`[id="menu"]`));
  expect(menuAfterGet.nodeName).toBe("ASIDE");
});

test("contains main-content after async fetch", async () => {
  const { container } = render(<Characters />);
  const mainAfterGet = await waitForElement(() => container.querySelector(`[id="main-content"]`));
  expect(mainAfterGet).toBeInTheDocument();
});

test("main-content is a section tag after async fetch", async () => {
  const { container } = render(<Characters />);
  const mainAfterGet = await waitForElement(() => container.querySelector(`[id="main-content"]`));
  expect(mainAfterGet.nodeName).toBe("SECTION");
});