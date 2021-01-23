import './App.css';
import Card from "./Screens/Card/Card";
import { bioData } from './utilities/bioData'
function App() {
  return (
    <div className='flex bg-gray-200 w-full h-screen justify-center items-center'>
      <Card
        data={bioData}
      />
    </div>
  );
}

export default App;
