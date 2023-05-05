import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { number6, regexValidation } from '../services/consts';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validateEmail = (mail) => (!!regexValidation.test(mail));

  const { history } = props;

  //   const handleSubmit = () => {
  //     history.push('/meals');
  //     localStorage.setItem('user', email);
  //   };

  const isButtonValid = password.length > number6 && validateEmail(email);

  return (
    <main className="loginPage">
      <div className="formLogin">
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          placeholder="Digite seu email"
        />

        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          placeholder="Digite sua senha"
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !isButtonValid }
          onClick={ () => {
            history.push('/meals');
            localStorage.setItem('user', JSON.stringify({ email }));
          } }
        >
          Logar
        </button>
      </div>
    </main>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
