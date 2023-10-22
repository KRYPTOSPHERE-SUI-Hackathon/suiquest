import React from 'react';
import './level-one.css';
import Quest from '../Quest/Quest';

const LevelOne = () => {
  return (
    <div className="explication-exercice">
      <section className="text-ide">
      <article>
          <h1>Chapter 1: Minting Your Inaugural NFT</h1>
          <p>In this initial chapter, we'll delve into the fundamental ideas and resources essential for grasping the Sui protocol. You'll uncover why developers and businesses are opting to construct their digital foundations on Sui, and gain insight into how ownership work within the Sui ecosystem, which results in a magnificent boat that belongs to you.</p>
          <p>In Sui, it's imperative to recognize that everything assumes the form of an NFT (Non-Fungible Token). Objects are inherently unique, non-interchangeable, and firmly owned. As such, a straightforward act of publishing a specific type is sufficient to establish ownership.</p>
          <h2>What Constitutes an Address?</h2>
          <p>An address is a string of 64 characters, much like this:</p>
          <p>0x03f5d9d5bb98846da7fca7fb63cb896db08fb38bbe601c62e986524d85543479</p>
          <p>Think of it as your mailbox at your very own abode.</p>
          <h2>Understanding Ownership Mechanisms</h2>
          <p>Ownership within Sui operates on the premise of an 'owner' field for each object, dictating how that particular object is possessed. In the world of Sui Move, ownership can be classified into four distinct types:</p>
          <p>Owned</p>
          <p>Owned by an address (individual ownership)</p>
          <p>Owned by another object (for instance, a boatyard owning multiple boats)</p>
          <p>Shared</p>
          <p>Shared immutably (accessible to all but unalterable, much like a boat tool shop, right?)</p>
          <p>Shared mutably</p>
      
          <p>Don't worry; we'll revisit these concepts in greater detail later on.</p>
          <p>Now, it's your turn. Your next step is to create your inaugural smart contract to craft a stunning blue boat, employing the array of tools at your disposal.</p>
          <p>Alright, let's put the playtime aside. When you're prepared to move forward, click "Next Chapter" below, and let's dive into the journey of understanding the evolution of an NFT with the power of Sui Move !</p>
      </article>
        
        <article>
          <div className="remplacer-par-ide">
            <Quest />
          </div>
        </article>
      </section>

      <section className="bouton-next">
        <div className="verify-code" style={{cursor: 'pointer'}}>Verify the code</div>
        <div className="back-bouton">Back</div>
        <h2>1/12</h2>
        <div className="next-bouton">Next</div>
      </section>
    </div>
  );
};

export default LevelOne;
