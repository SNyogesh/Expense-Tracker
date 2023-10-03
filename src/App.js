
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Incexp from './components/Incexp';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <div className='container'>
        <h1 className='header'>Expense Tracker</h1>
        <Balance />
        <Incexp />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
