import React from 'react';
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

          <a
            href="https://themeforest.net/item/pixiehuge-esports-gaming-theme-for-clans-organizations/20175845?license=regular&open_purchase_for_item_id=20175845&ref=PixieSquad"
            className="btn btn-blue"
          >
            Registrar agora!
          </a>
        </article>
      </div>
    </section>
  );
};

export default Hero;
