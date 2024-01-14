import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';

const NavigationPanel = () => {
    return (
        <div className='nav-container'>
            <Nav fill pills>
                <NavItem>
                    <NavLink href="/createOrder">Создать заказ</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Список заказов</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default NavigationPanel;
