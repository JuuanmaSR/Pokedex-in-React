import pokebola from '../../pokebola.png'
import './index.css'

const Spinner = () => {
    return <div className='spinner-container'>
        <img className='spinner-img' src={pokebola} alt='pokebol-spinner'></img>
    </div>
}

export default Spinner