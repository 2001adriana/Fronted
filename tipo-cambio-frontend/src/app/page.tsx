
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <h1>Página Principal</h1>
            <Link href="/tipoCambio">
                Ver Tipo de Cambio
            </Link>
        </main>
    );
}
