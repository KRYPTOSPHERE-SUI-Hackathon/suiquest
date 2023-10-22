import React from 'react';
import './releap-protocol.css';
import Navbar from '../../components/Navbar';

function ReleapProtocol() {
  return (
    <div>
      
      <Navbar />

      {/* Releap protocol */}
      <div className="background-mission">
        <div className="releap-protocol-mission">
          <img src={require('../../images/releap_protocol.png')} alt="Releap Protocol" />
          <div>
            <h1>Project Description</h1>
            <p>Releap Protocol is a decentralized social graph where creators can publish their content as a set of NFTs to be discovered, enjoyed, and traded on chain</p>
            <p>For more information about Releap Protocol, you can go on <a href="https://releap.xyz/">releap.xyz</a></p>
          </div>
        </div>

        <div className="description-activity">
          <h1>Mission Description</h1>
          <p>
            The mission is to write several move smart contract to ...<br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis minus, obcaecati officia rem, fugit pariatur, nihil rerum maiores nobis dolorem error assumenda tempore est reiciendis dolores tempora necessitatibus minima!
          </p>

          <div className="key-point-mission">
            <div className="calendar">
              <img src={require('../../images/blue-calendar.webp')} alt="calendar" />
              <h2>3 weeks</h2>
            </div>
            <div className="hourly-paid">
              <img src={require('../../images/fast.png')} alt="money-per-hour" />
              <h2>$50.00 / hour</h2>
            </div>
            <div className="required">
              <img src={require('../../images/requirement.webp')} alt="requirement" />
              <h2>NFT lvl3</h2>
            </div>
          </div>

          <div className="activity-on-this-mission">
            <h1>Activity on this job</h1>
            <p>Proposals : <strong>16</strong></p>
            <p>View on the mission : <strong>124</strong></p>
          </div>

          <a href="#"><div className="apply-button">Apply now</div></a>
        </div>
      </div>
    </div>
  );
}

export default ReleapProtocol;
