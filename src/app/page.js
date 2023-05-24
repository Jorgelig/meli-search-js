import { Metadata } from 'next';
export const metadata = {
  title: 'Test práctico para Mercado Libre',
  description: 'La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados, y la descripción del detalle del producto.',
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Test práctico para Mercado Libre</h1>
      <h2>Utiliza la barra de búsqueda en la parte superior para mostrar el listado de productos.</h2>
    </main>
  )
}
