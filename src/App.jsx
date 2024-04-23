import { useState } from 'react';
import './App.scss'
import michelleAvatarUrl from './assets/avatar-michelle.jpg';
import ShareIcon from "./assets/icon-share.svg?react";
import { SiFacebook } from '@icons-pack/react-simple-icons';
import { SiTwitter } from '@icons-pack/react-simple-icons';
import { SiPinterest } from '@icons-pack/react-simple-icons';

function App() {  
  const [isShareActive, setShareActive] = useState(false);

  return (
    <section>
      <div className="picture"></div>
      <div className="card">
        <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
        <div className="card__bottom-card">
          <div className="bottom-card__user">
            <img src={michelleAvatarUrl} alt="Michelle Appleton" />
            <div>
              <p>Michelle Appleton</p>
              <time dateTime="2020-06-28">28 Jun 2020</time>
            </div>
          </div>
          <div className="bottom-card__share">
            <div
              className={`share__btn${isShareActive ? ' btn--active' : ''}`}
              onClick={() => setShareActive(!isShareActive)}
            >
              <ShareIcon title='Share' />
            </div>
            <div className={`share__social${isShareActive ? ' social--active' : ''}`}>
              <span>SHARE</span>
              <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchallenge-article-preview-component.netlify.app">
                <SiFacebook title='My title' size={20} />
              </a>
              <a target="_blank" href="https://twitter.com/share?text=Frontend%20Mentor%20%7C%20Article%20preview%20component">
                <SiTwitter title='My title' size={20} />
              </a>
              <a target="_blank" href="https://www.pinterest.com/pin/create/button/?url=https://challenge-article-preview-component.netlify.app&media=https://raw.githubusercontent.com/Qu4k3/challenge-article-preview-component/main/starter_files/design/desktop-preview.jpg&description=Frontend%20Mentor%20%7C%20Article%20preview%20component">
                <SiPinterest title='My title' size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
