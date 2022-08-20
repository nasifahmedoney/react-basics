import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){

    const favoritesCtx = useContext(FavoritesContext);

    let items;

    if(favoritesCtx.totalFavorites === 0){
        items = <p>No favorite items</p>
    }
    else{
        items = <MeetupList meetup={favoritesCtx.favorites} />
    }
    return(<section>
        <h1>Favorites</h1>
        {items}
    </section>);
}

export default FavoritesPage;