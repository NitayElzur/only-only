import './Box.css'
function commafy(num) {
    const str = num?.toString().split('.');
    if (str[0].length >= 2) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}
function Box({ result }) {
    return (
        <div className='boxBody' >
            <img className='boxImage' src={result.imgSrc} alt="" />
            <div className="boxInfo">
                {`${result?.streetAddress}, ${result?.city}, ${result?.state}`} <br />
                {`Buying Price: ${commafy(result?.price)}`} <br />
                {result.rentZestimate && `Estimated Rent Price: ${commafy(result.rentZestimate)}`} <br />
                {`Bathrooms: ${result?.bathrooms} Bedrooms: ${result?.bedrooms}`}
            </div>
            <br /><br />
            <div className='boxButtons'>
                <button id="agentButton" className='boxButton'>Connect to real-estate agent</button>
                <button id="saveButton" className='boxButton'>Save this property</button>
            </div>
        </div >

    )
}
export default Box