import React from 'react';
// importing the routes for the application
import {Routes , Route , BrowserRouter} from 'react-router-dom'
import ContactComponent from './containers/Contacts';
import CreateContactComponent from './containers/CreateContact';
import LoginComponent from './containers/Login';
import RegisterComponent from './containers/Register';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ContactComponent />}/>
              <Route path='/auth/register'   element={<RegisterComponent/>}/>
              <Route path='/auth/login'   element={<LoginComponent/>}/>
              <Route path='/contacts/create'   element={<CreateContactComponent/>}/>
            </Routes>
          
          </BrowserRouter>
    </div>
  );
}

export default App;
