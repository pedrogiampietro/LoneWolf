import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewTeam } from '../../../actions/TeamActions';

import Content from '../../Layout/Content';
import Button from '../../../components/Button';
import NoShield from '../../../assets/img/no-shield.svg';
import NoAvatar from '../../../assets/img/no-avatar.png';
import './styles.css';

const CreateTeam = () => {
  const dispatch = useDispatch();
  const { team } = useSelector((state) => state.team);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [logo, setLogo] = React.useState('');
  const [LogoPreview, setLogoPreview] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSelectImages = (event) => {
    if (!event.target.files) {
      return;
    }

    const selectedLogo = event.target.files[0];
    setLogo(selectedLogo);
    const preview = URL.createObjectURL(selectedLogo);
    setLogoPreview(preview);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('logo', logo)

    createNewTeam(formData);
  }

  const date = new Date().toLocaleDateString();

  return (
    <Content>
      <div className="container split-flex">
        <section id="single-page">
          {/* /CONTENT */}
          <article className="comments">
            <div id="respond" className="comment-respond">
              <h3
                id="reply-title"
                className="comment-reply-title"
                aria-hidden="true"
              />
              <h3>Criar seu Time</h3>
              <small>
                <a
                  rel="nofollow"
                  id="cancel-comment-reply-link"
                  href="/pixiehuge/purple-haste/scream-now-we-know-were-capable-of-winning/#respond"
                  style={{ display: 'none' }}
                >
                  Cancel Reply
                </a>
              </small>
              <form onSubmit={handleSubmit}>
                <p>
                  1. Você não pode reproduzir o conteúdo de outras equipes
                  listadas ou não na Playerlink.
                  <br /> 2. Após criar um time, você não poderá participar de
                  outro.
                </p>

                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Nome*"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input100"
                  type="text"
                  name="description"
                  placeholder="Descrição*"
                  onChange={(e) => setDescription(e.target.value)}
                />

                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    accept="image/*"
                    onChange={handleSelectImages}
                  />
                </div>

                <div className="container-login100-form-btn">
                  <Button
                    className="login100-form-btn"
                    type="submit"
                    disabled={loading ? true : false}
                  >
                    {loading ? 'Carregando... ' : 'Registrar'}
                  </Button>
                </div>
              </form>
            </div>
            {/* #respond */}
          </article>
          {/* #comments */}
        </section>
        {/* /SINGLE-PAGE */}
        <aside>
          <article>
            <ul className="widget">
              <li>
                {LogoPreview === null || LogoPreview === '' ? (
                  <img
                    className="img-fluid noShield"
                    src={NoShield}
                    alt="NoShield"
                  />
                ) : (
                  <img
                    className="img-fluid noShield mr-3"
                    src={LogoPreview}
                    alt="NoShield"
                  />
                )}

                <div className="details">
                  <span className="categories">
                    <span className="category"></span>
                  </span>
                  <Link to="#" className="title">
                    <h3>{name}</h3>
                  </Link>
                  <span className="badge primary">{description}</span>
                  <span className="date">{name ? date : null}</span>
                </div>
              </li>

              <li>
                <img
                  className="img-fluid noShield"
                  src={NoAvatar}
                  alt="NoAvatar"
                />
                <div className="details ml-2">
                  <span className="categories">
                    <span className="category">Owner</span>
                  </span>
                  <Link to="#" className="title">
                    Nick Leader
                  </Link>
                  <span className="date">Archievements</span>
                </div>
              </li>
            </ul>
          </article>
        </aside>
      </div>
    </Content>
  );
};

export default CreateTeam;
