import './Band.css'

function Band(props) {
    const {key, name, formed, origin, fans} = props

    return(
        <div className='Band'>
            <h1>{name}</h1>
            <p>formed: {formed}</p>
            <p>Origin: {origin}</p>
            <p># of Fans: {fans}</p>
        </div>
    )
}

export default Band