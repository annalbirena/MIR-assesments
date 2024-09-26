import { useVoting } from "../../context/Context";
import Candidate from "../candidate/Candidate";
import "./candidates.css";

const Candidates = () => {
  const { candidates } = useVoting();

  return (
    <>
      <h2>Candidates</h2>
      <div className="candidates">
        {candidates.map((candidate) => (
          <Candidate key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </>
  );
};

export default Candidates;
