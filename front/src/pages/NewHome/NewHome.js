import React from 'react';
import './style.css';
// Import images
import logo from '../../images/SuiQuest_logo.png';
import boat from '../../images/boat-level-1.png';
import TypingEffectComponent from '../../components/typingEffect';
import Navbar from '../../components/Navbar';

class NewHome extends React.Component {

  render() {
    return (
      <div>
        <Navbar />

        <article id="description-accueil">
          <div>
            <TypingEffectComponent />
            <p>
              <strong>SuiQuest</strong> is an interactive programming platform<br /> 
              that teaches you how to write smart contracts<br />
              in <strong>Move</strong>, the language used by the <strong>Sui blockchain</strong>,<br /> 
              by completing quests throughout the learning journey.
            </p>
            <a className="navbar-button" href="quests">Start to learn</a>
          </div>

          <img className="bateau" src={boat} alt="Boat" />
        </article>
      </div>
    );
  }
}

export default NewHome;
