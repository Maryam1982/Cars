import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test/utils";
import CarValue from "./CarValue";

test("The total value equals to the sum of the costs of items", () => {
  const cars = [
    { name: "Toyota", cost: 12000 },
    { name: "BMW", cost: 45000 },
    { name: "Buick", cost: 13000 },
  ];

  const totalCost = cars.reduce((acc, curr) => {
    return acc + curr.cost;
  }, 0);
  renderWithProviders(<CarValue />, {
    preloadedState: {
      carList: {
        cars,
        searchTerm: "",
      },
    },
  });

  const renderedTotal = screen.getByText(totalCost.toString(), {
    exact: false,
  });

  expect(renderedTotal).toBeInTheDocument();
});

test("The total value equals to the sum of filtered items based on searchTerm", () => {
  const cars = [
    { name: "Toyota", cost: 12000 },
    { name: "BMW", cost: 45000 },
    { name: "Buick", cost: 13000 },
  ];

  renderWithProviders(<CarValue />, {
    preloadedState: {
      carList: {
        cars,
        searchTerm: "B",
      },
    },
  });

  const filteredItems = cars.filter((car) => car.name.includes("B"));
  const totalCost = filteredItems.reduce((acc, curr) => {
    return acc + curr.cost;
  }, 0);
  const renderedTotal = screen.getByText(totalCost.toString(), {
    exact: false,
  });
  expect(renderedTotal).toBeInTheDocument();
});
