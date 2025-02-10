import { Routes, Route }  from 'react-router-dom'

import Home from './Home';
import ViewBundles from './ViewBundles'
import PracticeCards from './PracticeCards'
import CreateCards from './CreateCards'
import ViewCards from './ViewCards'
import EditCards from './EditCards';
import Layout from './Layout'

function App() {

  return (

    <Routes>

      <Route path='/' element={Layout}>

        <Route index element={<Home/>}/>

        <Route path='/create'>
          <Route index element={<CreateCards/>}/>
          <Route path='/view/:id' element={<ViewCards/>}/>
        </Route>

        <Route path='/practice'>
          <Route path=':id' element={<PracticeCards/>}/>
        </Route>

        <Route path='edit/id' element={<EditCards/>}/>

      </Route>
      
    </Routes>
  );
}
//Maybe throw in an about page, plus make sure all these pages work in the correct fashion. Maybe put a bunch of these routes into the Home element?
export default App;
