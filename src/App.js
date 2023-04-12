import "./App.css";
import Analysis from "./components/Analysis.js";
import AvgRating from "./components/AvgRating";
import Reviews from "./components/Reviews";
import Sidebar from "./components/Sidebar";
import Visitors from "./components/Visitors";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="besidesSidebar>">
        <div className="top3">
          <Analysis />
          <AvgRating />
          <Visitors />
        </div>
        <div className='reviewDiv'>
        <Reviews />
        </div>
      </div>
    </div>
  );
}
