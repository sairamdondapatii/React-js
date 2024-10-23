import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DarkModeContextProvider from './Components/Context/DarkModeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
 
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
)
