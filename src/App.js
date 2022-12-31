import { Accordion } from "./components/Accordion";
import { accordionData } from "./utils/data";

function App() {
  return (
    <>
      <h2>React Accordion </h2>
      <div className="accordion">
        {accordionData.map((item, index) => {
          return <Accordion accordion={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
