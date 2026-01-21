import { Route, Routes } from 'react-router-dom';
import Getuser from './user/Getuser';
import AddData from './user/AddUser';
import EditUser from './user/EditUser';

function HomeRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Getuser/>}  />
        <Route path='/AddData' element={<AddData/>}  />
        <Route path='/EditUser/:id' element={<EditUser/>}  />
      </Routes>
    </div>
  )
}

export default HomeRoute
