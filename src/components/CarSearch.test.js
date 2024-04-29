import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { renderWithProviders } from "../test/utils";
import CarSearch from "./CarSearch";

test("Should update searchTerm piece of state", () => {
  const { store } = renderWithProviders(<CarSearch />);
  const input = screen.getByRole("textbox");
  user.click(input);
  user.keyboard("Toyota");
  expect(store.getState().carList.searchTerm).toBe("Toyota");
});
