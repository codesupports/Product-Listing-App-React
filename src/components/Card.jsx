import heartIcon from '../assets/heart-outline.svg'
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
            {
                product?.slice(0, displayCount).map((item, index) => {
                    return (
                        <article className='card' key={index} role="listitem" aria-labelledby="product1-name" tabIndex={0}>
                            <div className='picture-section'>
                                <img src={`${item.image}`} alt={item.title} />
                            </div>
                            <div className='des-section'>
                                <p id="product1-name">{item.title}</p>
                                <p>${item.price}</p>
                                <img src={heartIcon} alt="Wishlist item" />
                            </div>
                        </article >
                    )
                })
            }
            {displayCount < product.length && (
                <button onClick={handleMoreProduct} className='loadmore__btn' aria-label='Load more products'>Load More</button>
            )}
        </>
    )
}

export default Card;