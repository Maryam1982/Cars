import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import CarForm from "./CarForm";
import { renderWithProviders } from "../test/utils";

test("Inputs should be emptied after submission", async () => {
  const { store } = renderWithProviders(<CarForm />);
  const nameInput = screen.getByRole("textbox", { name: /car name/i });
  const costInput = screen.getByRole("spinbutton");

  const submitButton = screen.getByRole("button");

  user.click(nameInput);
  act(() => {
    user.keyboard("Toyota");
  });

  user.click(costInput);
  act(() => {
    user.keyboard("12000");
  });

  act(() => {
    user.click(submitButton);
  });

  expect(nameInput).toHaveValue("");
  expect(costInput.value).toBe("");
  expect(store.getState().carList.cars).toHaveLength(1);
});
