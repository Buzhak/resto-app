import './menu-list.scss';

import React, {Component} from 'react';
import {menuError, menuLoaded, menuRequested} from '../../actions';

import Error from '../error';
import MenuListItem from '../menu-list-item';
import Spiner from '../spinner'
import WithRestoService from '../hoc'
import { connect } from 'react-redux';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .catch(() => this.props.menuError());
    
    }
    render() {
        const {menuItems, loading, error} = this.props;
        if (error) {
            return <Error/>
        }
        if (loading) {  
            return <Spiner/>;
        }
        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>;
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch(menuLoaded(newMenu))
//         }
//     }
// }

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));