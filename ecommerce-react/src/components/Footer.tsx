import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-slate-200 dark:bg-slate-900'>
            <div className='mx-auto max-w-7xl grid grid-cols-3 gap-8 py-16'>
                <ul className='mt-4 space-y-4 [&>li]:text-neutral-500'> 
                    <li className='text-sm'>Melpilla, Region Metropolitana</li>
                    <li className='text-sm'>+569 644096666</li>
                    <li className='text-sm'>ventas@contacto.cl</li>
                </ul>
            </div>
            <div className='mx-auto flex max-w-7xl flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row'>
                <span className='dark:text-slate-200 font-bold'>Copyright © 2024 Meniaz.cl, Inc.</span>
                <span className='dark:text-slate-200 font-bold'>Con ❤️ por ZLOWED</span>
            </div>
        </footer>
    );
};

export default Footer;