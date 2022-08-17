import './App.css';

import medocs from "./data/medocs.json"
import Item from './components/Item';

function App() {
  console.log(medocs);
  const maDate = "2012-04-23T18:25:43.511Z"
  console.log(new Date(maDate).toLocaleString());
  return (
    <div className="App">
        {medocs.map((medoc,idx)=>(
          <Item key={idx} name={medoc.name} prescPerDay={medoc.prescription_per_day} renewed={medoc.renewed} stock={medoc.stock} />
        ))}
    </div>
  );
}

export default App;