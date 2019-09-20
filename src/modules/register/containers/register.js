import { withFormik } from 'formik';
import Register from '../components/register';

export default withFormik({
  mapPropsToValues: () => ({email: ''}),
  validate: values => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Введите email';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Некорректный email';
    }

    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!_$%@#£€*?&]{8,}$/.test(values.password)) {
      errors.password = 'Некорректный пароль';
    }

    return errors;
  },
  displayName: 'RegisterForm'
})(Register);

