import { Button } from "@material-ui/core"
import { motion } from 'framer-motion'

const PizzaSize = ({setSize}) => {
    return (
        <motion.div layout 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            >
            <h5>Choose Size</h5>
            <Button size='small' onClick={() => setSize('Medium')} variant="contained" className='btncolors m-2'>Medium</Button>
            <Button size='small' onClick={() => setSize('Large')} variant="contained" className='btncolors m-2'>Large</Button>
            <Button size='small' onClick={() => setSize('Family')} variant="contained" className='btncolors m-2'>Family</Button>
        </motion.div>
    )
}

export default PizzaSize
