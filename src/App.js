import './App.css';
import { QueryDataContextProvider } from './components/QueryDataContext';
import { QueryPage } from './components/QueryPage';

function App() {
  return (
  
    <QueryDataContextProvider>
      <div className="App">
          <QueryPage></QueryPage>
      </div>
    </QueryDataContextProvider>

  );
}

export default App;
