import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/publics/Login.page';
import PrivateLayout from './pages/privates/PrivateLayout.component';
import { AuthProvider } from './context/authContext'
import Notes from './pages/privates/Notes.page';
import { DataProvider } from './context/dataContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<PrivateLayout />} >
              <Route index element={<h1>home</h1>} />
              <Route path="notes" element={<Notes />} />
            </Route>
          </Routes>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
