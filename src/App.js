import './App.css';
import Dropdown from './Dropdown/Dropdown';
import DropdownButton from './DropdownButton/DropdownButton';
import DropdownItem from './DropdownItem/DropdownItem';
import DropdownMenu from './DropdownMenu/DropdownMenu';

function App() {
  
  return (
    <div className="App">

      <Dropdown>
        <DropdownButton>Dropdown button</DropdownButton>
        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
