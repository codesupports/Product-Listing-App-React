import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import filterIcon from './assets/sliders.svg'
import Loader from './components/Loader';
import useToggleClass from './customHooks/useToggleClass';

import { fetchData, setSort } from './features/dataSlice';

const Header = React.lazy(() => import('./components/Header'))
const Product = React.lazy(() => import('./components/Card'))
const Footer = React.lazy(() => import('./components/Footer'))
const Banner = React.lazy(() => import('./components/Banner'))
const LeftSection = React.lazy(() => import('./components/LeftSection'))

function App() {
  const [toggleMenu] = useToggleClass() // CustomHooks
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();
  const { productCount, data } = useSelector((state) => state.data)
  const [inputData, setInputData] = useState()

  const handleSortChange = (event) => {
    const value = event.target.value;
    dispatch(setSort(value))
    setSelectedOption(value)
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
                <select value={selectedOption} onChange={handleSortChange}>
                  <option value="Sory by Price" >Sory by Price</option>
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
                <a href='#null' onClick={() => handleSortChange("lowToHigh")}> &#8645; Sort Products</a>
              </div>
              <div className='result-aera'>{productCount} Results</div>
            </div>
            <div className="card-section">
              <Suspense fallback={<Loader />}>
                <Product inputData={inputData} />
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
