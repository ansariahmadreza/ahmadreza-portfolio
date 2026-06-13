const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ahmadreza-portfolio.vercel.app',
  title: 'Ts.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'ََAhmadreza Ansari',
  role: 'Junior Frontend Developer',
  picture: '/1213123.jpg',

  description:
    " Hi, I’m a Frontend Developer focused on building modern and responsive web applications using JavaScript, React, and TypeScript. I enjoy turning ideas into real, functional products and continuously improving my skills through hands-on projects.My goal is to grow as a professional developer, contribute to real-world projects, and eventually work in a team where I can learn and deliver high-quality frontend solutions.",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/ahmadreza-ansari-894b36348',
    github: 'https://github.com/ansariahmadreza',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Online-Shop',
    description:
    'A modern ASOS-inspired e-commerce app built with Next.js and TypeScript, featuring authentication, product search, filtering, sorting, pagination, cart functionality, and PWA support. Fully responsive and optimized for a smooth user experience.',
    stack: ['Tailwind CSS', 'TypeScript', 'Next.js', 'NextAuth', 'ContextApi', 'PWA'],
    sourceCode: 'https://github.com/ansariahmadreza/Online-Shop',
    livePreview: 'https://online-shop-xw45.vercel.app/clothes',
    image: '/1p.png',
  },
  {
    name: 'techno-store',
    description:
      'A work-in-progress e-commerce project featuring mocked backend services using MSW and Next.js API routes. It includes core functionalities such as product listing, search, and pagination.',
    stack: ['Tailwind CSS', 'TypeScript', 'Next.js', 'Context Api', "MSW"],
    sourceCode: 'https://github.com/ansariahmadreza/techno-store',
    livePreview: 'https://techno-store-two.vercel.app',
    image: '/2p.png',
  },
  {
    name: 'BilingualSite',
    description:
      'A simple bilingual website designed to demonstrate language switching functionality in the user interface (FA/EN).',
    stack: [' i18next', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/ansariahmadreza/BilingualSite',
    livePreview: 'https://ansariahmadreza.github.io/BilingualSite',
    image: '/3p.png',
  },
]

const skills = [
  'Tailwind CSS',
  'TypeScript',
  'Git & GitHub',
  'React',
  'Next.js',
  'Linux (WSL + Terminal)',
]
const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ahmadreza.an.dev@gmail.com',
}

export { header, about, projects, skills, contact }