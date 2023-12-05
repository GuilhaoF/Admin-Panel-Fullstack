'use client'; //error.tsxprecisa ser um componente cliente.
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          () => reset() //reset: Esta é uma função para redefinir o limite de erro. Quando executada, a função tentará renderizar novamente o segmento da rota.
        }
      >
        Try again
      </button>
    </main>
  );
}