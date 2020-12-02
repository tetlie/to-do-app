import React from 'react';
// import logo from './logo.svg';
import './Footer.css';

function Footer() {
  return (
      <div className="Footer">
        <article className="howTo">
          <h3>How to</h3>
          <p>📄 Press enter to create a new item</p>
          <p>❌ Delete an item by deleting its content or clicking the x-symbol on the right</p>
          <p>✅ Complete the item by checking the left circle</p>
          </article>
        <article className="credits">
          <h3>Credits</h3>
          <p>Created by <a href="https://github.com/tetlie">Marius Tetlie</a> with <a href="https://reactjs.org/">React.js</a> 💥</p>
          </article>
      </div>
  );
}

export default Footer;