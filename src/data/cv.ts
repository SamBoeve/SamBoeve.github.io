export type CvItem = { when: string; what: string; detail: string };
export type CvGroup = { heading: string; items: CvItem[] };

export const cv: CvGroup[] = [
  {
    heading: 'Positions',
    items: [
      {
        when: 'Aug 2026 – Jan 2027',
        what: 'Visiting Researcher, Computational Psycholinguistics Laboratory',
        detail:
          'MIT, Cambridge, USA. Long research stay (FWO travel grant), working on predictive sentence processing in dyslexia.',
      },
      {
        when: '2022–now',
        what: 'PhD Researcher, Bogaerts Lab',
        detail: 'Ghent University. Predictive reading: context effects across development.',
      },
      {
        when: '2021–2022',
        what: 'Research Intern, Duyck Lab',
        detail: 'Auditory-motor speech processing and higher cognitive abilities in language learning.',
      },
      { when: '2020–2021', what: 'Research Assistant, CapLab', detail: 'EEG data collection and analysis.' },
    ],
  },
  {
    heading: 'Education',
    items: [
      { when: '2020–2022', what: 'MSc Psychology (Neuroscience)', detail: 'Ghent University, summa cum laude.' },
      { when: '2017–2020', what: 'BSc Psychology', detail: 'Ghent University, summa cum laude.' },
    ],
  },
  {
    heading: 'Grants and awards',
    items: [
      {
        when: '2026',
        what: 'FWO travel grant',
        detail: 'Long stay at MIT (Cambridge, USA).',
      },
      { when: '2023–2027', what: 'FWO personal PhD fellowship', detail: 'Fund for Scientific Research Flanders.' },
      {
        when: '2024',
        what: 'Poster award (3rd place)',
        detail: 'Faculty of Psychology and Educational Sciences Research Day.',
      },
    ],
  },
  {
    heading: 'Teaching and service',
    items: [
      {
        when: '2024–2025',
        what: 'Teaching assistant, Introduction to Psycholinguistics',
        detail: 'Plus guest lectures on (gen)AI and large language models.',
      },
      {
        when: '2023–now',
        what: 'Master thesis supervision',
        detail: 'One supervised thesis awarded best master thesis (BAPS 2026).',
      },
      {
        when: '2024–now',
        what: 'Journal reviewer',
        detail: 'Behavior Research Methods, Scientific Studies of Reading, Reading and Writing, and others.',
      },
    ],
  },
];
