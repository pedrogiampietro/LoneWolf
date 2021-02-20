import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

import Content from '../../Layout/Content';
import LoginImage from '../../../assets/img/login.png';
import './styles.css';

const SignIn = () => {
  return (
    <Content>
      {/* /SECTION-HEADER */}
      <article className="boxes">
        <div className="wrap-login100">
          <Tilt className="login100-pic js-tilt">
            <img src={LoginImage} alt="Login" />
          </Tilt>

          <form className="login100-form validate-form">
            <span className="login100-form-title">Área de Membros</span>
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
                name="pass"
                placeholder="Password"
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>
            <div className="text-center p-t-12">
              <Link className="txt1" to="#">
                Perdeu sua senha?
              </Link>
            </div>
            <div className="text-center p-t-136">
              <Link className="txt2" to="#">
                Ainda não tem uma conta? Criar agora
              </Link>
            </div>
          </form>
        </div>
      </article>
    </Content>
  );
};

export default SignIn;
