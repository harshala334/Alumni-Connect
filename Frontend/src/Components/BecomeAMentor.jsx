import { useState } from 'react';
import styled from 'styled-components';

const BecomeAMentor = () => {
  const [formData, setFormData] = useState({
    name: '',
    stream: '',
    topics: [],
    targetYear: '',
    domains: '',
    skills: '',
    frequency: '',
    preferredTime: '',
    mentoringMethod: '',
    message: '',
    benefits: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? [...prevData[name], value] : prevData[name].filter(v => v !== value)
      }));
    } else if (type === 'select-multiple') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: Array.from(e.target.selectedOptions, option => option.value)
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Your Name *</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="stream">Which stream you belong to? *</Label>
          <Select
            id="stream"
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="Engineering/Technology">Engineering/Technology</option>
            {/* Add more options as needed */}
          </Select>
        </FormField>
        <FormField>
          <Label>On what topics do you think you can mentor? [Any Three] *</Label>
          <CheckboxGroup>
            <label>
              <Input
                type="checkbox"
                name="topics"
                value="Academic related doubts"
                checked={formData.topics.includes('Academic related doubts')}
                onChange={handleChange}
              />
              Academic related doubts
            </label>
            <label>
              <Input
                type="checkbox"
                name="topics"
                value="Academic related projects"
                checked={formData.topics.includes('Academic related projects')}
                onChange={handleChange}
              />
              Academic related projects
            </label>
            <label>
              <Input
                type="checkbox"
                name="topics"
                value="Guidance to develop technical skills with regards to my field of study"
                checked={formData.topics.includes('Guidance to develop technical skills with regards to my field of study')}
                onChange={handleChange}
              />
              Guidance to develop technical skills with regards to my field of study
            </label>
            <label>
              <Input
                type="checkbox"
                name="topics"
                value="Guidance to develop technical skills with regards to my field of study"
                checked={formData.topics.includes('Guidance to develop technical skills with regards to my field of study')}
                onChange={handleChange}
              />
              Technology support/ guidance (programming languages, software)
            </label>
            <label>
              <Input
                type="checkbox"
                name="topics"
                value="Guidance to develop technical skills with regards to my field of study"
                checked={formData.topics.includes('Guidance to develop technical skills with regards to my field of study')}
                onChange={handleChange}
              />
              Internship support/guidance
            </label>
            <label>
              <Input
                type="checkbox"
                name="topics"
                value="Guidance to develop technical skills with regards to my field of study"
                checked={formData.topics.includes('Guidance to develop technical skills with regards to my field of study')}
                onChange={handleChange}
              />
              Guidance for Higher studies choices
            </label>
            <label>
              <Input
                type="checkbox"
                name="topics"
                value="Guidance to develop technical skills with regards to my field of study"
                checked={formData.topics.includes('Guidance to develop technical skills with regards to my field of study')}
                onChange={handleChange}
              />
              Other
            </label>
            {/* Add more topics as needed */}
          </CheckboxGroup>
        </FormField>
        <FormField>
          <Label htmlFor="targetYear">Who would you like to mentor? *</Label>
          <Select
            id="targetYear"
            name="targetYear"
            value={formData.targetYear}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </Select>
        </FormField>
        <FormField>
          <Label htmlFor="domains">Mention domains in which you can mentor others *</Label>
          <Input
            type="text"
            id="domains"
            name="domains"
            value={formData.domains}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="skills">Mention your skills *</Label>
          <Input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="frequency">Frequency of mentoring *</Label>
          <Select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="Weekly">Weekly</option>
            <option value="Fortnightly">Fortnightly</option>
            <option value="Monthly">Monthly</option>
            {/* Add more options as needed */}
          </Select>
        </FormField>
        <FormField>
          <Label htmlFor="preferredTime">What is your preferred time for a mentoring session? *</Label>
          <Select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="<30 mins">&lt;30 mins</option>
            <option value="30 mins - 1 hour">30 mins - 1 hour</option>
            <option value="1 hour - 1.5 hour">1 hour - 1.5 hour</option>
            <option value="Others">Others</option>
          </Select>
        </FormField>
        <FormField>
          <Label htmlFor="mentoringMethod">What will be the most comfortable way in which you can mentor others? *</Label>
          <Select
            id="mentoringMethod"
            name="mentoringMethod"
            value={formData.mentoringMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="Video call">Video call</option>
            <option value="Voice call">Voice call</option>
            <option value="Text messaging">Text messaging</option>
            <option value="Any of the above">Any of the above</option>
            <option value="Other">Other</option>
          </Select>
        </FormField>
        <FormField>
          <Label htmlFor="message">A message to your mentees</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label>According to you, what benefits can you get by mentoring someone? *</Label>
          <CheckboxGroup>
            <label>
              <Input
                type="checkbox"
                name="benefits"
                value="Get presence among alumni and students"
                checked={formData.benefits.includes('Get presence among alumni and students')}
                onChange={handleChange}
              />
              Get presence among alumni and students
            </label>
            <label>
              <Input
                type="checkbox"
                name="benefits"
                value="Increase my social media presence"
                checked={formData.benefits.includes('Increase my social media presence')}
                onChange={handleChange}
              />
              Increase my social media presence
            </label>
            <label>
              <Input
                type="checkbox"
                name="benefits"
                value="Opportunity for self reflection, and personal satisfaction"
                checked={formData.benefits.includes('Opportunity for self reflection, and personal satisfaction')}
                onChange={handleChange}
              />
              Opportunity for self reflection, and personal satisfaction
            </label>
            <label>
              <Input
                type="checkbox"
                name="benefits"
                value="Developing mentoring/coaching skills"
                checked={formData.benefits.includes('Developing mentoring/coaching skills')}
                onChange={handleChange}
              />
              Developing mentoring/coaching skills
            </label>
            {/* Add more benefits as needed */}
          </CheckboxGroup>
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </PageWrapper>
  );
};

export default BecomeAMentor;

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: green;
  color: white;
  padding: 0.75rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  align-self: flex-start;
`;
