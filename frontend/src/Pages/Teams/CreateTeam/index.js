import React from 'react';
import { Link } from 'react-router-dom';

import Content from '../../Layout/Content';
import NoShield from '../../../assets/img/no-shield.svg';
import NoAvatar from '../../../assets/img/no-avatar.png';
import './styles.css';

const CreateTeam = () => {
  return (
    <Content>
      <div className="container split-flex">
        <section id="single-page">
          {/* /CONTENT */}
          <article className="comments">
            <div id="respond" className="comment-respond">
              <h3 id="reply-title" className="comment-reply-title" />
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
              <form
                action="http://themes.pixiesquad.com/pixiehuge/purple-haste/wp-comments-post.php"
                method="post"
                id="commentform"
                className="comment-form"
              >
                <p>
                  1. Você não pode reproduzir o conteúdo de outras equipes
                  listadas ou não na Playerlink.
                  <br /> 2. Após criar um time, você não poderá participar de
                  outro.
                </p>

                <input type="text" name="name" placeholder="Nome*" />
                <input
                  type="text"
                  name="description"
                  placeholder="Descrição*"
                />

                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  />
                </div>
              </form>{' '}
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
                <img
                  className="img-fluid noShield"
                  src={NoShield}
                  alt="NoShield"
                />
                <div className="details">
                  <span className="categories">
                    <span className="category"></span>
                  </span>
                  <Link to="#" className="title">
                    NAME TEAM
                  </Link>
                  <span className="date">Created in 21/02/2021</span>
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
