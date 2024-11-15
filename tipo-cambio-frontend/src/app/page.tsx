
import Link from 'next/link';

export default function Home() {
    return (
        <main style={styles.container}>
            <h1 style={styles.heading}>Página Principal</h1>
            <Link href="/tipoCambio" style={styles.link}>
                Ver Tipo de Cambio
            </Link>
        </main>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#003366', // Azul oscuro como el color del Banco de Guatemala
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/7e/Banco_de_Guatemala_logo.svg")', // Logo del Banco de Guatemala como fondo
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '2.5rem',
        color: '#ffffff', // Blanco para resaltar el texto
        marginBottom: '20px',
    },
    link: {
        fontSize: '1.4rem',
        color: '#fff', // Blanco para el texto
        textDecoration: 'none',
        padding: '12px 24px',
        backgroundColor: '#1976d2', // Azul vibrante para el fondo del enlace
        borderRadius: '8px',
        transition: 'background-color 0.3s, transform 0.3s',
    },
};

// Agregar un hover para el enlace
styles.link[':hover'] = {
    backgroundColor: '#0d47a1', // Azul oscuro al pasar el cursor
    transform: 'scale(1.05)', // Efecto de agrandamiento
};
