import { Button } from "@material-ui/core"
import { motion } from 'framer-motion'

const PizzaSauce = ({ setSauce }) => {
    return (
        <motion.div layout 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        >
            <h5>Choose Sauce</h5>
            <Button size='small' onClick={() => setSauce('Tomato')} variant="contained" className='btncolors m-2'>Tomato Sauce</Button>
            <Button size='small' onClick={() => setSauce('Alfredo')} variant="contained" className='btncolors m-2'>Alfredo Sauce</Button>
            <Button size='small' onClick={() => setSauce('BBQ')} variant="contained" className='btncolors m-2'>BBQ Sauce</Button>
            <Button size='small' onClick={() => setSauce('Extra BBQ')} variant="contained" className='btncolors m-2'>Extra BBQ Sauce</Button>
            <Button size='small' onClick={() => setSauce('Extra Tomato')} variant="contained" className='btncolors m-2'>Extra Tomato Sauce</Button>
        </motion.div>
    )
}

export default PizzaSauce
