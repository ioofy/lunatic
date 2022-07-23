import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("Home Screen", () => {
  it("Render Home screen", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("check if Home screen renders", async () => {
    render(<App />);

    await waitFor(() => screen.getByText("App"));
    expect(screen.getByText("App").innerHTML).toBe("App");
  });
});
