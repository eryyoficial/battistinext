import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl p-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-4 text-center">
          Seja Bem-vindo
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 text-center">
          Uma plataforma moderna, robusta e elegante para suas necessidades digitais.
        </p>
        <Link
          href="/services"
          className="inline-block px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-lg shadow-md hover:bg-indigo-500 transition"
        >
          Comece Agora
        </Link>
      </div>
      
    </main>
  );
}