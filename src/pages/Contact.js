import Section from '../components/layout/sections/Section';
import SectionContent from '../components/layout/sections/SectionContent';
import Card from '../components/ui/Card';
import Grid from '../components/layout/grids/Grid';
import ContactIcon from '../components/contact/ContactIcon';

const Contact = (props) => {
  return (
    <Section>
      <SectionContent>
        <hgroup className='hgroup'>
          <h2 className='typography-headline u-text-centered'>
            <span className='superscript'>My DM's & src code</span>
            Send Me a Message
          </h2>
        </hgroup>
        <Grid type='aspect-1-1'>
          <Card>
            <ContactIcon
              icon='linkedin'
              link={'https://www.linkedin.com/in/matthew-harrison-303680237/'}
            />
          </Card>
          <Card>
            <ContactIcon icon='github' link={'https://github.com/matt-harro'} />
          </Card>
        </Grid>
      </SectionContent>
    </Section>
  );
};

export default Contact;
