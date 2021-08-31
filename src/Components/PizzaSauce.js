import { Button } from "@material-ui/core"
import { motion } from 'framer-motion'

const PizzaSauce = ({ setSauce }) => {
    return (
        <motion.div layout 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        >
            <h5>Choose Sauce</h5>
            <Button size='small' color='primary' onClick={() => setSauce('Tomato Sauce')} variant="contained" className='btncolors m-2'>Tomato Sauce</Button>
            <Button size='small' color='primary' onClick={() => setSauce('Alfredo Sauce')} variant="contained" className='btncolors m-2'>Alfredo Sauce</Button>
            <Button size='small' color='primary' onClick={() => setSauce('BBQ Sauce')} variant="contained" className='btncolors m-2'>BBQ Sauce</Button>
            <Button size='small' color='primary' onClick={() => setSauce('Extra BBQ Sauce')} variant="contained" className='btncolors m-2'>Extra BBQ Sauce</Button>
            <Button size='small' color='primary' onClick={() => setSauce('Extra Tomato Sauce')} variant="contained" className='btncolors m-2'>Extra Tomato Sauce</Button>
        </motion.div>
    )
}

export default PizzaSauce
