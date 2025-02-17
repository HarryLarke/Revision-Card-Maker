import { Routes, Route }  from 'react-router-dom'
import { DataProvider } from './context/DataContext';

import Home from './Home';
import ViewBundles from './ViewBundles'
import PracticeCards from './PracticeCards'
import CreateCards from './CreateCards'
import ViewCards from './ViewCards'
import EditCards from './EditCards';
import Layout from './Layout'

function App() {

  return (
  
    <DataProvider>
      <Routes>

        <Route path='/' element={<Layout/>}>

          <Route index element={<Home/>}/>
      
          <Route path='/create'>
            <Route index element={<CreateCards/>}/>
            <Route path='/create/:id' element={<ViewCards/>}/>
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

        </Route>
        
      </Routes>
    </DataProvider>
  );
}
//Maybe throw in an about page, plus make sure all these pages work in the correct fashion. Maybe put a bunch of these routes into the Home element?
export default App;
