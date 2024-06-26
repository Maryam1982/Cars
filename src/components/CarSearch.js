import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

export default function CarSearch() {
  const searchTerm = useSelector((state) => {
    return state.carList.searchTerm;
  });
  const dispatch = useDispatch();

  function onSearchTermChangeHandle(event) {
    dispatch(changeSearchTerm(event.target.value));
  }
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={onSearchTermChangeHandle}
        />
      </div>
    </div>
  );
}
