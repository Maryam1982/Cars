import { useSelector } from "react-redux";

export default function CarValue() {
  const filteredCars = useSelector(({ carList: { cars, searchTerm } }) => {
    return cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });
  const totalCarValue = filteredCars.reduce((accu, curr) => {
    return accu + curr.cost;
  }, 0);
  return <div className="car-value">Total Value: ${totalCarValue}</div>;
}
