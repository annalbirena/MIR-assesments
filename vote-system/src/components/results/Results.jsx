import { useVoting } from "../../context/Context";
import "./results.css";

const Results = () => {
  const { candidates, filterType } = useVoting();

  return (
    <>
      <h2>Results</h2>
      <div className="results">
        {candidates.map((candidate) => (
          <div key={candidate.id}>
            <div className="results--label">{candidate.name}</div>
            <div className="results--value">
              {filterType === "PERCENTAGE"
                ? `${candidate.percentage.toFixed(0)}%`
                : candidate.votes}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Results;
