import './App.css';
import Expanseitem from './components/Expanseitem';
function App(props) {
  
  const expenses = [
    {
      id: 'e1',
      title: 'Boulty',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },

    { id: 'e2', 
      title: 'Rolty', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    
    {
      id: 'e3',
      title: 'Vraty',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  
  return (
    <div>

      <h1>hi React </h1>
      <Expanseitem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <Expanseitem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <Expanseitem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <Expanseitem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
