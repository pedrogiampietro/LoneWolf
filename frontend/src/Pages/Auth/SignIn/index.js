import React from 'react';

import Content from '../../Layout/Content';
import '../styles.css';

const SignIn = () => {
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
          <h3 className="text-whitesmoke">Faça login</h3>
          <p className="text-whitesmoke">Na maior plataforma de Free-Fire!</p>
          <div className="container-content">
            <form className="margin-t">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="*****"
                  required
                />
              </div>
              <button type="submit" className="form-button button-l margin-b">
                Entrar
              </button>
              <a className="text-darkyellow" href="/forgot">
                <small>Perdeu sua senha?</small>
              </a>
              <p className="text-whitesmoke text-center">
                <small>Você ainda não tem uma conta?</small>
              </p>
              <a className="text-darkyellow" href="/sign-up">
                <small>Registrar</small>
              </a>
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

export default SignIn;
