import PropTypes from "prop-types";
import { useVoting } from "../../context/Context";
import "./candidate.css";

const Candidate = ({ candidate }) => {
  const { handleVote } = useVoting();

  const handleClick = () => {
    handleVote(candidate.id);
  };

  return (
    <div className="candidate">
      <button type="button" onClick={handleClick}>
        {candidate.name}
      </button>
    </div>
  );
};

export default Candidate;

Candidate.propTypes = {
  candidate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
