import { useState } from 'react'

import Button from '@material-ui/core/Button'
import PizzaSize from './Components/PizzaSize'
import PizzaBase from './Components/PizzaBase'
import PizzaSauce from './Components/PizzaSauce'
import PizzaToppings from './Components/PizzaToppings'
import PizzaOrder from './Components/PizzaOrder'


function App() {

  const [ start, setStart ] = useState(false)
  const [ size, setSize ] = useState(null)
  const [ base, setBase ] = useState(null)
  const [ sauce, setSauce ] = useState(null)
  const [ topping, setTopping ] = useState(false)
  const [ toppings, setToppings ] = useState([])
  const [ order, setOrder ] = useState(null)

  const handleToppings = (props) => {
    const top = props
    const exist = toppings.find(x => x === top)
    if (!exist) {
      setToppings([...toppings, top])
    } else {
      console.log('exist')
    }
  }
  const handleReset = () => {
    setStart(false)
    setSize(null)
    setBase(null)
    setSauce(null)
    setTopping(false)
    setToppings([])
    setOrder(null)
  }
 
 
  return (
    <div className="container-fluid pizzaMain">
      <div className="row">
        <div className="col-6 col-md-8 p-4 pizzaArea">
          <h1>PizzaChoice</h1>
          <div className='stages p-4'>
            {!start && <div><Button variant="contained" color='secondary' onClick={() => setStart(true)}>Start</Button></div>}
            {start && !size && <PizzaSize setSize={setSize} />}
            {size && !base && <PizzaBase setBase={setBase} />}
            {base && !sauce && <PizzaSauce setSauce={setSauce} />}
            {sauce && !topping && <PizzaToppings setTopping={setTopping} handleToppings={handleToppings}/>}
            {topping && !order && <PizzaOrder setOrder={setOrder} />}
            {order && 'Thank you! Please pay and proceed.'}
          </div>
        </div>
        <div className="col-6 col-md-4 p-4 pizzaSidebar">
          <h5 className='p-3'>My Pizza <Button size='small' variant='outlined' onClick={() => handleReset()} className='btntex m-2'>reset</Button></h5>
          <div className='p-3'>
            {size && size + ' Size'} <br />
            {base && base + ' Base'} <br />
            {sauce && sauce} <br />
            {toppings.length > 0 && 'Topping(s) - '} <br />
            {toppings.map((top, index) => (
              <li key={index}>{top}</li>
            ))} <br />
            {order && order + ' my order'} <br />
            {order && <Button size='small' variant="contained" color='secondary' onClick={() => handleReset()} className='btncolors mt-3'>Pay $19.95</Button>}
      
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
