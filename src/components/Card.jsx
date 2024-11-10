import heartIcon from '../assets/heart-outline.svg'
import Loader from './Loader';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { productLength, loadMoreProducts } from '../features/dataSlice';

const Card = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.data);
    const filterItem = useSelector((state) => state.data.filteredProducts);
    const selectedCategory = useSelector((state) => state.data.selectedCategory)
    const { displayCount, status } = useSelector((state) => state.data);

    const [product, setProduct] = useState(data)

    const finalData = () => {
        if (selectedCategory == "All" || selectedCategory == "") {
            setProduct(data)
            dispatch(productLength(data.length));
        } else {
            setProduct(filterItem)
            dispatch(productLength(filterItem.length));
        }
    }

    const handleMoreProduct = () => {
        dispatch(loadMoreProducts());
    };

    useEffect(() => {
        finalData()
    }, [data, filterItem])

    return (
        <>
            {/* {status == "loading" && <Loader />} */}
            {
                product?.slice(0, displayCount).map((item, index) => {
                    return (
                        <div className='card' key={index}>
                            <div className='picture-section'>
                                <img src={`${item.image}`} alt='' />
                            </div>
                            <div className='des-section'>
                                <p>{item.title}</p>
                                <p>${item.price}</p>
                                <img src={heartIcon} alt="" />
                            </div>
                        </div>
                    )
                })
            }
            {displayCount < product.length && (
                <button onClick={handleMoreProduct} className='loadmore__btn'>Load More</button>
            )}

        </>
    )
}

export default Card;