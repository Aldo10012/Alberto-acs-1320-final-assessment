import './Band.css'
import Like from '../Like/Like.js'


function Band(props) {
    const {keyy, name, formed, origin, fans} = props

    return(
        <div className='Band'>
            <h1>{name}</h1>
            <p>formed: {formed}</p>
            <p>Origin: {origin}</p>
            <p># of Fans: {fans}</p>
            <div id='like'>
                <Like />
            </div>
            
        </div>
    )
}

export default Band