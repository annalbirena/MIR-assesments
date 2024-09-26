import { useVoting } from "../../context/Context";
import "./displayfilter.css";

const DisplayFilter = () => {
  const { filterType, setFilterType } = useVoting();

  const handleChange = ({ target }) => {
    setFilterType(target.value);
  };

  return (
    <div className="displayoptions">
      <label htmlFor="percentage" className="displayoptions--input">
        <input
          type="radio"
          value="PERCENTAGE"
          id="percentage"
          name="type"
          onChange={handleChange}
          checked={filterType === "PERCENTAGE"}
          className="displayoptions--input"
        />
        <span>Total %</span>
      </label>
      <label htmlFor="total" className="displayoptions--input">
        <input
          type="radio"
          value="TOTAL"
          id="total"
          name="type"
          checked={filterType === "TOTAL"}
          onChange={handleChange}
          className="displayoptions--input"
        />
        <span>Total</span>
      </label>
    </div>
  );
};

export default DisplayFilter;
