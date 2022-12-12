import Section from '../layout/sections/Section';
import SectionContent from './../layout/sections/SectionContent';
import Card from '../ui/Card';

const Contact = (props) => {
  return (
    <Section>
      <SectionContent>
        <Card>Linkedin link</Card>
        <Card>Github link</Card>
      </SectionContent>
    </Section>
  );
};

export default Contact;
