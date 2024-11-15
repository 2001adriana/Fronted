'use client'
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
    if (error) return <div>Error: {error}</div>;
    if (!tipoCambio) return <div>Cargando...</div>;

    return (
        <div>
            <h1>Tipo de Cambio</h1>
            <p>Fecha: {tipoCambio.fecha}</p>
            <p>noTransaccion: {tipoCambio.noTransaccion}</p>
            <p>valor: {tipoCambio.valor}</p>
        </div>
    );
}
