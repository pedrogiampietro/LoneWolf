import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../actions/AccountActions';
import { getFormData } from '../../../helpers/FormData';
import Tilt from 'react-parallax-tilt';

import Content from '../../Layout/Content';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import LoginImage from '../../../assets/img/login.png';

import { FaSignInAlt } from 'react-icons/fa';
import './styles.css';

const SignIn = () => {
  const dispatch = useDispatch();

  const { account } = useSelector((state) => state.account);
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = getFormData(event);
    dispatch(signIn(data)).catch((err) => {
      const metadata = err.response.data.metadata;
      const message = err.response.data.message;
      const convertObjToArray = Object.entries(metadata).length;

      if (convertObjToArray === 0) {
        setError(message);
      } else {
        setError(metadata.error.name);
        setLoading(false);
      }
    });
  };

  return (
    <Content>
      {/* /SECTION-HEADER */}
      <article className="boxes">
        <div className="wrap-login100">
          <Tilt className="login100-pic js-tilt">
            <img src={LoginImage} alt="Login" />
          </Tilt>

          <form className="login100-form validate-form" onSubmit={handleSubmit}>
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
                name="password"
                placeholder="Password"
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <Error error={error} />

            <div className="container-login100-form-btn">
              <Button
                className="login100-form-btn"
                type="submit"
                disabled={loading ? true : false}
              >
                <FaSignInAlt size={20} className="mr-3" />
                {loading ? 'Carregando... ' : 'Entrar'}
              </Button>
            </div>
            <div className="text-center p-t-12">
              <Link className="txt1" to="#">
                Perdeu sua senha?
              </Link>
            </div>
            <div className="text-center p-t-136">
              <Link className="txt2" to="/sign-up">
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
