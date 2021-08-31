import { Button } from "@material-ui/core"
import { motion } from 'framer-motion'

const PizzaToppings = ({ setTopping, handleToppings }) => {

    return (
        <motion.div layout 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        >
            <h5>Choose Toppings (search)</h5>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Anchovies')} className='btncolors m-2'>Anchovies</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Bacon Rashers')} className='btncolors m-2'>Bacon Rashers</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Chicken')} className='btncolors m-2'>Chicken</Button>

            <Button size='small' color='primary' onClick={(e) => handleToppings('Italian Sausage')} className='btncolors m-2'>Italian Sausage</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Prawns')} className='btncolors m-2'>Prawns</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Diced Tomato')} className='btncolors m-2'>Diced Tomato</Button>

            <Button size='small' color='primary' onClick={(e) => handleToppings('Green Capsicum')} className='btncolors m-2'>Green Capsicum</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Kalamata Olives')} className='btncolors m-2'>Kalamata Olives</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Mushrooms')} className='btncolors m-2'>Mushrooms</Button>

            <Button size='small' color='primary' onClick={(e) => handleToppings('Pineapple')} className='btncolors m-2'>Pineapple</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Roasted Red Capsicum')} className='btncolors m-2'>Roasted Red Capsicum</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Aioli Drizzle')} className='btncolors m-2'>Aioli Drizzle</Button>

            <Button size='small' color='primary' onClick={(e) => handleToppings('Cheddar')} className='btncolors m-2'>Cheddar</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Chipotle Drizzle')} className='btncolors m-2'>Chipotle Drizzle</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Garlic')} className='btncolors m-2'>Garlic</Button>

            <Button size='small' color='primary' onClick={(e) => handleToppings('Hollandaise Drizzle')} className='btncolors m-2'>Hollandaise Drizzle</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Honey Mustard Drizzle')} className='btncolors m-2'>Honey Mustard Drizzle</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Hot Chilli Drizzle')} className='btncolors m-2'>Hot Chilli Drizzle</Button>

            <Button size='small' color='primary' onClick={(e) => handleToppings('Peri-Peri Drizzle')} className='btncolors m-2'>Peri-Peri Drizzle</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Smoky BBQ Drizzle')} className='btncolors m-2'>Smoky BBQ Drizzle</Button>
            <Button size='small' color='primary' onClick={(e) => handleToppings('Vegan Cheese')} className='btncolors m-2'>Vegan Cheese</Button>



            <Button size='small' color='primary' variant="contained" onClick={() => setTopping(true)} className='btncolors m-2'>Done</Button>
     
        </motion.div>
    )
}

export default PizzaToppings
