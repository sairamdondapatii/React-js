import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DarkModeContextProvider from './Components/Context/DarkModeContextProvider.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import{ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
 
    <DarkModeContextProvider>
      <QueryClientProvider client={queryClient}>
        <App/>
        
      </QueryClientProvider>
    </DarkModeContextProvider>
)
