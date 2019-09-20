import Login from '../components/login';
import { withFormik } from 'formik';

export default withFormik({
  validate: values => {
    let errors = {};

    if (!values.login) {
      errors.login = 'Введите логин';
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(values.login)
    ) {
      errors.login = 'Некорректный логин';
    }

    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!_$%@#£€*?&]{8,}$/.test(values.password)) {
      errors.password = 'Некорректный пароль';
    }

    return errors;
  },
})(Login);


