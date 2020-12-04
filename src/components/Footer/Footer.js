import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <article className="howTo">
        <h3>How to</h3>
        {/* <li>Press enter to create a new item</li>
        <li>Delete an item by deleting its content or clicking the x-symbol on the right</li>
        <li>Complete the item by checking the left circle</li> */}
      </article>
      <article className="credits">
        <h3>Credits</h3>
        <p>Created with <a href="https://reactjs.org/">React.js</a> 💥</p>
      </article>
    </div>
  );
}

export default Footer;