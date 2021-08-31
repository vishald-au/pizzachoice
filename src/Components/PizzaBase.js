import { Button } from "@material-ui/core"

const PizzaBase = ({ setBase }) => {
    return (
        <>
            <h5>Choose your pizza base crust</h5>
            <Button size='small' color='primary' onClick={() => setBase('Original Pan')} variant="contained" className='btncolors m-2'>Original Pan</Button>
            <Button size='small' color='primary' onClick={() => setBase('Traditional')} variant="contained" className='btncolors m-2'>Traditional</Button>
            <Button size='small' color='primary' onClick={() => setBase('Thin N Crispy')} variant="contained" className='btncolors m-2'>Thin 'N' Crispy</Button>
            <Button size='small' color='primary' onClick={() => setBase('Stuffed Crust')} variant="contained" className='btncolors m-2'>Stuffed Crust</Button>
            <Button size='small' color='primary' onClick={() => setBase('Gluten Free')} variant="contained" className='btncolors m-2'>Gluten Free</Button>
        </>
    )
}

export default PizzaBase
