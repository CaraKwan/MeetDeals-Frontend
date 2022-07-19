import './App.css';
import Main from './components/Main';
import Header from "./components/Header";
import { useState, useEffect, createContext } from 'react';
import { getItems } from './utils'
import { AuthProvider } from './Messenger/AuthContexts';

export const DataContext = createContext()

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData();
    console.log(data)
  }, []);

  const getData = (filter) => {
    getItems(setData);

    if(filter){
      filter(setData);
    }  
  }

  return (
    <div className="App">
      <AuthProvider>
        <DataContext.Provider value={{ data: [data], getData: [getData], setData:[setData]}}>
          <Header />
          <Main />
        </DataContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
