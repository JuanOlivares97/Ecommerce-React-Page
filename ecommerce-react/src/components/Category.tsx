import Image from 'next/image'
import React from 'react';

const Category = () => {
    return (
    <div className='aspect-square bg-neutral-50 dark:bg-transparent' >
        <Image
            width={256}
            height={256}
            src='/img/prueba.webp'
            alt=''
        />
        <div className='flex justify-center p-4 dark:text-slate-200'>
        <strong>Nombre Categoria</strong>
        </div>
    </div>
    )
}
    export default Category;