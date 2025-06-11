import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
      <p className="mb-6 text-gray-500">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded transition-colors duration-300"
      >
        Voltar para a Home
      </Link>
    </div>
  );
};

export default NotFound;
