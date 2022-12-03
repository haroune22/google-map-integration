
import './App.css';
import { Navbar } from './Navbar';

function App() {
  return (<>
    <div>
      <Navbar/>
      <h1> Landing page with google map </h1>
      <div>
      <iframe style={{ width:"100%", height:"450px"}} src="https://maps.google.com/maps?q=Rouiba&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
    </>
  );
}

export default App;
