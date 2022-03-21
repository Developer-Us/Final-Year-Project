
import LoggedInStatusState from '../Context/LoggedInStatus/LoggedInStatusState';
import '../Styles/App.css';
import Home from './Home';

function App() {
// Last Modified Date: 21/03/22 by mk,yg,am,vd 
  return (
    <>
      <LoggedInStatusState>
        <div className="App">
          <Home />
        </div>
      </LoggedInStatusState>
    </>
  );
}

export default App;
