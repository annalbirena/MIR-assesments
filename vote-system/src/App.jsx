import Results from "./components/results/Results";
import Candidates from "./components/candidates/Candidates";
import DisplayFilter from "./components/displayfilter/Displayfilter";
import TotalVotes from "./components/totalvotes/Totalvotes";
import { VotingProvider } from "./context/Context";
import "./App.css";

function App() {
  return (
    <VotingProvider>
      <div>
        <Candidates />
        <DisplayFilter />
        <TotalVotes />
        <Results />
      </div>
    </VotingProvider>
  );
}

export default App;
