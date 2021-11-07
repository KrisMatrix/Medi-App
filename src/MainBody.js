import React from 'react';
import Headline from './Headline.js';
import MktBlockPhone from './MktBlockPhone.js';
import MktBlock from './MktBlock.js';
import ContactUs from './ContactUs.js';

function MainBody(props) {
  //console.log(props.name);
  if (props.name === 'home') {
    return (
      <React.Fragment>
      <Headline />
      <MktBlockPhone />
      <MktBlock />
      </React.Fragment>
    );
  }
  else if (props.name === 'contact-us') {
    return (
      <React.Fragment>
        <ContactUs />
      </React.Fragment>
    );
  }
  else if (props.name === 'meditate') {
    return (
      <h1> COMING SOON </h1>
    );
  }
}

export default MainBody;
