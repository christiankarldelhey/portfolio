import avatar from '../assets/images/Christian_Delhey.jpeg';
import hero from '../assets/images/logo-hasen.svg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://christiandelhey.com',
    avatar: {
        src: avatar,
        alt: 'Christian Karl Delhey'
    },
    title: 'Christian Karl Delhey',
    subtitle: 'Senior Front-End Developer | Vue 3 · React · TypeScript | 8+ years',
    description: 'Senior Front-End Developer with 8+ years of experience building scalable web and mobile interfaces. Specialized in Vue 3 (Composition API, Pinia) and TypeScript.',
    image: {
        src: '/logo-hasen.svg',
        alt: 'Christian Karl Delhey - Senior Front-End Developer'
    },
    headerNavLinks: [
        {
            text: 'About',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Challenges',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/christiankarldelhey'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/christiankarldelhey'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/christiankarldelhey'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/christiankarldelhey'
        }
    ],
    hero: {
        // title: 'Christian Karl Delhey',
        text: "Senior Front-End Developer with 8+ years of experience building scalable web and mobile interfaces.\n\nSpecialized in **Vue 3 (Composition API, Pinia)** and **TypeScript**, with strong React and React Native experience. Proven track record in Vue 2→3 migrations, design system implementation, and frontend security (XSS).\n\nActively building full-stack projects using WebSockets, real-time architecture, and geospatial APIs.\n\n**Location**: Barcelona, Spain\n**Contact**: caascaas@gmail.com | +34 658 028 828",
        // image: {
        //     src: hero,
        //     alt: 'Hasen - Real-Time Multiplayer Card Game'
        // },
        actions: [
            {
                text: 'View Projects',
                href: '/projects'
            },
            {
                text: 'Contact',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe to Newsletter',
        text: 'Updates about my projects and development journey.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
