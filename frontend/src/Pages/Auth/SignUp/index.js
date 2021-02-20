import React from 'react';
import { Link } from 'react-router-dom';

import Content from '../../Layout/Content';
import '../styles.css';

const SignUp = () => {
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
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Seu apelido"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Seu password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirme seu password"
                  required
                />
              </div>
              <button type="submit" className="form-button button-l margin-b">
                Registrar
              </button>
              <Link className="text-darkyellow" to="/sign-in">
                <small>Já tem uma conta? Faça Login</small>
              </Link>
            </form>
            <p className="margin-t text-whitesmoke">
              <small> Versus One © 2021</small>{' '}
            </p>
          </div>
        </div>
      </article>
    </Content>
  );
};

export default SignUp;
