//import React from 'react'
import styled from 'styled-components';

const MenteeRegistrationForm = () => {
  return (
    <FormWrapper>
      <FormTitle>Become a Mentee</FormTitle>
      <FormDescription>
        Fill out this form to register yourself as a mentee. Once you register as a mentee, a list of mentors will be curated for you. You can choose your mentor, schedule a call and discuss your points with them.
      </FormDescription>
      <Form>
        <FormField>
          <Label>Your Name *</Label>
          <Input type="text" name="name" required />
        </FormField>
        <FormField>
          <Label>Which of the following Stream you belong to: *</Label>
          <Input type="text" name="stream" placeholder="Ex. I am a Student or I am Software Developer at Accenture." required />
        </FormField>
        <FormField>
  <Label>Which problem are you currently facing? (Any Three) *</Label>
  <CheckboxGroup style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px', alignItems: 'center' }}>
    <span>Need help with academic related doubts</span>
    <Checkbox
      name="problems"
      value="Need help with academic related doubts"
    />

    <span>Need help in academic related projects</span>
    <Checkbox
      name="problems"
      value="Need help in academic related projects"
    />

    <span>Need help and guidance to develop technical skills with regards to my field of studies</span>
    <Checkbox
      name="problems"
      value="Need help and guidance to develop technical skills with regards to my field of studies"
    />

    <span>Need help with technology (programming languages, software)</span>
    <Checkbox
      name="problems"
      value="Need help with technology (programming languages, software)"
    />

    <span>Need help to get internship</span>
    <Checkbox
      name="problems"
      value="Need help to get internship"
    />

    <span>Need help for higher studies choices</span>
    <Checkbox
      name="problems"
      value="Need help for higher studies choices"
    />

    <span>Other</span>
    <Checkbox
      name="problems"
      value="Other"
    />
  </CheckboxGroup>
</FormField>

        <FormField>
          <Label>Please specify *</Label>
          <Input type="text" name="specify" />
        </FormField>
        <FormField>
          <Label>Mentors from which domains would you prefer to connect with?</Label>
          <Input type="text" name="domains" placeholder="For ex : Information Tech, Advertisement, Medical, Education" />
        </FormField>
        <FormField>
  <Label>What will be the most comfortable way for you to connect with your mentors? *</Label>
  <CheckboxGroup style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px', alignItems: 'center' }}>
    <span>Video call</span>
    <Checkbox type="checkbox" name="connection" value="Video call" />

    <span>Voice Call</span>
    <Checkbox type="checkbox" name="connection" value="Voice Call" />

    <span>Text messaging</span>
    <Checkbox type="checkbox" name="connection" value="Text messaging" />

    <span>Any of the above</span>
    <Checkbox type="checkbox" name="connection" value="Any of the above" />

    <span>Other</span>
    <Checkbox type="checkbox" name="connection" value="Other" />
  </CheckboxGroup>
</FormField>

        <FormField>
          <Label>Frequency of Mentoring *</Label>
          <Input type="text" name="frequency" placeholder="e.g., Weekly" />
        </FormField>
        <FormField>
          <Label>Detail Description about your requirement *</Label>
          <Textarea name="description" rows="5" placeholder="As I'm engineering undergrad looking for internship opportunities, I want help in resume review, interview preparation guide, information about from where can I apply for internships etc." required />
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default MenteeRegistrationForm;

// Styled Components
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  max-width: 800px;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const FormDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;


const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0;
`;


const SubmitButton = styled.button`
  background-color: green;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`;
