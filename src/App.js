import './App.css';
import Title from './Title';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <div>
        <Container/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
