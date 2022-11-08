import './App.css';
import ZoomCard from "./Zoom-Card/ZoomCard";
import image from "./beach.jpg"

function App() {
  return (
    <div className="App">
      <ZoomCard className="zoomcard" image={image} title="Cancún" description="Si hay playa hay sexo"></ZoomCard>
    </div>
  );
}

export default App;
