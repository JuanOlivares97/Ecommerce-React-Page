import React from "react";
import Image from "next/image";

// Definir los tipos para las propiedades
interface ProductoProps {
    nombre: string;
    precio: number;
    categoria: string;
    imagen: string;
}

const Producto: React.FC<ProductoProps> = ({ nombre, precio, categoria, imagen }) => {
    return (
        <div className="aspect-square bg-neutral-50 flex flex-col dark:bg-transparent">
            <Image
                width={256}
                height={256}
                src={imagen}
                alt=""
            />
            <div className="flex flex-col p-2 dark:text-slate-200">
                <strong>{nombre}</strong>
                <span>Precio: ${precio}</span>
                <span>Categoría: {categoria}</span>
            </div>
            <button className="bg-sky-600 border-black rounded-xl p-2 text-gray-50">
                Añadir al Carrito
            </button>
        </div>
    );
};

export default Producto;
