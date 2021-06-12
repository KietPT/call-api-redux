import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
    {
        name:'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name:'Quản lý sản phẩm',
        to: '/product-list',
        exact: false
    },
];

const MenuLink = ({label,to,activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                );
            }}
        />
    );
}

class Menu extends Component {
    render() {

        return (
          <div>
            <div className="navbar navbar-default">
                <a className="navbar-brand">Call API</a>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
                </div>
          </div>         
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu,index) => <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />)
        }
        return result;
    };

}

export default Menu;
