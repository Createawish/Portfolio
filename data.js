import HTML from './public/assets/skills/html.png';
import CSS from './public/assets/skills/css.png';
import JS from './public/assets/skills/javascript.png';
import React from './public/assets/skills/react.png';
import Next from './public/assets/skills/nextjs.png';
import Firebase from './public/assets/skills/firebase.png';
import Git from './public/assets/skills/github1.png';
import Tailwind from './public/assets/skills/tailwind.png';
import Netflix from './public/assets/projects/netflix.jpg';
import Countries from './public/assets/projects/dashboard-Countries.jpg';
import Jobs from './public/assets/projects/dashboard-Jobs.jpg';
import Real from './public/assets/projects/realEatate.jpg';
import Weather from './public/assets/projects/weather-app.jpg';




export const data =
    {
        skills: [
            {
                id: 1,
                name: 'HTML',
                img: HTML
            },
            {
                id: 2,
                name: 'CSS',
                img: CSS
            },
            {
                id: 3,
                name: 'JavaScript',
                img: JS
            },
            {
                id: 4,
                name: 'React',
                img: React
            },
            {
                id: 5,
                name: 'NextJS',
                img: Next
            },
            {
                id: 6,
                name: 'Firebase',
                img: Firebase
            },
            {
                id: 7,
                name: 'Tailwind',
                img: Tailwind
            },
            {
                id: 8,
                name: 'GitHub',
                img: Git
            }
        ],
        about: {

            header:'About',
            title: 'Who I am',
            description1:'I have spent the last 12 years in the fire service working as a professional firefighter/paramedic. I have always had a knack for technology and working with computers. In 2019 I started working with HTML and CSS to make some minor edits on a small business website that I was operating. What I thought was just a few small edits turned into a love for programming.',
            description2: 'Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning javascript and was even more enthused with making websites interactive. I then started freelancing for e-commerce companies on the Shopify platform. I am now spending my time building projects with React JS, Firebase, and learning new technologies.',
            link: 'Check out some of my latest projects.'
            },
        projects: [
            {
                id:1,
                name:'Netflix',
                description:'React JS TypeScript',
                link:'/netflix',
                img: Netflix

            },
            {
                id:2,
                name: 'Dashboard Countries',
                description:'React - Redux',
                link:'/countries',
                img: Countries

            },
            {
                id:3,
                name: 'Dashboard Jobs',
                description:'React-Redux',
                link:'/jobs',
                img: Jobs

            },
            {
                id:4,
                name: 'RealEstate',
                description:'React JS',
                link: '/realEstate',
                img: Real

            },
            {
                id:5,
                name: 'Weather-App',
                description:'React - NextJS',
                link:'/weather',
                img: Weather

            }
        ]

    }
