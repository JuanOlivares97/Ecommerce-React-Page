'use client'
import Category from '@/components/Category'
import Carrusel from '@/components/Carrusel'
import Producto from '@/components/Producto'


export default function Home() { 
    return (
      <main className="bg-white dark:bg-slate-900">
        {/* Categorias Aqui */}

        <Carrusel />

        <div id='categorys' className='flex justify-center flex-col'>
          <h1 className='text-center m-10 text-3xl dark:text-white'>Categorias</h1>
          <div className='flex space-x-12 '>
            <Category />
          </div>

        </div>

        {/* Productos más Vendidos */}

        <div id='products' className='flex justify-center flex-col'>
          <h1 className='text-center m-10 text-3xl dark:text-white'>Productos</h1>
          <div className='flex space-x-12 '>
            <Producto categoria='Pie'
            imagen='/img/prueba.webp'
            nombre='Zapatilla azul'
            precio={1990}
            key={1}/>
          </div>

        </div>

        {/* Nuevos Ingresos */}

        <div id='new-products' className='flex justify-center flex-col'>
          <h1 className='text-center m-10 text-3xl dark:text-white'>Productos Nuevos</h1>
          <div className='flex space-x-12 '>
            {/* Contenido de los nuevos productos */}
          </div>
        </div>
      </main>
    )
  }