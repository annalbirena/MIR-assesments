import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// 1. Crear el contexto
const VotingContext = createContext();

// 2. Crear un Provider que envuelva a los componentes
export const VotingProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Don Julio", votes: 0, percentage: 0 },
    { id: 2, name: "Jhonny Walker", votes: 0, percentage: 0 },
    { id: 3, name: "Jack Daniels", votes: 0, percentage: 0 },
    { id: 4, name: "Jose Cuervo", votes: 0, percentage: 0 },
  ]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [filterType, setFilterType] = useState("TOTAL");
  const handleVote = (id) => {
    setCandidates((allCandidates) =>
      allCandidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
    setTotalVotes((prevTotal) => prevTotal + 1);
  };

  useEffect(() => {
    setCandidates((allCandidates) =>
      allCandidates.map((candidate) => ({
        ...candidate,
        percentage:
          totalVotes > 0 ? Math.round((candidate.votes / totalVotes) * 100) : 0,
      }))
    );
  }, [totalVotes]);

  // 3. Valor del contexto
  const contextValue = {
    candidates,
    totalVotes,
    filterType,
    handleVote,
    setFilterType,
  };

  // 4. Utilizar el Contexto para crear el provider
  return (
    <VotingContext.Provider value={contextValue}>
      {children}
    </VotingContext.Provider>
  );
};

VotingProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

// CustomHook - Consumer
export const useVoting = () => {
  const context = useContext(VotingContext);

  return context;
};
