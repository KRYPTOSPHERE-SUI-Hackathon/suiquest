import React from 'react';
import './quests.css';

const Quests = () => {
  const levels = [
    {
      image: require('../../images/boat-level-1.png'),
      percentage: '100%',
      progressBar: 'progress-bar-one',
      title: 'Move: Beginner to Intermediate Smart Contracts',
      subTitle: 'Move ◈ Beginner ◈ Intermediate',
      description: 'Get involved in the exciting SUI Blockchain',
      link: 'quest',
    },
    {
      image: require('../../images/boat-level-2.png'),
      percentage: '35%',
      progressBar: 'progress-bar-two',
      title: 'Intermediate to Advanced Move Knowledge',
      subTitle: 'Move ◈ Intermediate ◈ Advanced',
      description: 'Deepen Your Understanding of SUI Blockchain',
    },
    {
      image: require('../../images/boat-level-3.png'),
      percentage: '0%',
      progressBar: 'progress-bar-three',
      title: 'Advanced Move: Get In-depth Knowledge',
      subTitle: 'Move ◈ Advanced',
      description: 'Become a Leader in the SUI Blockchain Community',
    },
  ];

  return (
    <>
      <nav>
        <a href="">
          <img className="navbar-logo" src={require('../../images/SuiQuest_logo.png')} alt="SuiQuest logo" />
        </a>
        <div className="navbar-right-side">
          <a className="forum" href="missions">Missions</a>
          <a className="forum" href="">Forum</a>
          <a className="navbar-button" href="quests">Start to learn</a>
        </div>
      </nav>

      {levels.map((level, index) => (
        <section key={index} id="level-one">
          <img className="level-one-image" src={level.image} alt={`Level ${index + 1}`} />
          <div>
            <div className="pourcentage-progress-bar">{level.percentage}</div>
            <div className="progress-bar-container">
              <div className="progress-bar-background"></div>
              <div className={level.progressBar}></div>
            </div>
            <h1>{level.title}</h1>
            <h2>{level.subTitle}</h2>
            <h3>{level.description}</h3>
            {
                level.link ? (
                    <a className="start" href={level.link}>Start</a>
                ) : (
                    <a className="start" onClick={()=>alert('Comming soon, you can already start first quest')}>Start</a>
                )
            }
            
          </div>
        </section>
      ))}
    </>
  );
};

export default Quests;
