import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { getOrders } from '../api';
import { ORDER_ITEMS } from '../constants/global';
import { Table } from 'reactstrap';
import NavigationPanel from './Navigation';

const OrdersTable = () => {    
    const ordersList = useSelector((state) => state.ordersList);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFetchData = async () => {
        const orders = await getOrders();
        dispatch(actionCreators.setOrdersList(orders));
    }

    useEffect(() => {
        handleFetchData();
    }, []);
    
    const contents = ordersList == []
        ? <p><em>Загрузка...</em></p>
        : <div>
            <h1>Все заказы</h1>
            <Table hover>
                <thead className="thead-dark">
                    <tr>
                        {Object.values(ORDER_ITEMS).map((value, index) => (
                            <th scope="col" key={index}>{value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {ordersList.map(order =>
                    <tr key={order.id} onClick={() => {
                        navigate(`./${order.id}`);}}>
                        {Object.values(order).map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
        
    return (
        <div className='container'>
            <NavigationPanel/>
            {contents}
        </div>
    )
};

export default OrdersTable;