import './MetalMeta.css'

function MetalMeta(props) {
    const {numberOfBands} = props

    return(
        <div>
            <p># of bands: {numberOfBands}</p>
        </div>
    )
}

export default MetalMeta