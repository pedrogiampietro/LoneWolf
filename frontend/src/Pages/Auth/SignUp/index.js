import React from 'react';
import { Link } from 'react-router-dom';
import { SiGnuprivacyguard } from 'react-icons/si';

import Content from '../../Layout/Content';
import Button from '../../../components/Button';
import './styles.css';

const SignUp = () => {
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  return (
    <Content>
      {/* /SECTION-HEADER */}
      <article className="boxes">
        <div className="login-container text-c animated flipInX">
          <div>
            <h1 className="logo-badge text-whitesmoke">
              <span className="fa fa-user-circle" />
            </h1>
          </div>
          <h3 className="text-whitesmoke">Faça seu registro</h3>
          <p className="text-whitesmoke">Na maior plataforma de Free-Fire!</p>
          <div className="container-content">
            <form className="margin-t">
              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="nickname"
                  placeholder="Seu apelido"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-user" aria-hidden="true" />
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>

              <Button
                className="login100-form-btn"
                type="submit"
                disabled={loading ? true : false}
              >
                <SiGnuprivacyguard size={20} className="mr-3" />
                {loading ? 'Carregando... ' : 'Entrar'}
              </Button>
              <Link className="text-darkyellow" to="/sign-in">
                <span className="txt2">Já tem uma conta? Faça Login</span>
              </Link>
            </form>
            <p className="margin-t text-whitesmoke">
              <span> Versus One © 2021</span>
            </p>
          </div>
        </div>
      </article>
    </Content>
  );
};

export default SignUp;
