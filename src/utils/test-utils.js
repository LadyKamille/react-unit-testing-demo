import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import reducer from "../app/reducer";

export function render(
  ui,
  {
    initialState = {},
    store = configureStore({
      reducer,
      preloadedState: initialState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
