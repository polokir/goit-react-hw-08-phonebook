import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@mui/material';
import styles from '../RegisterForm/Register.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <form onSubmit={e=>handleSubmit(e)} action="">
        <Typography classes={{ root: styles.title }} variant="h5">
          Вхід
        </Typography>
        <TextField name='email' className={styles.field} label="E-Mail" fullWidth />
        <TextField name="password" type='password' className={styles.field} label="Пароль" fullWidth />
        <Button type='submit' size="large" variant="contained" fullWidth>
         Увійти
        </Button>
      </form>
    </Paper>
  );
};
export default LoginForm;
