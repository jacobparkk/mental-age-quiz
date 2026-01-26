import { QuizConfig, ResultProfile, Question, GenerationType } from './types';

export const QUIZ_CONFIG: QuizConfig = {
  title: "What is your Mental Age?",
  subtitle: "Are you a spiritual Boomer or a chaotic Gen Alpha?",
  totalQuestions: 8,
};

export const RESULTS: Record<GenerationType, ResultProfile> = {
  BOOMER: {
    id: 'BOOMER',
    label: "The Lawn Guardian (Boomer)",
    oneLiner: "You print out emails and own a landline 'just in case'.",
    color: "bg-stone-200 text-stone-900",
    accent: "border-stone-800",
    stats: [
      { label: "Tech Confusion", value: 95 },
      { label: "Home Equity", value: 80 },
      { label: "Cringe Factor", value: 10 },
    ]
  },
  MILLENNIAL: {
    id: 'MILLENNIAL',
    label: "The Nostalgia Merchant",
    oneLiner: "You're still waiting for your Hogwarts letter and pause movies to explain the plot.",
    color: "bg-pink-200 text-pink-900",
    accent: "border-pink-900",
    stats: [
      { label: "Anxiety", value: 90 },
      { label: "Plant Ownership", value: 85 },
      { label: "Side Parts", value: 100 },
    ]
  },
  GEN_Z: {
    id: 'GEN_Z',
    label: "The Chaos Curator (Gen Z)",
    oneLiner: "Your humor is broken, you have 500 unread messages, and you're thriving.",
    color: "bg-lime-300 text-lime-900",
    accent: "border-lime-900",
    stats: [
      { label: "Screen Time", value: 98 },
      { label: "Irony Layers", value: 85 },
      { label: "Vibe Check", value: 92 },
    ]
  },
  GEN_ALPHA: {
    id: 'GEN_ALPHA',
    label: "The iPad Shaman (Gen Alpha)",
    oneLiner: "You learned to swipe before you learned to walk. Skibidi etc.",
    color: "bg-cyan-300 text-cyan-900",
    accent: "border-cyan-900",
    stats: [
      { label: "Attention Span", value: 5 },
      { label: "Robux Wealth", value: 99 },
      { label: "Slang Density", value: 100 },
    ]
  }
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "It's 9:00 PM on a Friday. What are you doing?",
    options: [
      { text: "Watching the news, then go to bed.", type: 'BOOMER' },
      { text: "Watching a comfort show.", type: 'MILLENNIAL' },
      { text: "Scrolling on TikTok and rotting in bed.", type: 'GEN_Z' },
      { text: "Playing video games with friends in a discord/facetime call.", type: 'GEN_ALPHA' }
    ]
  },
  {
    id: 2,
    text: "How do you handle a phone call?",
    options: [
      { text: "Facetime or no call at all.", type: 'GEN_ALPHA' },
      { text: "Let it ring a couple times before picking up.", type: 'GEN_Z' },
      { text: "Answer immediately with a 'Hello?!'", type: 'BOOMER' },
      { text: "Wait for it to end, then text 'Did you call?'", type: 'MILLENNIAL' }
    ]
  },
  {
    id: 3,
    text: "Pick your drink of choice.",
    options: [
      { text: "Coffee or Tea.", type: 'BOOMER' },
      { text: "Sparkling Water or Cold Brew.", type: 'MILLENNIAL' },
      { text: "Iced Matcha Latte.", type: 'GEN_Z' },
      { text: "Boba Tea.", type: 'GEN_ALPHA' }
    ]
  },
  {
    id: 4,
    text: "How do you react to a funny text message?",
    options: [
      { text: "💀😭", type: 'GEN_Z' },
      { text: "😂 or LOL", type: 'MILLENNIAL' },
      { text: "haha", type: 'BOOMER' },
      { text: "Stickers and GIFs.", type: 'GEN_ALPHA' }
    ]
  },
  {
    id: 5,
    text: "Someone sends you a PDF to sign.",
    options: [
      { text: "Print it, sign with pen, scan it.", type: 'BOOMER' },
      { text: "Use a proper e-sign tool like an adult.", type: 'MILLENNIAL' },
      { text: "Screenshot it, draw on it with my finger, send back.", type: 'GEN_Z' },
      { text: "'What's a PDF?'", type: 'GEN_ALPHA' }
    ]
  },
  {
    id: 6,
    text: "Choose a home aesthetic.",
    options: [
      { text: "Lots of gray and beige tones, indoor plants, and sleek furniture.", type: 'MILLENNIAL' },
      { text: "LED Strips and bright colors.", type: 'GEN_ALPHA' },
      { text: "Vinyl records, quirky lighting, loud colors.", type: 'GEN_Z' },
      { text: "Wall-to-wall carpet & china cabinets.", type: 'BOOMER' }
    ]
  },
  {
    id: 7,
    text: "Your internet goes down for 5 minutes.",
    options: [
      { text: "Call the ISP immediately and demand to speak to a manager.", type: 'BOOMER' },
      { text: "Panic slightly, then reset the router.", type: 'MILLENNIAL' },
      { text: "Switch to data and continue doing what you were doing.", type: 'GEN_Z' },
      { text: "Panic and Meltdown.", type: 'GEN_ALPHA' }
    ]
  },
  {
    id: 8,
    text: "Final Vibe Check: Are you cool?",
    options: [
      { text: "I was cool back in the day.", type: 'MILLENNIAL' },
      { text: "What does it mean to be cool?", type: 'BOOMER' },
      { text: "I don't really care.", type: 'GEN_Z' },
      { text: "Yeah. I'm the main character.", type: 'GEN_ALPHA' }
    ]
  }
];