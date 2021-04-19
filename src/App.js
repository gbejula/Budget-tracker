import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenses from './components/AddExpenses';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div classNme='container'>
        <h1 className='mt-3 px-3'>My Budget Planner</h1>
        <div className='row mt-3 p-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mt-3 px-3'>Expenses</h3>
        <input placeholder='Type to search...' className='form-control p-3' />
        <div className='row mt-3 p-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3 px-3'>Add Expenses</h3>
        <div className='row mt-3 p-3'>
          <div className='col-sm'>
            <AddExpenses />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
