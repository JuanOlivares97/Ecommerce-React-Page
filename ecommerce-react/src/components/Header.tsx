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
                            src="https://fakestoreapi.com/icons/logo.png"
                            alt="" />
                    </a>
                </div>
                <div className='flex content-between'>
                    <a href="#">Inicio</a>
                    <a href="#">Categorias</a>
                    <a href="#">Contacto</a>
                    <a href="#">Redes</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;