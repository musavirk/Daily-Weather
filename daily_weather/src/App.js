import "./App.css";
import Display from "./components/TimeAndLocation";
import SearchArea from "./components/SearchArea";
import TopButtons from "./components/Topbuttons";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import ForCast from "./components/Forcast";

function App() {
  return (
    <div className="App">
      <TopButtons />
      <SearchArea />
      <Display />
      <TemperatureAndDetails />
      <ForCast title="HOURLY FORCAST" />
      <ForCast title="DAILY FORCAST" />
    </div>
  );
}

export default App;
