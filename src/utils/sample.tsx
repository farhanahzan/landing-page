import AboutVarientOne from '../blocks/about/AboutVarientOne';
import AboutForm from '../blocks/about/form';
import HeroForm from '../blocks/hero/form';
import HerorVarientOne from '../blocks/hero/HeroVarientOne';

export const jsonData = {
  hero: {
    title: 'Hero Lorem Ipsum Neque porro qui dolorem',
    subtitle: 'Neque porro quisquam est qui dolorem ipsum quia',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    ctaOne: 'cta one',
    ctaOneLink: '/',
    ctaTwo: 'cta two',
    ctaTwoLink: '/',
    image:
      'https://images.unsplash.com/photo-1548180018-ec18eee0512f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  about: {
    title: 'About us',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    ctaOne: 'cta',
    ctaOneLink: '/',
    image:
      'https://images.unsplash.com/photo-1719667947229-594a8fdddade?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};

export const initialLandingPage = [
  {
    id: 1,
    component: <HerorVarientOne />,
    form: <HeroForm />,
    title: 'hero',
    status: true,
  },
  {
    id: 2,
    component: <AboutVarientOne />,
    form: <AboutForm />,
    title: 'about',
    status: true,
  },
];
