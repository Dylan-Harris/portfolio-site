import React from 'react';
import { DiRuby, DiJava, DiReact, DiPostgresql, DiJenkins } from 'react-icons/di';
import { FaJenkins } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I have worked with many technologies ranging from backend to frontend frameworks as well as continuous integration and continuous delivery applications like Jenkins
  </SectionText>
  <List>
    <ListItem>
      <DiRuby size='3rem' />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Ruby and Ruby-On-Rails
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiJava size='3rem' />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Java and SpringBoot
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiReact size='3rem' />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          JavaScript, Typescript, and React
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiPostgresql size='3rem' />
      <ListContainer>
        <ListTitle>Database</ListTitle>
        <ListParagraph>
          Experience with <br />
          Postgresql
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FaJenkins size='3rem' />
      <ListContainer>
        <ListTitle>CI/CD</ListTitle>
        <ListParagraph>
          Experience with <br />
          Jenkins
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;
