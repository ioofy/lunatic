import { render, screen, waitFor } from "@testing-library/react";
import { Home } from "../index.page";

describe("Home Screen", () => {
  it("Render Home screen", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it("check if Home screen renders", async () => {
    render(<Home />);

    await waitFor(() => screen.getByText("Home"));
    expect(screen.getByText("Home").innerHTML).toBe("Home");
  });
});
