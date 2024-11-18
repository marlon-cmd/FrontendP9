import React from 'react';

function Contacts() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Here's how you can get in touch with me.</p>
      <ul>
        <li><span style={{color: 'black' }}>Gmail: </span>
        <a href="mailto:marlon.personalemail@gmail.com">marlon.personalemail@gmail.com</a>
        </li>
          <li><span style={{color: 'black' }}>Contact Number: </span>
          <a href="tel: 09453864263"  style={{textDecoration: 'none', }}>09453864263</a></li>
          <li><span style={{color: 'black'}}>Facebook: </span><a href= "https://web.facebook.com/marlon.alba.758" target="blank" rel="noopener noreferrer">Marlon Alba</a></li>
      </ul>
    </div>
  );
}

export default Contacts;