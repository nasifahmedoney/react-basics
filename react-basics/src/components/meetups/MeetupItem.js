import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props){
    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
    function addTodatabase(items){
        fetch(
            'https://react-getting-started-947f3-default-rtdb.firebaseio.com/favorites.json',
            {
                method: 'POST',
                body: JSON.stringify(items),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )
    }
    function removeFromDatabase(deleteitem){

        const url = `https://react-getting-started-947f3-default-rtdb.firebaseio.com/favorites/${deleteitem}`;
        fetch(
            url,
            {
                method: 'DELETE'
            }
        )
        //console.log(`https://react-getting-started-947f3-default-rtdb.firebaseio.com/favorites/${deleteitem}.json`)
    }
    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id);
            removeFromDatabase(props.id);
        }
        else{
            const favoriteContents = {
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,                
            }
            addTodatabase(favoriteContents);
            favoriteCtx.addFavorite(favoriteContents);
        }
    }
    
    
    return(
        
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'Add To Favorites'}</button>
            </div>
            </Card>
        </li>
        
    );
}

export default MeetupItem;