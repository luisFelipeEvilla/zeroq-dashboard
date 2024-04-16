import { render, screen, fireEvent, act } from "@testing-library/react";
import Page from "./page";
import Layout from "./layout";
import { getOfficesService } from "@/services/offices";
import Providers from "./providers";
import Navbar from "@/components/Navbar/Navbar";

jest.mock("../services/offices", () => ({
  getOfficesService: jest.fn().mockResolvedValue([]),
}));

test("should find an office", async () => {
  const page = await Page();
  const layout = (
    <div>
      <Providers>
        <Navbar />
        {page}
      </Providers>
    </div>
  );

  render(layout);
  const searchBar = screen.getByPlaceholderText("Buscar sucursal");

  expect(searchBar).toBeInTheDocument();

  act(() => {
    fireEvent.change(searchBar, { target: { value: "Oficina Central" } });
  });

  expect(getOfficesService).toHaveBeenCalled();

  const officeCard = screen.getByText("Oficina Central");
  expect(officeCard).toBeInTheDocument();
});
