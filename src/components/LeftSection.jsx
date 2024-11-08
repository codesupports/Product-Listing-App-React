import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setCategory, setAllProducts, } from '../features/dataSlice';
import { useEffect, useState } from 'react';

const LeftSection = () => {

    const bodyClass = document.querySelector('body');

    const closeMenu = () => {
        bodyClass.classList.remove('toggle')
    }

    const dispatch = useDispatch();
    const { data, filteredProducts } = useSelector((state) => state.data);
    const totalCategory = useSelector((state) => state.data.totalCategory)

    const catagoryData = []
    const getCat = data.filter((catag, index) => {
        return (catagoryData.push(catag.category))
    })

    let finalCategoery = [...new Set(catagoryData)].sort((a, b) => {
        return a.localeCompare(b)
    })
    // finalCategoery.push('All')

    const handleCategoryChange = (cat) => {
        dispatch(setCategory(cat));

    };

    useEffect(() => {
        dispatch(setAllProducts());
    }, [dispatch]);
    // console.log("filteredProducts", filteredProducts)

    // const fdata = data.filter((item) => {
    //     return item.category == "electronics" || item.category == "women's clothing"
    // })
    // console.log("fdata:-", totalCategory)
    return (
        <>
            <section className="left-section">
                <nav className="breadcrumb">
                    <ul className="breadcrumb__list">
                        <li className="breadcrumb__item"><a href="#">Clothing</a></li>
                        <li className="breadcrumb__item"><a href="#"> Women’s</a></li>
                        <li className="breadcrumb__item breadcrumb__item--active">Outerwear</li>
                    </ul>
                </nav>
                <h4>Filter <span className='close' onClick={closeMenu}>&#x2715;</span></h4>
                <div className="filter__category">
                    <p>Categories</p>
                    <ul>
                        {
                            finalCategoery?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <input type="checkbox" name={`item-${index}`} id={`item-${index}`} onChange={() => handleCategoryChange(item)} />
                                        <label htmlFor={`item-${index}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </section>
        </>
    )
}

export default LeftSection;