import { Button } from "@material-ui/core"

const PizzaOrder = ({ setOrder }) => {
    return (
        <>
            <h5>Select order type?</h5>
            <Button size='small' variant="contained" onClick={() => setOrder('Deliver')} color='primary' className='btncolors m-2'>Deliver</Button>
            <Button size='small' variant="contained" onClick={() => setOrder('Pickup')} color='primary' className='btncolors m-2'>Pickup</Button>
        </>
    )
}

export default PizzaOrder
