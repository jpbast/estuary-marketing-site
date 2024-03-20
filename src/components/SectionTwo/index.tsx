import * as React from 'react';
import SectionTwoHeader from './SectionTwoHeader';
import SectionTwoTiles from './SectionTwoTiles';
import SectionTwoHero from './SectionTwoHero';

const SectionTwo = () => {
  return (
    <div className="section-two">
      <SectionTwoHeader />
      <SectionTwoHero />
      <SectionTwoTiles />
    </div>
  );
};

export default SectionTwo;
