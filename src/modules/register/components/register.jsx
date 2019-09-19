import React, { Component } from 'react';
import { Button, Input } from '../../../components';
import { Form, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  render() {
    return (
      <Form>
        <Form.Item>
          <Input
            size="large"
            className="input__large"
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="E-Mail"
          />
        </Form.Item>
      
        <Form.Item>
          <Input
            size="large"
            className="input__large"
            prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Ваше имя"
          />
        </Form.Item>

        <Form.Item>
          <Input
            size="large"
            className="input__large"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>

        <Form.Item>
          <Input
            size="large"
            className="input__large"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Повторить пароль"
          />
        </Form.Item>
      
        <Form.Item>
          <Button className='button__large' type='primary' size='large'>Зарегистрироваться</Button>
        </Form.Item>

        <Link className='register__link' to='/login'>Войти в аккаунт</Link>
      </Form>
    );
  }
}