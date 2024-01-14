import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OrderForm from './components/OrderForm';
import OrdersTable from './components/OrdersTable';
import OrderItem from './components/OrderItem';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/createOrder" element={<OrderForm/>}/>
                    <Route path="/" element={<OrdersTable/>}/>
                    <Route path="/:id" element={<OrderItem/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;