import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'primeicons/primeicons.css';
import { BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/projeto_front-end">
        <App />
    </BrowserRouter>
)