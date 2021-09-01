import { Button } from "@material-ui/core"
import { motion } from 'framer-motion'

const PizzaToppings = ({ setTopping, handleToppings }) => {

    return (
        <motion.div layout
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        >
            <h5>Choose Toppings (search)</h5>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Anchovies')} className='btntex m-2'>+ Anchovies</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Bacon Rashers')} className='btntex m-2'>+ Bacon Rashers</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Chicken')} className='btntex m-2'>+ Chicken</Button>

            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Italian Sausage')} className='btntex m-2'>+ Italian Sausage</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Prawns')} className='btntex m-2'>+ Prawns</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Diced Tomato')} className='btntex m-2'>+ Diced Tomato</Button>

            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Green Capsicum')} className='btntex m-2'>+ Green Capsicum</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Kalamata Olives')} className='btntex m-2'>+ Kalamata Olives</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Mushrooms')} className='btntex m-2'>+ Mushrooms</Button>

            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Pineapple')} className='btntex m-2'>+ Pineapple</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Roasted Red Capsicum')} className='btntex m-2'>+ Roasted Red Capsicum</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Aioli Drizzle')} className='btntex m-2'>+ Aioli Drizzle</Button>

            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Cheddar')} className='btntex m-2'>+ Cheddar</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Chipotle Drizzle')} className='btntex m-2'>+ Chipotle Drizzle</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Garlic')} className='btntex m-2'>+ Garlic</Button>

            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Hollandaise Drizzle')} className='btntex m-2'>+ Hollandaise Drizzle</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Honey Mustard Drizzle')} className='btntex m-2'>+ Honey Mustard Drizzle</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Hot Chilli Drizzle')} className='btntex m-2'>+ Hot Chilli Drizzle</Button>

            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Peri-Peri Drizzle')} className='btntex m-2'>+ Peri-Peri Drizzle</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Smoky BBQ Drizzle')} className='btntex m-2'>+ Smoky BBQ Drizzle</Button>
            <Button size='small' variant='outlined' onClick={(e) => handleToppings('Vegan Cheese')} className='btntex m-2'>+ Vegan Cheese</Button>



            <Button size='small' color='secondary' variant="contained" onClick={() => setTopping(true)} className='m-2'>Done</Button>
     
        </motion.div>
    )
}

export default PizzaToppings
