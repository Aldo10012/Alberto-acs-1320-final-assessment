import './Band.css'
import Like from '../Like/Like.js'


function Band(props) {
    const {keyy, name, formed, origin, fans, split} = props

    return(
        <div className='Band'>
            <h1>{name}</h1>
            <p><strong>Formed:</strong> {formed}</p>
            <p><strong>Origin:</strong> {origin}</p>
            <p><strong># of Fans:</strong> {fans}</p>
            <p><strong>Split:</strong> {split}</p>
            <div id='like'>
                <Like />
            </div>
            
        </div>
    )
}

export default Band