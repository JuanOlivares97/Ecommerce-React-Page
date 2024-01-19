import Image from 'next/image'

import Category from '@/components/Category'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Categorias Aqui */}

      <div id='categorys' className='flex justify-center flex-col'>
        <h1 className='text-center m-10 text-3xl'>Categorias</h1>
        <div className='flex space-x-12 '>
          <Category />
          <Category />
          <Category />
          <Category />
        </div>

      </div>

      {/* Productos más Vendidos */}

      <div id='products' className='flex justify-center flex-col'>
        <h1 className='text-center m-10 text-3xl'>Productos</h1>
        <div className='flex space-x-12 '>
          <Category />
          <Category />
          <Category />
          <Category />
        </div>

      </div>

      {/* Nuevos Ingresos */}

      <div id='products' className='flex justify-center flex-col'>
        <h1 className='text-center m-10 text-3xl'>Productos Nuevos</h1>
        <div className='flex space-x-12 '>
          <Category />
          <Category />
          <Category />
          <Category />
        </div>

      </div>

    </main>
  )
}
