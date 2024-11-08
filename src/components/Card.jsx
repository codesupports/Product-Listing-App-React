import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const Card = () => {
    const dispatch = useDispatch();
    const item = useSelector((state) => state.data.data);
    const filterItem = useSelector((state) => state.data.filteredProducts);
    const selectedCategory = useSelector((state) => state.data.selectedCategory)

    const [product, setProduct] = useState(item)

    const finalData = () => {
        if (selectedCategory == "All") {
            setProduct(item)
        } else {
            setProduct(filterItem)
        }
    }
    useEffect(() => {
        finalData()
    }, [item, filterItem])

    // console.log('product', product)
    // console.log('setCategory', selectedCategory)


    return (
        <>
            {
                product?.map((item, index) => {
                    return (
                        <div className='card' key={index}>
                            <div className='picture-section'>
                                <img src={`${item.image}`} alt='' />
                            </div>
                            <div className='des-section'>
                                <p>{item.title}</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card;