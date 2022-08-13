import { Route,Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/Layouts/Layout';
import MainNav from './components/Layouts/MainNav';




function App(){
  return (
        <div>
          <MainNav />
          <Layout>
            <Routes>
            <Route path='/' element={<AllMeetupsPage/>}/>
            <Route path='/favorite' element={<FavoritesPage />}/>
            <Route path='/new-meetup' element={<NewMeetupPage />}/>
            </Routes>
          </Layout>
        </div>
          
          );
}

export default App;