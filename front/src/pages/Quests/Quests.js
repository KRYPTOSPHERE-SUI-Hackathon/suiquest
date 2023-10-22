import React from 'react';
import './quests.css';
import Navbar from '../../components/Navbar';

const Quests = () => {
  const levels = [
    {
      image: require('../../images/boat-level-1.png'),
      percentage: '100%',
      progressBar: 'progress-bar-one',
      title: 'Move: Beginner to Intermediate Smart Contracts',
      subTitle: 'Move ◈ Beginner ◈ Intermediate',
      description: 'Get involved in the exciting SUI Blockchain',
      link: 'level-one',
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
      <Navbar />

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
