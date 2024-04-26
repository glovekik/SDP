import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration'
import Login from './components/Login';
import AppBar  from './components/Appbar';
function App() {

  function Page(){
    switch(store.getState()){
      case "Login":
        return(<div><Login /></div>)
        case "Registration":
          return(<div><Registration /></div>)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ART GALLERY</p>
       </header>
       <div className="App-body">
            <AppBar />
            <Page />
       </div>
    </div>
  );
}

export default App;
