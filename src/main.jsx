import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Gallery from "./components/Gallery.jsx"
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './utils/AuthContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </AuthContextProvider>,
)