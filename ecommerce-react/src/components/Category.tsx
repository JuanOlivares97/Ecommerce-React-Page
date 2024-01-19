import Image from 'next/image'
import React from 'react';

const Category = () => {
    return (
    <div className='aspect-square bg-neutral-50' >
        <Image
            width={256}
            height={256}
            src='/img/prueba.webp'
            alt=''
        />
        <div className='flex justify-between p-4'>
        <strong>Nombre Categoria</strong>
        <span>Cantidad</span>
        </div>
    </div>
    )
}
    export default Category;