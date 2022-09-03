import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { createContext, useEffect, useState } from 'react';
import './index.css';

import Header from './components/header';
import Footer from './components/footer';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RedirectPage from './pages/RedirectPage';
import ResponsePage from './pages/ResponsePage';
import SyncPage from './pages/SyncPage';
import api from './config/api';

interface Data {
  isLoggedIn: boolean;
  uid?: string;
  uname?: string;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

export const dataContext = createContext<Data | null>(null);
export const setDataContext = createContext<((d: Data) => void) | null>(null);

function App() {
  const [data, setData] = useState<Data>({
    isLoggedIn: localStorage.getItem('token') !== null,
  });

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      api
        .get(`/user/${localStorage.getItem('token')}`)
        .then((res) => {
          setData({
            ...data,
            uid: res.data.uid,
            uname: res.data.username,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <setDataContext.Provider value={setData}>
      <dataContext.Provider value={data}>
        <Router>
          <Header />
          <Routes>
            <Route path="/logout/:id/:nickname" element={<SyncPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/redirect/:platform" element={<RedirectPage />} />
            <Route
              path="*"
              element={<ResponsePage message="Page not found." status="404" />}
            />
          </Routes>
          <Footer />
        </Router>
      </dataContext.Provider>
    </setDataContext.Provider>
  );
}
