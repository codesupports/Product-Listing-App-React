import React, { useEffect, useState } from 'react';
import filterIcon from './assets/sliders.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Card from './components/Card'


import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setSort } from './features/dataSlice';
import LeftSection from './components/LeftSection';

function App() {
  const bodyClass = document.querySelector('body');
  const toggleMenu = () => {
    bodyClass.classList.add('toggle')
  }

  const products = useSelector((state) => state.data);
  let count = "";
  if (products.filteredProducts == undefined) {
    count = products.data.length
  } else {
    count = products.filteredProducts.length
  }

  console.log('count', count)

  const dispatch = useDispatch();

  const handleSortChange = (val) => {
    dispatch(setSort(val))
  };
  const handleSortChangeMobile = (val) => {
    console.log(val)
    dispatch(setSort(val))
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);


  return (
    <>
      <div className="app">
        <Header />
        <Banner />
        <main>
          <LeftSection />
          <section className="right-section">
            <div className="resul-row">
              <div>{count} Results</div>
              <div>
                <select onChange={(e) => handleSortChange(e.target.value)}>
                  <option selected>Sory by Price</option>
                  <option value="lowToHigh" selected>Sory by Price</option>

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
              <div className='result-aera'>{count} Results</div>
            </div>
            <div className="card-section">
              <Card />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
