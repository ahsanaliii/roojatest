import { SelectorMatcherOptions, render, screen } from "@testing-library/react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PageNotFound from "./PageNotFound";

// Custom text matcher function
const getByTextWithMarkup = (
  text: string,
  options?: SelectorMatcherOptions
) => {
  const matches = screen.getAllByText((content, element) => {
    const elementText = element.textContent || "";
    return elementText.includes(text);
  }, options);

  if (matches.length === 0) {
    throw new Error(`Unable to find an element with the text: ${text}`);
  }

  return matches[0];
};

describe("---------Render PageNotFound Components------------", () => {
  test("Render PageNotFound Components", () => {
    render(
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/">
              <Route index element={<PageNotFound />} />
            </Route>
          )
        )}
      />
    );

    // Use getByTextWithMarkup instead of getByText
    const foundElement = getByTextWithMarkup("Page Not Found 😢");
    expect(foundElement).toBeInTheDocument();
  });
});
