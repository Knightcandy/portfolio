import React from 'react';

import About from '../About/About';
import Education from '../Education/Education';
import Skill from '../Skill/Skill';
import Expertise from '../Expertise/Expertise';
import Experience from '../Experience/Experience';

const Content = () => {
  return (
      <div className="content">
          <About/>
          <Education/>
          <Skill/>
          <Expertise/>
          <Experience/>
      </div>
  )
}

export default Content;
