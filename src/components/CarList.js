import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from "../store";

export default function CarList() {
  const { cars, name } = useSelector(
    ({ carForm, carList: { cars, searchTerm } }) => {
      const filteredCars = cars.filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      return { cars: filteredCars, name: carForm.name || "" };
    }
  );
  const dispatch = useDispatch();

  function onHandleDeleteClick(car) {
    dispatch(deleteCar(car));
  }

  return (
    <div className="car-list">
      {cars.map((car) => {
        const bold =
          name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
          <div key={car.id} className={`panel ${bold && "bold"}`}>
            ${car.name} - ${car.cost}{" "}
            <button
              className="button is-danger"
              onClick={() => {
                onHandleDeleteClick(car);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <hr />
    </div>
  );
}
