import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { createContext, useState } from 'react';
import './index.css';

import Header from './components/header';
import Footer from './components/footer';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RedirectPage from './pages/RedirectPage';
import ResponsePage from './pages/ResponsePage';

interface Data {
  isLoggedIn: boolean;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

export const dataContext = createContext<Data | null>(null);
export const setDataContext = createContext<((d: Data) => void) | null>(null);

function App() {
  const [data, setData] = useState<Data>({
    isLoggedIn:
      localStorage.getItem('id') !== null &&
      localStorage.getItem('nickname') !== null,
  });

  return (
    <setDataContext.Provider value={setData}>
      <dataContext.Provider value={data}>
        <Router>
          <Header />
          <Routes>
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
