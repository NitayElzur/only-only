import './Box.css'
import Heart from '../Heart/Heart';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
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
            <Link className='link linkBox' to={result.zpid.toString()}>
                <img className='boxImage' src={result.imgSrc} alt="" />
                <div className="boxInfo">
                    {`${result?.streetAddress}, ${result?.city}, ${result?.state}`} <br />
                    {`Buying Price: ${commafy(result?.price)}`} <br />
                    {result.rentZestimate && `Estimated Rent Price: ${commafy(result.rentZestimate)}`} <br />
                    {`Bathrooms: ${result?.bathrooms} Bedrooms: ${result?.bedrooms}`}
                </div>
                <br /><br />
            </Link>
            <div className='boxButtons'>
                <button id="agentButton" className='boxButton'>Connect to real-estate agent</button>
                <Heart text={'Save this property'} />
            </div>
        </div >

    )
}
export default Box