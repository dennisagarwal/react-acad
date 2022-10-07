// import Backdrop from "./components/Backdrop";
// import Modal from "./components/Modal";
// import Todo from "./components/Todo";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites'
import Layout from './components/layout/layout';
import {FavoritesContextProvider} from './store/favorites-context';

function App() {
  return (
    <Layout>
      <Routes>
      <Route path='/' element={<AllMeetups />} />
      <Route path='/new-meetup' element={<NewMeetup />} />
      <Route path='/favorites' element={<Favorites />} />
      </Routes>
      {/* <h1>My Todos</h1>
      <Todo text='task 1'/>
      <Todo text='task 2'/>
      <Todo text='task 3'/> */}
    </Layout>
  );
}

export default App;
