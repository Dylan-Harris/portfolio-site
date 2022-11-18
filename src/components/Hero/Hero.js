import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I value learning new technologies everyday and growing both as a developer and a person day by day.
      </SectionText>
      {/* <Button onClick={() => window.location = }>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;