import { UserProvider } from "./context/UserProvider";
import { AppRouter } from './routers/AppRouter';
function App() {

  return (
    <>
      <header className="p-4 bg-dark text-dark text-end h2">
        <p className="text-white">Practica SPA </p>
      </header>
      <main className='text-dark container my-5'>
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </main>
      <footer className="p-2 bg-dark text-dark text-center">
        <p className='text-white'>Txema-Carlos-Rafael - Devs2023</p>
      </footer>
    </>
  );
};

export default App;