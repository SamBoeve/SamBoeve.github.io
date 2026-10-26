export type Publication = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  url: string;
};

export const publications: Publication[] = [
  {
    year: '2026',
    title: 'Prediction Under Pressure: Predictive Sentence Processing in Dyslexia and Second-Language Reading',
    authors: 'Boeve, S., Figueroa, E. S., & Bogaerts, L.',
    venue: 'Preprint (PsyArXiv)',
    url: 'https://doi.org/10.31234/osf.io/2jz64_v1',
  },
  {
    year: '2026',
    title: 'Dyslexia Eye Tracking COrpus (DECO): First- and Second-Language Book Reading in Adults with Dyslexia',
    authors: 'Boeve, S., Figueroa, E. S., Badaya, E., Bogaerts, L., & Dirix, N.',
    venue: 'Preprint (PsyArXiv)',
    url: 'https://doi.org/10.31234/osf.io/m2jf8_v1',
  },
  {
    year: '2025',
    title: 'A systematic evaluation of Dutch large language models’ surprisal estimates in sentence, paragraph and book reading',
    authors: 'Boeve, S., & Bogaerts, L.',
    venue: 'Behavior Research Methods, 57(9), 266',
    url: 'https://doi.org/10.3758/s13428-025-02774-4',
  },
  {
    year: '2025',
    title: 'The Word and Character Frequency Effect in Chinese Natural Reading',
    authors: 'Sui, L., Woumans, E., Duyck, W., Boeve, S., & Dirix, N.',
    venue: 'Reading and Writing, 39(5), 1877–1900',
    url: 'https://doi.org/10.1007/s11145-025-10681-5',
  },
  {
    year: '2025',
    title: 'Perceptual Decoupling Underlies Internal Shielding Benefit during Switches between External and Internal Attention',
    authors: 'Verschooren, S., Vermeylen, L., Boeve, S., & Pourtois, G.',
    venue: 'Journal of Cognitive Neuroscience, 1–19',
    url: 'https://doi.org/10.1162/jocn_a_02329',
  },
  {
    year: '2024',
    title: 'A meta-analysis of 97 studies reveals that statistical learning and language ability are only weakly correlated',
    authors: 'Boeve, S., Zhou, H., & Bogaerts, L.',
    venue: 'L’Année psychologique, 124(3), 283–316',
    url: 'https://doi.org/10.3917/anpsy1.243.0283',
  },
  {
    year: '2024',
    title: 'Specificity of motor contributions to auditory statistical learning',
    authors: 'Boeve, S., Möttönen, R., & Smalle, E. H.',
    venue: 'Journal of Cognition, 7(1)',
    url: 'https://doi.org/10.5334/joc.351',
  },
];

export type Talk = { year: string; title: string; where: string };

export const talks: Talk[] = [
  {
    year: '2026',
    title: 'Prediction under pressure: How dyslexia and second-language reading shape predictive sentence processing',
    where: 'Multilingual Minds and Machines Meeting (MMMM), Nijmegen',
  },
  { year: '2026', title: 'Generatie GenAI', where: 'Meeting of Minds for Youth (Breinwijzer vzw), Ghent' },
  {
    year: '2025',
    title: 'From Tool to Theory: LLMs in Psycholinguistics',
    where: 'Workshop Large Language Models for Linguistic Analyses, Cologne',
  },
  {
    year: '2025',
    title: 'A Systematic Evaluation of Dutch Large Language Models’ Surprisal Estimates',
    where: 'Conference of Experimental Psychologists (TeaP), Frankfurt',
  },
  { year: '2024', title: 'Introduction to (gen)AI', where: 'Faculty Research Day, Ghent' },
  {
    year: '2023',
    title: 'Auditory Statistical Learning and the Role of the Articulatory Motor System',
    where: 'Psycholinguistics in Flanders (PiF), Ghent',
  },
];
