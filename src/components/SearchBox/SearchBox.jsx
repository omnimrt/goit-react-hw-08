import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChangeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <label className={css.searchBoxDiv}>
        <span>Find contacts by name</span>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={onChangeFilter}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
