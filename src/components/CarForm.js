import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar, reset } from "../store";

export default function CarForm() {
  const dispatch = useDispatch();

  function onNameChangeHandle(event) {
    dispatch(changeName(event.target.value));
  }

  function onCostChangeHandle(event) {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  }

  const { name, cost } = useSelector((state) => {
    return state.carForm;
  });

  function onHandleSubmit(event) {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
    dispatch(reset());

    // dispatch(changeName(""));
    // dispatch(changeCost(0));
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={onHandleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="name">
              Car Name:
            </label>
            <input
              className="input is-expanded"
              onChange={onNameChangeHandle}
              value={name}
              id="name"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="cost">
              Car Value
            </label>
            <input
              className="input is-expanded"
              onChange={onCostChangeHandle}
              value={cost || ""}
              type="number"
              id="cost"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}
