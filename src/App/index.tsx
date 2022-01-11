import './App.css';
import { FC, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppProviders from '../providers';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

const Home = lazy(() => import('../views/Home'));
const Cart = lazy(() => import('../views/Cart'));
const Product = lazy(() => import('../views/Product'));
const NotFound = lazy(() => import('../views/NotFound'));
const Wishlist = lazy(() => import('../views/Wishlist'));
const Dashboard = lazy(() => import('../views/Dashboard'));

const App: FC = () => {

  return (
    <AppProviders>
      <Router>
        <Suspense fallback={ <LoadingScreen /> }>
          <div className="app">
            <Header />

            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/product' element={ <Product /> } />
              <Route path='/wishlist' element={ <Wishlist /> } />
              <Route path='/dashboard' element={ <Dashboard /> } />

              <Route path='*' element={ <NotFound /> } />
            </Routes>

            <Footer />
          </div>
        </Suspense>
      </Router>
    </AppProviders>
  );
};

export default App;
