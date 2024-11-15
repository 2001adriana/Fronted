'use client';
import { useEffect, useState } from 'react';

// Definimos el tipo de datos que vamos a recibir desde la API
type TipoCambio = {
    fecha: string;
    noTransaccion: string;
    valor: number;
};

export default function TipoCambioPage() {
    const [tipoCambio, setTipoCambio] = useState<TipoCambio | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Función para obtener los datos de tipo de cambio desde el backend
        const fetchTipoCambio = async () => {
            try {
                const response = await fetch('http://localhost:8080/tipoCambioDia');

                if (!response.ok) {
                    throw new Error('Error al obtener el tipo de cambio');
                }
                const data: TipoCambio = await response.json();
                setTipoCambio(data);
            } catch (err) {
                setError((err as Error).message);
            }
        };
        fetchTipoCambio();
    }, []);

    // Mostramos el estado del error si existe, o los datos de tipo de cambio
    if (error) return <div className="text-red-500 text-center p-4">Error: {error}</div>;
    if (!tipoCambio) return <div className="text-gray-500 text-center p-4">Cargando...</div>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative">
                {/* Imagen del Banco de Guatemala dentro del recuadro */}
                <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg">
                    <img
                        src="https://lahora.gt/wp-content/uploads/sites/5/2024/06/Banco-de-Guatemala.jpeg" // Aquí puedes poner la URL de la imagen del Banco de Guatemala
                        alt="Banco de Guatemala"
                        className="w-16 h-16 object-contain"
                    />
                </div>
                
                {/* Imagen de fondo */}
                <img src="https://lahora.gt/wp-content/uploads/sites/5/2024/06/Banco-de-Guatemala.jpeg" alt="Background" className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30" />
                
                {/* Contenido central */}
                <div className="relative z-10">
                    {/* Título con color negro */}
                    <h1 className="text-3xl font-semibold text-black mb-6 text-center tracking-wide">Tipo de Cambio</h1>
                    
                    {/* Contenedores separados para cada sección */}
                    <div className="grid grid-cols-1 gap-4 mb-6">
                        {/* Tarjeta para la Fecha */}
                        <div className="bg-indigo-600 p-4 rounded-lg shadow-md text-white">
                            <h2 className="font-semibold text-lg">Fecha</h2>
                            <p className="mt-2 text-xl">{tipoCambio.fecha}</p>
                        </div>

                        {/* Tarjeta para el No. Transacción */}
                        <div className="bg-green-600 p-4 rounded-lg shadow-md text-white">
                            <h2 className="font-semibold text-lg">No. Transacción</h2>
                            <p className="mt-2 text-xl">{tipoCambio.noTransaccion}</p>
                        </div>

                        {/* Tarjeta para el Valor */}
                        <div className="bg-yellow-600 p-4 rounded-lg shadow-md text-white">
                            <h2 className="font-semibold text-lg">Valor</h2>
                            <p className="mt-2 text-xl">{tipoCambio.valor}</p>
                        </div>
                    </div>

                    {/* Botón de acción */}
                    <div className="mt-6 text-center">
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200">
                            Refrescar Tipo de Cambio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
