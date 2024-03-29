import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { connect } from 'react-redux';
import { userActions } from 'redux/actions';

import './app-menu.scss';

const AppMenu = props => {
  const menuOptions = (
    <Menu style={{width: '200px'}}>
      <Menu.Item onClick={props.logout}>
        <span>
          Выход&nbsp;
          <Icon type='logout' />
        </span>
      </Menu.Item>
    </Menu>
  )
  
  return (
    <div className="app__menu">
       <span className="app__menu--username">User</span>
        <span className="app__menu--avatar"></span>
        <Dropdown overlay={menuOptions} trigger={['click']}>
          <Icon type="down"/>
        </Dropdown>
    </div>
  )
}

export default connect(
  null,
  (dispatch) => {
    return {
      logout: () => dispatch(userActions.logoutUser())
    }
  }
)(AppMenu);