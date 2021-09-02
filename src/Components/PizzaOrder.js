import { Button } from "@material-ui/core"
import { motion } from 'framer-motion'

const PizzaOrder = ({ setOrder }) => {
    return (
        <motion.div layout 
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            >
            <h5>Select order type?</h5>
            <Button size='small' variant="contained" onClick={() => setOrder('Deliver')} className='btncolors m-2'>Deliver</Button>
            <Button size='small' variant="contained" onClick={() => setOrder('Pickup')} className='btncolors m-2'>Pickup</Button>
        </motion.div>
    )
}

export default PizzaOrder
