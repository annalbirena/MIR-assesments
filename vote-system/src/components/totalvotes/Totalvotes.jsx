import { useVoting } from "../../context/Context";
import "./totalvotes.css";

const TotalVotes = () => {
  const { totalVotes } = useVoting();

  return (
    <>
      <h2>Total Votes</h2>
      <div className="total-votes">
        <p>Total votes: {totalVotes}</p>
      </div>
    </>
  );
};
export default TotalVotes;
