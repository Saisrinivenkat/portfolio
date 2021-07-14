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
    img: 'oxyfinder.png',
    title: 'OxyFinder',
    info: 'Tech Stack learned through it : Nodejs(express), Nosql(MongoDB),OAuth',
    info2: 'About this project: Many covid patients have suffered for oxygen cyclinder during covid high spread in india. In order to help those people I developed a web based platform which offers people to put their need and might get help from others.',
    url: 'https://message-poster.herokuapp.com/home',
    repo: 'https://github.com/Saisrinivenkat/simple_messager', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'serverless.jpg',
    title: 'Serverless React App',
    info: 'Tech stack Learned: React JS, Azure functions(Serverless)',
    info2: "About this project: This site is done with the request of my high school buddies. They want to create a site to know the birthdays of peoples who are studied together. So I created the site using React on frontend and for the backend i used MongoDB.",
    url: 'https://cbiofficial.herokuapp.com/',
    repo: 'https://github.com/Saisrinivenkat/cbiofficial', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'opencv.png',
    title: 'Invisible cloak',
    info: 'Tech stack learned: Python, OpenCV',
    info2: 'About this project: As I already said Im passionate to explore Machine Learning. So this was my first step towards ML. I learnt how to analyze images using OpenCV and learnt some morphological features.',
    url: '',
    repo: 'https://github.com/Saisrinivenkat/Invisible-Cloak', // if no repo, the button will not show up
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
