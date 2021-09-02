import { Button } from "@material-ui/core"
import { motion } from 'framer-motion'

const PizzaBase = ({ setBase }) => {
    return (
        <motion.div layout 
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        >
            <h5>Choose your pizza base crust</h5>
            <Button size='small' onClick={() => setBase('Original Pan')} variant="contained" className='btncolors m-2'>Original Pan</Button>
            <Button size='small' onClick={() => setBase('Traditional')} variant="contained" className='btncolors m-2'>Traditional</Button>
            <Button size='small' onClick={() => setBase('Thin N Crispy')} variant="contained" className='btncolors m-2'>Thin 'N' Crispy</Button>
            <Button size='small' onClick={() => setBase('Stuffed Crust')} variant="contained" className='btncolors m-2'>Stuffed Crust</Button>
            <Button size='small' onClick={() => setBase('Gluten Free')} variant="contained" className='btncolors m-2'>Gluten Free</Button>
        </motion.div>
    )
}

export default PizzaBase
