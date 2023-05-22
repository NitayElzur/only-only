import './ErrorPage.css'
import Heart from '../Heart/Heart';
function ErrorPage() {
    return (
        <div id='errorMain'>
            <div id="errorDiv">
                404 page not found <br />
                The link you requested does not exist <br />
                Go back to home page via the clicking the logo
                <Heart />
            </div>
        </div>
    )
}
export default ErrorPage;