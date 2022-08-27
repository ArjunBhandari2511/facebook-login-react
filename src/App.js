import './App.css';
import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
     <header className="App-header">
      <h1 className="App-title">Facebook Auth Example</h1>
     </header>
     <div className="App-intro">To get started, authenticate with Facebook</div>
     <Facebook />
    </div>
  );
}

export default App;
