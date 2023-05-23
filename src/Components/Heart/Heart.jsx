function Heart({ text, setFavorites, favorites, id, like, setLike }) {
    console.log(like);
    return (
        <button className='boxButton' id='heartBtn' type='button' onClick={() => {
            like ? setFavorites(favorites.filter(value => !(value == id))) :  !favorites.includes(id) && setFavorites([...favorites, id]);
            setLike(!like);
            
        }}>
            {like ? '❤️' : '🤍'} {text}
        </button>
    )
}
export default Heart;