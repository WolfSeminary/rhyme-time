import './App.css';
import AppBarPage from './AppBar';
import MultilineTextFiel from './WriteSong';
import RhymesList from './RhymesList'

function App() {
  const a=["hhh","ffff","fd"]
  return (
    <div className="App">
      <AppBarPage />
      <MultilineTextFiel/>
      <RhymesList rhymes={a}/>
    </div>
  );
}

export default App;
