import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test/utils";
import CarList from "./CarList";

test("Shows all items in carList", () => {
  renderWithProviders(<CarList />, {
    preloadedState: {
      carList: {
        cars: [
          { name: "Toyota", cost: 12000 },
          { name: "BMW", cost: 45000 },
          { name: "Buick", cost: 25000 },
        ],
        searchTerm: "",
      },
    },
  });

  const delButtons = screen.getAllByRole("button", { name: /delete/i });
  expect(delButtons).toHaveLength(3);
});

test("Filters list based on the search term", () => {
  renderWithProviders(<CarList />, {
    preloadedState: {
      carList: {
        cars: [
          { name: "Toyota", cost: 12000 },
          { name: "BMW", cost: 45000 },
          { name: "Buick", cost: 25000 },
        ],
        searchTerm: "B",
      },
    },
  });

  const delButtons = screen.getAllByRole("button", { name: /delete/i });
  expect(delButtons).toHaveLength(2);
});

test("Listitems which contains value entered into name field are bold", () => {
  renderWithProviders(<CarList />, {
    preloadedState: {
      carList: {
        cars: [
          { name: "Toyota", cost: 12000 },
          { name: "BMW", cost: 45000 },
          { name: "Buick", cost: 25000 },
        ],
        searchTerm: "",
      },
      carForm: { name: "To", cost: 0 },
    },
  });
  const selectedItems = screen.getAllByText(/To/i, {
    selector: ".bold",
  });
  expect(selectedItems).toHaveLength(1);
});
