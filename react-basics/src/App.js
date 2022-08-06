import {Route,Routes} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import MainNav from './components/layouts/MainNav';


function App(){
  return (
        <div>
          <MainNav />
          <Routes>
          <Route path='/' element={<AllMeetupsPage/>}/>
          <Route path='/favorite' element={<FavoritesPage />}/>
          <Route path='/new-meetup' element={<NewMeetupPage />}/>
          </Routes>
        </div>
          
          );
}

export default App;