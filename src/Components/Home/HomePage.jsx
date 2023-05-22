import './HomePage.css'
function HomePage() {
    return (
        <div id='homeMain'>
            <div id='homeImgDiv'>
                <img id='homeImg' src="https://archello.s3.eu-central-1.amazonaws.com/images/2021/01/29/on-a-panoramic-house-private-houses-archello.1611915827.8907.jpg" alt="" />
                <h1 id='homeBigText'>Welcome to our premier real estate website, where you'll find your dream home</h1>
            </div>
            <div id='homeExplain'>
                <div id='homeThinkText'>
                    <h1 id='thinkBigText'>Why Us?</h1>
                    Our expert agents and user-friendly interface make us the ultimate destination for all things real estate.
                    Browse our extensive collection of properties, complete with detailed listings and virtual tours.
                    Get valuable insights about neighborhoods, financing options, and market trends.
                    Whether you're buying, selling, or investing, start your real estate journey with us and let our dedicated team guide you every step of the way.
                </div>
                <img id='thinkImg' src="https://media.istockphoto.com/id/1192313124/photo/pensive-customer-thinking-over-special-offer.jpg?s=612x612&w=0&k=20&c=mPGCsfgUSRqpIL9oNCCIUF0jKytMTGDiP9H2n9z62qM=" alt="" />
            </div>
        </div>
    )
}
export default HomePage;