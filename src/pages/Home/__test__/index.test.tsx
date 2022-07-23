import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "../index.page";

const HomeComponents = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

describe("Home Screen", () => {
  it("Render Home screen", () => {
    const { container } = render(<HomeComponents />);
    expect(container).toMatchSnapshot();
  });
});
