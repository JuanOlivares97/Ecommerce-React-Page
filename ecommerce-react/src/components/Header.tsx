import React from 'react';
import Image from 'next/image'

const Header = () => {
    return (
        <header className='bg-white'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
                <div className='flex lg:flex-1'>
                    <a href="" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Meniaz.cl</span>
                        <Image
                            width={50}
                            height={10}
                            className="mx-auto"
                            src="/img/logo.png"
                            alt="" />
                    </a>
                    <div className='flex content-between items-center space-x-7 ml-7'>
                        <a href="#" className='border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700'>Inicio</a>
                        <a href="#" className='border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700'>Categorias</a>
                        <a href="#" className='border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700'>Contacto</a>
                        <a href="#" className='border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700'>Redes</a>
                    </div>
                </div>
                <div className='flex lg:flex-1 justify-end'>
                    <input
                        className='h-10 w-full rounded-md border border-neutral-300 bg-transparent bg-white px-4 py-2 pr-10 text-sm text-black placeholder:text-neutral-500 focus:border-black focus:ring-black'
                        type="text" 
                        name="" 
                        id="" 
                        placeholder='Busqueda' />
                    <div className='flex items-center space-x-7 ml-7 lg:order-last'>
                        <a href="#" ><i className='bx bx-user text-3xl' ></i></a>
                        <a href="#" ><i className='bx bx-shopping-bag text-3xl' ></i></a>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Header;