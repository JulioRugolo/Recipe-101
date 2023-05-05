import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { number0, number6 } from '../services/consts';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [buttonDisabled, setButtonDisabled] = useState(true);
  const isButtonValid = password.length > number6 && email.length > number0;

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
          onClick={ useHistory('/recipes') }
        >
          Logar
        </button>
      </div>
    </main>
  );
}

export default Login;
