import { UserProvider } from "./context/UserProvider"
import { AppRouter } from './routers/AppRouter'
function App() {
  
  return (
    <>
    <header className="bg-dark">
      <p className="text-white">Practica SPA </p>
    </header>
    <UserProvider>
     <AppRouter/>
     </UserProvider>
     <footer className="bg-dark">
      <p>Txema , Carlos , Rafael - 2023</p>
     </footer>
    </>
  )
}
export default App