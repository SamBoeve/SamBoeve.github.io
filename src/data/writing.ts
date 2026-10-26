export type Piece = {
  type: string;
  outlet: string;
  year: string;
  lang: string;
  title: string;
  blurb: string;
  url: string;
  // Optional second link, for example a translation of the same piece.
  alt?: { label: string; url: string };
};

// Newest first. To add a piece, copy one block and edit it.
export const writing: Piece[] = [
  {
    type: 'Article',
    outlet: 'In-Mind Magazine',
    year: '2025',
    lang: 'English / Dutch',
    title: 'Language models: A new perspective on language and cognition',
    blurb:
      'How psycholinguists use language models to measure word predictability, what this reveals about reading, and why models are research tools rather than copies of the brain.',
    url: 'https://in-mind.org/article/language-models-a-new-perspective-on-language-and-cognition',
    alt: {
      label: 'Lees in het Nederlands',
      url: 'https://nl.in-mind.org/article/taalmodellen-een-nieuwe-blik-op-taal-en-cognitie',
    },
  },
  {
    type: 'Blog post',
    outlet: 'EOS Wetenschap',
    year: '2024',
    lang: 'Dutch',
    title: 'BrainGPT: hersenen upgraden met taalmodellen',
    blurb:
      'Could brain implants make telepathy possible? How language models plus brain scans can decode heard and imagined words, and why mind reading is still far away.',
    url: 'https://www.eoswetenschap.eu/technologie/braingpt-hersenen-upgraden-met-taalmodellen',
  },
  {
    type: 'Article',
    outlet: 'Lexima',
    year: '2024',
    lang: 'Dutch',
    title: 'Taal getransformeerd: AI in onderzoek en onderwijs',
    blurb: 'Article in the 2024 edition of Lexima Magazine on AI in research and education (p. 28).',
    url: 'https://bit.ly/LexMaga24',
  },
  {
    type: 'Podcast',
    outlet: 'YouTube',
    year: '2024',
    lang: 'English',
    title: 'BrainGPT: language in brains and machines',
    blurb: 'A conversation on how language is represented in brains and in machines.',
    url: 'https://www.youtube.com/watch?v=ezdhyu6STNk',
  },
];
