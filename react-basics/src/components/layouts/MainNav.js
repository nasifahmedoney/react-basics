import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';



function MainNav(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All meetups page</Link>
                    </li>
                    <li>
                        <Link to="/favorite">Favorites page</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New meetups page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;