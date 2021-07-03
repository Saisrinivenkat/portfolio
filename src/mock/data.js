import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'SAI SRINIVASAN | WEB DEV', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Know about Me', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey You Visitor I\'m ',
  name: 'SAI SRINIVASAN',
  subtitle: 'Web Developer | ML Enthususiast',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a sophomore at College of Engineering(Coe) Guindy pursuing bachelors in Information Technology with a passion towards Web Technologies and Machine Learning ',
  paragraphTwo: 'I am go-getter and intend to put in my efforts towards channelizing my knowledge and skills while moving ahead with my career',
  paragraphThree: 'Sort of person who build projects to learn specific technology not to look them nicer. Apart from Coding, I would love Sports and reading books',
  resume: 'https://www.canva.com/design/DAEfZUJwBtI/uLxbSc_VDvlzvzyqV47aoA/view?utm_content=DAEfZUJwBtI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'OxyFinder',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Serverless React App',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Face Recognition',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Connect with Me? Always open to suggestions',
  btn: '',
  email: 'saisrinivenkat@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/saisrinivenkat_',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/saivenkat-srini-229384191/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Saisrinivenkat',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
