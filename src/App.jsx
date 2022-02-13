import BioData from "./componenets/BioData";
import Data from "./Data";

function App() {
  const showData = Data.map((personObject) => (
    <BioData key={personObject.id} {...personObject} />
  ));
  return (
    <div className="wrapper">
      <h1>Bio Data</h1>
      <div className="container">{showData}</div>
    </div>
  );
}

export default App;
