import { Routes, Route }  from 'react-router-dom'
import { DataProvider } from './context/DataContext';

import Home from './pages/Home';
import PracticeCards from './pages/PracticeCards'
import CreateBundle from './pages/CreateBundle';
import ViewCards from './pages/ViewCards'
import EditCards from './pages/EditCards';
import Layout from './Layout'
import CreateCard from './pages/CreateCard';

function App() {

  return (
  
    <DataProvider>
      <Routes>

        <Route path='/' element={<Layout/>}>

          <Route index element={<Home/>}/>
      
          <Route path='/create'>
            <Route index element={<CreateBundle/>}/>
            
          </Route>

          <Route path='/view/:id'>
            <Route index element={<ViewCards/>}/>
          </Route>

          <Route path='/practice/:id'>
            <Route index element={<PracticeCards/>}/>
          </Route>

          <Route path='/edit/:id'>
            <Route index element={<EditCards/>}></Route>
          </Route>

          <Route>
            <Route path='/createCard/:id' element={<CreateCard/>}/>
          </Route>

        </Route>


        
      </Routes>
    </DataProvider>
  );
}
//Maybe throw in an about page, plus make sure all these pages work in the correct fashion. Maybe put a bunch of these routes into the Home element?
export default App;
