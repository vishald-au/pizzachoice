import { Button } from "@material-ui/core"


const PizzaSize = ({setSize}) => {
    return (
        <div>
            <h5>Choose Size</h5>
            <Button size='small' color='primary' onClick={() => setSize('Medium')} variant="contained" className='btncolors m-2'>Medium</Button>
            <Button size='small' color='primary' onClick={() => setSize('Large')} variant="contained" className='btncolors m-2'>Large</Button>
            <Button size='small' color='primary' onClick={() => setSize('Family')} variant="contained" className='btncolors m-2'>Family</Button>
        </div>
    )
}

export default PizzaSize
