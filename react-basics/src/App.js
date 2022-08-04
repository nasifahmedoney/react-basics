import {Route,Routes} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';


function App(){
  return (
        <div>
          <Routes>
          <Route path='/' element={<AllMeetupsPage/>}/>
          <Route path='/favorite' element={<FavoritesPage />}/>
          <Route path='/new-meetup' element={<NewMeetupPage />}/>
          </Routes>
        
          {/* previous version 
          <Route path='/favorite'>
            <FavoritesPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage />
          </Route> */}
          
          </div>
          
          );
}

export default App;