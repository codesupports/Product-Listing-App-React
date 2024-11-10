import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setAllProducts } from '../features/dataSlice';
import { useEffect, useState } from 'react';
import useToggleClass from '../customHooks/useToggleClass';

const LeftSection = () => {
    const [toggleMenu, closeMenu] = useToggleClass() // Custom Hooks


    const dispatch = useDispatch();
    const { productCount } = useSelector((state) => state.data)
    const leftCategory = ["electronics", "jewelery", "men's clothing", "women's clothing"] // left categoery
    const [selectedValues, setSelectedValues] = useState("");

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setSelectedValues((prevValues) => [...prevValues, value])
        }
        else {
            setSelectedValues((prevValues) => prevValues.filter((val) => val !== value));
        }
    };
    useEffect(() => {
        dispatch(setCategory(selectedValues))
    }, [selectedValues]);

    useEffect(() => {
        dispatch(setAllProducts());
    }, [dispatch]);

    // console.log('selectedValues aaye', selectedValues)
    // const catagoryData = []
    // const getCat = data.filter((catag, index) => {
    //     return (catagoryData.push(catag.category))
    // })

    // let finalCategoery = [...new Set(catagoryData)].sort((a, b) => {
    //     return a.localeCompare(b)
    // })
    // finalCategoery.push('All')
    // const handleCategoryChange = (cat) => {
    //     dispatch(setCategory(cat));
    // };
    // const fdata = data.filter((item) => {
    //     return item.category == "electronics" || item.category == "women's clothing"
    // })
    // console.log("fdata:-", totalCategory)
    return (
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
                <div className="clear-all d-small">
                    <a href="#null" >Clear All</a>
                </div>
                <p>Categories</p>
                <ul>
                    {
                        leftCategory?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <input
                                        type="checkbox"
                                        name={`item-${index}`}
                                        id={`item-${index}`}
                                        value={item}
                                        // checked={option}
                                        // onChange={() => handleCategoryChange(item)}
                                        onChange={handleCheckboxChange}

                                    />
                                    <label htmlFor={`item-${index}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>
            <button className='d-small bottom-result' onClick={closeMenu}>See {productCount} Results</button>
        </section>
    )
}

export default LeftSection;