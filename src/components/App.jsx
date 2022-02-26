import '../assets/css/app.css';

import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper'

function App() {
  return (
    <div className="App muestra">
      <SideBar className="side"/>
      <ContentWrapper />
    </div>
  );
}

export default App;
