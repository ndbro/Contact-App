import { Route, Routes,  } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout/layout.component';
import { Contact } from './components/pages/contact/contact.component';
import { ContactForm } from './components/pages/contact-form/contact-form.component';
import { ErrorPage } from './components/pages/error-page/error-page.component';
import { useState } from 'react';

function App() {
  const [users ,setUsers] = useState([]);

  return (
    <Layout users={users}>
      <Routes>
        <Route path='contact/:id' element={<Contact users={users}/>}/>
        <Route path='add' element={<ContactForm setUsers={setUsers}/>} />
        <Route path='edit' element={<ContactForm setUsers={setUsers}  />}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
 