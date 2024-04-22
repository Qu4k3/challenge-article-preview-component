import './App.scss'
import michelleAvatarUrl from './assets/avatar-michelle.jpg';
import ShareIcon from "./assets/icon-share.svg?react";
import { SiFacebook } from '@icons-pack/react-simple-icons';
import { SiTwitter } from '@icons-pack/react-simple-icons';
import { SiPinterest } from '@icons-pack/react-simple-icons';

function App() {

  return (
    <section>
      <div className="picture"></div>
      <div className="card">
        <h1>Shift the overall look and feel by adding these wonderful
          touches to furniture in your home</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I’ve got some simple tips
          to help you make any room feel complete.</p>
        <div className="card__bottom-card">
          <div className="bottom-card__user">
            <img src={michelleAvatarUrl} alt="Michelle Appleton" />
            <div>
              <p>Michelle Appleton</p>
              <time dateTime="2020-06-28">28 Jun 2020</time>
            </div>
          </div>
          <div className="bottom-card__share">
            {/*<SiFacebook title='My title' size={24} />
            <SiTwitter title='My title' size={24} />
  <SiPinterest title='My title' size={24} />*/}
            <div className='share'>
              <ShareIcon title='Share' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
