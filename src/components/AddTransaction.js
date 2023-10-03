import { useState , useContext } from "react"
import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {
  const [text, setText]=useState('');
  const [amount , setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onSubmit =e =>{
    e.preventDefault();
    const newTransaction ={
      id : Math.floor(Math.random()*100000),
      text,
      amount : +amount
    }
    addTransaction(newTransaction);
  }
  return (
    <>
        <h3 className="title">Add new transaction</h3>
        <hr/>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <br />
                <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text "/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />(positive(+) - income ,negative(-) - expenses)</label>
                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount "/>
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}
