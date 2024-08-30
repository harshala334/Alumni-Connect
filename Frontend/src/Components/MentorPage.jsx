//import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mentorshipImg from '../assets/img/mentorship.png';
import additionalImg from '../assets/img/mentorimage.png'; 
const MentorPage = () => {
  return (
    <PageWrapper>
      <IntroSection>
        <TextContent>
          <Title>Introducing Mentorship</Title>
          <Description>
            Mentorship is a transformative journey of guidance and wisdom, bridging experience with ambition.
            It empowers mentees to navigate complexities with clarity and purpose, fostering holistic development.
            Through the mentorship journey, individuals unravel their inherent capabilities, sculpting a tomorrow
            illuminated with promise and opportunity.
          </Description>
          <ButtonGroup>
            <StyledLink to="/becomeamentor">
              <MentorButton>Become a Mentor</MentorButton>
            </StyledLink>
            <StyledLink to="/becomeamentee">
              <MenteeButton>Become a Mentee</MenteeButton>
            </StyledLink>
          </ButtonGroup>
        </TextContent>
        <ImageContent>
        <img src={mentorshipImg} alt="Mentorship" />

        </ImageContent>
      </IntroSection>
      <HowItWorksSection>
        <HowItWorksTitle>How does it work?</HowItWorksTitle>
        <Steps>
          <Step>
            <StepNumber>Step 1 </StepNumber>
            <StepDescription>Register as mentee or mentor</StepDescription>
          </Step>
          <Step>
            <StepNumber>Step 2</StepNumber>
            <StepDescription>Find mentor and schedule a call</StepDescription>
          </Step>
          <Step>
            <StepNumber>Step 3</StepNumber>
            <StepDescription>Connect over Call</StepDescription>
          </Step>
        </Steps>
      </HowItWorksSection>
      <AdditionalImageSection>
        <img src={additionalImg} alt="Additional" />
      </AdditionalImageSection>
    </PageWrapper>
  );
};

export default MentorPage;

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const IntroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
`;
const AdditionalImageSection = styled.div`
  padding: 2rem;
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
    max-width: 80%; // Adjust as needed
    height: auto;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const MentorButton = styled.button`
  background-color: green;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
`;

const MenteeButton = styled(MentorButton)`
  background-color: white;
  color: green;
  border: 1px solid green;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ImageContent = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
  }
`;

const HowItWorksSection = styled.div`
  padding: 2rem;
  background-color: white;
  text-align: center;
`;

const HowItWorksTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Step = styled.div`
  max-width: 200px;
`;

const StepNumber = styled.h3`
  color: green;
  font-size: 1.5rem;
`;

const StepDescription = styled.p`
  font-size: 1.1rem;
`;
