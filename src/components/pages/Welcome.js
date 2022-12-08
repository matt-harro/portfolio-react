import { Link } from 'react-router-dom';
import Section from '../layout/sections/Section';
import SectionContent from './../layout/sections/SectionContent';
import Button from '../ui/Button';

const Contact = (props) => {
  return (
    <Section>
      <SectionContent type='narrow'>
        <hgroup className='hgroup u-text-centered'>
          <h3 className='superscript'>React | Javascript | Frontend</h3>
          <h1 className='typography-headline'>Matthew Harrison</h1>
        </hgroup>
        {/* Picture */}
        <h3 className='typography-subhead'>
          "A curious pursuit down a new road"
        </h3>
        <p>
          Townsville based, my first career-life was around water and fitness.
          From personal-trainer/lifeguard. To performance swim coach, training
          national level youth athletes. After 8 years of coaching. I was ready
          for a change.
        </p>
        <p>
          My second career-life is around fire and adrenaline. As a first
          responder in the fire brigade. This work is engaging and exciting.
          However, I am ready to sink my teeth into something new and creative.
        </p>
        <p>
          I am pursuing tech opportunites as a part-time frontend developer.
          With Javascript and React under my belt and a growth mindset. I am
          looking for entry level job opportunities, that value further
          education and training.
        </p>
        <p>
          <span className='u-text-bold'>TLDR; </span>
          <span className='u-text-italic'>
            Townsville based | ex-performance swim coach | currently first
            responder | pursuing frontend dev work
          </span>
        </p>
        <p>Think. Build. Seek feedback. Repeat</p>
        <Button>
          <Link to='/projects'>See Projects</Link>
        </Button>
      </SectionContent>
    </Section>
  );
};

export default Contact;
