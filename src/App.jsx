import React, { useEffect, useState, Suspense } from 'react';
import './App.css'
import filterIcon from './assets/sliders.svg'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'

import LeftSection from './components/LeftSection';
const Product = React.lazy(() => import('./components/Card'))

import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setSort } from './features/dataSlice';
import Loader from './components/Loader';

function App() {
  const bodyClass = document.querySelector('body');
  const toggleMenu = () => {
    bodyClass.classList.add('toggle')
  }

  const dispatch = useDispatch();
  const { productCount } = useSelector((state) => state.data)

  const products = useSelector((state) => state.data);
  // let count = "";
  // if (products.filteredProducts == undefined) {
  //   count = products.data.length
  // } else {
  //   count = products.filteredProducts.length
  // }

  const handleSortChange = (val) => {
    dispatch(setSort(val))
  };
  const handleSortChangeMobile = (val) => {
    console.log(val)
    dispatch(setSort(val))
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [setSort]);


  return (
    <>
      <div className="app">
        <Header />
        <Banner />
        <main>
          <LeftSection />
          <section className="right-section">
            <div className="resul-row">
              <div>{productCount} Results</div>
              <div>
                <select onChange={(e) => handleSortChange(e.target.value)}>
                  <option value="Sory by Price" selected disabled>Sory by Price</option>
                  <option value="lowToHigh">Ascending</option>
                  <option value="HighToLow">Decending</option>

                </select>
              </div>
            </div>
            <div className='mobile-row'>
              <nav className="breadcrumb">
                <ul className="breadcrumb__list">
                  <li className="breadcrumb__item"><a href="#">Clothing</a></li>
                  <li className="breadcrumb__item"><a href="#"> Women’s</a></li>
                  <li className="breadcrumb__item breadcrumb__item--active">Outerwear</li>
                </ul>
              </nav>
              <div className='filter-aera'>
                <a href='#null' onClick={toggleMenu}><img src={filterIcon} alt='' />Filter Results</a>
                <a href='#null' onClick={() => handleSortChangeMobile("lowToHigh")}> &#8645; Sort Products</a>
              </div>
              <div className='result-aera'>{productCount} Results</div>
            </div>
            <div className="card-section">
              <Suspense fallback={<Loader />}>
                <Product />
              </Suspense>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <div className='overlay' />
    </>
  )
}

export default App;
