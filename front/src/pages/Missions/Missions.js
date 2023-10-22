import React from 'react';
import './missions.css'; 
import Navbar from '../../components/Navbar';

const Missions = () => {
  const Mission = ({ imgSrc, title, description, requirement }) => (
    <article className="missions">
      <img className="image-mission" src={imgSrc} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="requirement-NFT">{requirement}</div>
    </article>
  );

  const missions = [
    {
      imgSrc: require("../../images/releap_protocol.png"),
      title: "Releap Protocol",
      description: "The mission is to code a smart contract to ...",
      requirement: "NFT lvl3 required",
      link: "/releap-protocol"
    },
    {
      imgSrc: require("../../images/node_infra.png"),
      title: "Nodeinfra",
      description: "The mission is to code a smart contract to ...",
      requirement: "NFT lvl1 required",
      link: "/nodeinfra"
    },
    {
      imgSrc: require("../../images/chirp.webp"),
      title: "Chirp",
      description: "The mission is to code a smart contract to ...",
      requirement: "NFT lvl2 required",
      link: "/chirp"
    },
    {
      imgSrc: require("../../images/supra.webp"),
      title: "Supra",
      description: "The mission is to code a smart contract to ...",
      requirement: "NFT lvl3 required",
      link: "/supra"
    },
    {
      imgSrc: require("../../images/surf-wallet.webp"),
      title: "Surf Wallet",
      description: "The mission is to code a smart contract to ...",
      requirement: "NFT lvl5 required",
      link: "/surf-wallet"
    },
    // add more missions here as necessary
  ];

  return (
    <div>
      <Navbar />

      <section id="the-missions">
        {missions.map((mission, index) => (
          <a href={mission.link} key={index}>
            <Mission 
              imgSrc={mission.imgSrc} 
              title={mission.title} 
              description={mission.description} 
              requirement={mission.requirement} 
            />
          </a>
        ))}
      </section>
    </div>
  );
};

export default Missions;
