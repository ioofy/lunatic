import { render } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

export const handlers = [
  rest.get("*/users/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Leanne Graham",
      }),
    );
  }),

  rest.get("*/todos/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "Do something",
      }),
    );
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

export const renderWithClient = (ui: React.ReactElement) => {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  };
};

export const createWrapper = () => {
  const testQueryClient = createTestQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
};
