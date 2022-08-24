import React, { useContext, useEffect, useState } from 'react';
import {ProductContext} from '../contexts/productContext';
import {ProductImage} from './ProductImage.jsx';
import { HelpInfo } from './HelpInfo';
import Modal from '../modal/Modal';
import {ProductActions} from './ProductActions';
import {ProductData} from './ProductData';

export const ProductContainer = () => {
    const context = useContext(ProductContext);
    const [product, setProduct] = useState(false);

    useEffect(async () => {
        const response = await context.productsData();
        setProduct(response.data);
        console.log(response.data)
    }, []);
    if (!product) return ("cargando")
    return (
    <div className='w-full justify-center mt-0  pb-[39px] my-0 content-center bg-[#E6E6E6]'>
        <div className='flex justify-center mt-0  ml-[100px] mr-[45px] w-[1280px] h-[616px] bg-white'>
            <div className='flex '>
                <div>
                       <ProductImage product={product}/>
                        <HelpInfo />
                    </div>
                </div>
                <div className='font-Lato flex flex-col items-center'>
                    <ProductData product = {product}/>
                    <h1>product price</h1>
                    <ProductActions />
                    <h1>product offerings opener</h1>
                    <Modal />
            </div> 
        </div>
    </div>
)  
}