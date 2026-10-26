// Central place for everything you may want to change without touching the pages.

export const site = {
  name: 'Sam Boeve',
  title: 'Sam Boeve, Cognitive Scientist',
  description:
    'Cognitive scientist and PhD researcher at Ghent University studying prediction in reading, language models and learning. Available for science writing.',
  url: 'https://samboeve.github.io',
  email: 'sam.boeve@outlook.com',
  affiliation: 'Department of Experimental Psychology and Department of General and Applied Psychology, Ghent University',

  links: {
    scholar: 'https://scholar.google.com/citations?user=6PVXU-oAAAAJ&hl=nl&oi=ao',
    researchgate: 'https://www.researchgate.net/profile/Sam-Boeve',
    orcid: 'https://orcid.org/0000-0002-7140-3443',
    orcidId: '0000-0002-7140-3443',
    linkedin: 'https://www.linkedin.com/in/sam-boeve-223b98103/',
    github: 'https://github.com/SamBoeve',
  },

  // Portrait: put a file in /public (for example public/portrait.jpg) and set this to '/portrait.jpg'.
  // While empty, a placeholder box is shown on the home page.
  portrait: 'portrait.jpg',

  // CV file served from /public.
  cvFile: '/SamBoeve_CV.pdf',

  // Privacy-friendly analytics, disabled until you fill this in.
  //   Plausible:    { provider: 'plausible',   id: 'samboeve.github.io' }
  //   GoatCounter:  { provider: 'goatcounter', id: 'your-goatcounter-code' }
  analytics: { provider: 'plausible', id: 'samboeve.github.io' } as { provider: '' | 'plausible' | 'goatcounter'; id: string },
};
