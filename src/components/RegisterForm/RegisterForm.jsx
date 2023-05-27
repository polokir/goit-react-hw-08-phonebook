import { register } from 'redux/auth/operations';
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Register.module.css';
import { Button, Paper, TextField, Typography } from '@mui/material';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          Створення акаунта
        </Typography>
        <TextField name='name' className={styles.field} label="Повне ім'я" fullWidth />
        <TextField name='email' type='email' className={styles.field} label="E-Mail" fullWidth />
        <TextField name="password" type='password' className={styles.field} label="Пароль" fullWidth />
        <Button type='submit' size="large" variant="contained" fullWidth>
          Зареєструватися
        </Button>
      </form>
    </Paper>
  );
};

export default RegisterForm;
