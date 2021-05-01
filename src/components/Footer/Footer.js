import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <article className="howTo">
        <h3>How to use:</h3>
        <li>Press 'enter' in any of the boxes to create a new to-do-item</li>
        <li>Complete the item by checking the left circle</li>
        <li>Mark an item as important by checking the '!'-icon</li>
        <li>Delete an item by deleting its content or clicking the x-symbol on the right</li>
        
      </article>
      <article className="credits">
        <h3>Credits</h3>
        <p>Created with <a href="https://reactjs.org/">React.js</a> 💥</p>
      </article>
    </footer>
  );
}

export default Footer;