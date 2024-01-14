import { getOrder } from '../api';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actionCreators } from '../redux/actions';
import { ORDER_ITEMS } from '../constants/global';
import NavigationPanel from './Navigation';
import { Table } from 'reactstrap';

const OrderItem = () => {
    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();
    
    const handleFetchData = async (id) => {
        const order = await getOrder(id);
        dispatch(actionCreators.setOrder(order));
    }

    useEffect(() => {
        handleFetchData(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
    }, []);

    const contents = order === undefined
        ? <p><em>Загрузка...</em></p>
        : <div>
                <Table hover>
                    <tbody>
                        {
                            Object.keys(ORDER_ITEMS).map((key, index) => 
                                <tr key={index}>
                                    <td>{ORDER_ITEMS[key]}</td>
                                    <td>{order[key]}</td>
                                </tr>
                            )
                        }
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

export default OrderItem;