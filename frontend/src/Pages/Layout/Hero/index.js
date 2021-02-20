import React from 'react';
import { Link } from 'react-router-dom';
import MainHero from '../../../assets/img/main-hero.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url('${MainHero}')`,
      }}
    >
      <div className="container">
        <article className="content">
          <h4>VersusOne fez para você!</h4>
          <h3>
            Crie seu perfil na maior rede-social no mundo free-fire! Jogue
            campeonatos, monte seu perfil e sua line :)
          </h3>

          <Link to="/sign-up" className="btn btn-blue">
            Registrar agora!
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Hero;
