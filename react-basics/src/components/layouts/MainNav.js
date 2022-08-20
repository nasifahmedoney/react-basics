import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';
import FavoritesContext from '../../store/favorites-context';
import { useContext } from 'react';


function MainNav(){
    const FavoriteCtx = useContext(FavoritesContext); 
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorite">Favorites<span className={classes.badge}>{FavoriteCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;