import Card from "./components/Card";

function App() {
  return (
    <div className="h-screen flex flex-col bg-pale-blue relative">
      <div className="flex-1">
        <img
          className="h-full w-full"
          src="/pattern-background-desktop.svg"
          alt="background image"
        />
      </div>
      <div className="flex-1"></div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <Card />
      </div>
    </div>
  );
}
export default App;
