export interface PortfolioItem {
  id: string;
  title: string;
  category: 'poster' | 'logo' | 'presentation';
  subCategory: string;
  imageUrl: string;
  description: string;
  client?: string;
  year?: string;
  tags: string[];
  featured?: boolean;
  color: string;
  // For logos: brand details
  palette?: string[];
  mockupType?: 'apparel' | 'signage' | 'packaging' | 'digital';
  // For presentations: slides array
  slides?: { title: string; subtitle: string; content: string; image: string; bgAccent: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  projectType: string;
}

export interface PricingTier {
  name: string;
  price: string;
  delivery: string;
  description: string;
  features: string[];
  popular?: boolean;
  category: 'poster' | 'logo' | 'presentation';
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // POSTERS
  {
    id: 'p1',
    title: 'Cyberpunk 2088 — Key Art & Movie Poster',
    category: 'poster',
    subCategory: 'Sci-Fi Film Poster',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    description: 'Neon-infused theatrical poster designed for an indie cyberpunk sci-fi thriller. Features intricate typography, custom light-leak overlays, and hyper-detailed color grading.',
    client: 'Nebula Pictures',
    year: '2025',
    tags: ['Movie Poster', 'Photoshop', 'Key Art', 'Neon Graphics', 'Typography'],
    featured: true,
    color: '#06b6d4'
  },
  {
    id: 'p2',
    title: 'Sonic Pulse — Electronic Music Festival',
    category: 'poster',
    subCategory: 'Event & Concert Poster',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    description: 'High-energy vibrant poster design for a 3-day EDM festival in Goa. Uses fluid 3D abstract waveforms and bold futuristic typography.',
    client: 'Pulse Live Events',
    year: '2025',
    tags: ['Event Poster', '3D Waveforms', 'Vibrant', 'Concert Art'],
    featured: true,
    color: '#ec4899'
  },
  {
    id: 'p3',
    title: 'Minimalist Architecture Exhibition',
    category: 'poster',
    subCategory: 'Exhibition & Gallery Poster',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    description: 'Swiss-style minimalist typography poster for the National Modern Art & Architecture Showcase. Emphasizes negative space and strict grid proportions.',
    client: 'Metropolis Gallery',
    year: '2024',
    tags: ['Minimalism', 'Swiss Style', 'Typography', 'Print Design'],
    featured: false,
    color: '#f59e0b'
  },
  {
    id: 'p4',
    title: 'Apex Energy — Product Launch Campaign',
    category: 'poster',
    subCategory: 'Commercial Advertising Poster',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80',
    description: 'Bold advertising poster campaign for a brand new zero-sugar performance energy drink with dynamic water splashes and dramatic studio lighting.',
    client: 'Apex Beverage Co.',
    year: '2025',
    tags: ['Advertising', 'Product Retouching', 'Commercial', 'CGI Assist'],
    featured: false,
    color: '#10b981'
  },

  // LOGOS
  {
    id: 'l1',
    title: 'Vortex Quantum — Tech Brand Identity',
    category: 'logo',
    subCategory: 'AI & Quantum Computing Logo',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    description: 'Geometric continuous dynamic V-loop emblem designed for a Silicon Valley AI infrastructure startup. Expresses infinite processing power and clarity.',
    client: 'Vortex AI Labs',
    year: '2025',
    tags: ['Vector Logo', 'Brand Guidelines', 'Geometric', 'Tech Identity'],
    featured: true,
    color: '#3b82f6',
    palette: ['#1e3a8a', '#3b82f6', '#60a5fa', '#f0f9ff'],
    mockupType: 'digital'
  },
  {
    id: 'l2',
    title: 'Aethel Luxury Streetwear',
    category: 'logo',
    subCategory: 'Fashion Monogram Logo',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80',
    description: 'Sleek interlocking A & E monogram created for a premium urban luxury apparel brand in London. Designed for high-end embroidery and metallic foil stamping.',
    client: 'Aethel London',
    year: '2025',
    tags: ['Monogram', 'Luxury', 'Fashion', 'Minimal Vector'],
    featured: true,
    color: '#a855f7',
    palette: ['#0f172a', '#334155', '#cbd5e1', '#d97706'],
    mockupType: 'apparel'
  },
  {
    id: 'l3',
    title: 'Solstice Artisan Coffee Roasters',
    category: 'logo',
    subCategory: 'Organic Food & Beverage Logo',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    description: 'Warm organic sun-burst coffee bean emblem with hand-crafted typography. Created for boutique coffee bag packaging and storefront signage.',
    client: 'Solstice Roasters',
    year: '2024',
    tags: ['Emblem', 'Organic', 'Packaging', 'Branding'],
    featured: false,
    color: '#eab308',
    palette: ['#451a03', '#78350f', '#d97706', '#fef3c7'],
    mockupType: 'packaging'
  },

  // PRESENTATIONS
  {
    id: 'pr1',
    title: 'FinScale $12M Series A Pitch Deck',
    category: 'presentation',
    subCategory: 'Investor Pitch Deck (18 Slides)',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    description: 'High-converting investor pitch deck crafted for a Fintech startup. Transformed complex financial projections into crisp, compelling visual charts and story arcs.',
    client: 'FinScale Inc.',
    year: '2025',
    tags: ['Pitch Deck', 'PowerPoint', 'Figma', 'Investor Presentation', 'Data Viz'],
    featured: true,
    color: '#14b8a6',
    slides: [
      {
        title: 'FinScale Series A',
        subtitle: 'Revolutionizing Cross-Border B2B Payments with Zero Friction',
        content: 'We empower enterprise treasuries to settle global transactions in 3 seconds at 90% lower FX cost.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        bgAccent: '#0d9488'
      },
      {
        title: 'The $40 Trillion Problem',
        subtitle: 'Legacy Banking Infrastructure is Slow, Opaque, and Costly',
        content: 'Current wire transfers take 3-5 business days, involve 4 correspondent banks, and hide 3.5% hidden FX markup.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        bgAccent: '#e11d48'
      },
      {
        title: 'Our Solution: Instant Netting',
        subtitle: 'Proprietary Real-Time Liquidity Routing Engine',
        content: 'Our smart contract ledger routes transactions through localized liquidity pools, bypassing correspondent intermediaries entirely.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
        bgAccent: '#0284c7'
      },
      {
        title: 'Traction & Key Metrics',
        subtitle: '$450M Annualized Run Rate in Q4 2025',
        content: '• 340% YoY Revenue Growth\n• 42 Enterprise Clients\n• 99.998% Platform Uptime\n• $12M Seeking for Expansion',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
        bgAccent: '#16a34a'
      }
    ]
  },
  {
    id: 'pr2',
    title: 'Nexus Cloud Keynote Slidedeck',
    category: 'presentation',
    subCategory: 'Annual Conference Keynote Deck',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80',
    description: 'Cinematic widescreen slidedeck designed for a CEO keynote address at World Cloud Summit 2025. Designed with dark-mode aesthetic, bold 3D mockup graphics, and clean layouts.',
    client: 'Nexus Cloud Systems',
    year: '2025',
    tags: ['Keynote', 'Slidedeck', 'Dark Mode', 'Corporate Presentation'],
    featured: true,
    color: '#6366f1',
    slides: [
      {
        title: 'The Autonomous Cloud',
        subtitle: 'Keynote Address — World Cloud Summit 2025',
        content: 'Welcome to the future of self-healing, self-optimizing serverless computing.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        bgAccent: '#4f46e5'
      },
      {
        title: 'Architecture Redefined',
        subtitle: 'Zero-Downtime Neural Auto-Scaling',
        content: 'When traffic spikes 10,000%, Nexus scales proactively before latency increases even 1 millisecond.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        bgAccent: '#7c3aed'
      },
      {
        title: 'Empowering 500,000 Developers',
        subtitle: 'One Unified Command Interface',
        content: 'From local environment to multi-region global deployment with a single atomic push.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        bgAccent: '#0891b2'
      }
    ]
  },
  {
    id: 'pr3',
    title: 'BioGen Pharma Brand Deck',
    category: 'presentation',
    subCategory: 'Corporate Sales & Partner Deck',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    description: 'Clean medical corporate presentation deck for stakeholder meetings and medical distributor onboarding across Europe.',
    client: 'BioGen Therapeutics',
    year: '2024',
    tags: ['Corporate Deck', 'Medical', 'Infographics', 'Figma Presentation'],
    featured: false,
    color: '#06b6d4',
    slides: [
      {
        title: 'BioGen Therapeutics',
        subtitle: 'Next-Generation Targeted Immunotherapy',
        content: 'Advancing precision medicine through clinical innovation and global access.',
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
        bgAccent: '#0e7490'
      },
      {
        title: 'Clinical Phase III Results',
        subtitle: '88% Efficacy Across Multi-Center Trials',
        content: 'Our latest data demonstrates unprecedented patient recovery rates with minimal toxicity profiles.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
        bgAccent: '#059669'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'CEO & Founder',
    company: 'FinScale Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote: 'Om Kumar is an absolute wizard! He designed our Series A pitch deck that helped us raise $12M. Investors specifically complimented the slide clarity and visual polish. Best freelancer I have hired.',
    rating: 5,
    projectType: 'Investor Pitch Deck'
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'Creative Director',
    company: 'Nebula Pictures',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'We hired Om for our Sci-Fi feature film theatrical poster. His eye for lighting, composition, and futuristic typography is world-class. Delivered high-res print files within 48 hours!',
    rating: 5,
    projectType: 'Movie Key Art Poster'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Head of Marketing',
    company: 'Vortex AI Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Om crafted our logo and full visual brand identity. He provided 3 incredible conceptual directions and executed the final vector assets flawlessly. He understands modern design deeply.',
    rating: 5,
    projectType: 'Logo & Brand Identity'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Poster / Key Art Design',
    price: '$150 - $350',
    delivery: '2 - 3 Days',
    description: 'Eye-catching high-resolution posters for movies, events, product launches, or advertising.',
    category: 'poster',
    features: [
      '2 Unique Concept Directions',
      'High-Res 300DPI Print & Digital Files',
      'Custom Typography & Photo Manipulation',
      'Source Files (PSD / AI / TIFF)',
      'Unlimited Revisions during Draft Stage',
      'Commercial License Included'
    ],
    popular: false
  },
  {
    name: 'Logo & Brand Identity',
    price: '$250 - $550',
    delivery: '3 - 5 Days',
    description: 'Memorable, timeless geometric or minimalist logo design with full brand guidelines.',
    category: 'logo',
    features: [
      '3 Distinct Logo Concepts',
      'Vector Files (AI, EPS, SVG, PDF, PNG)',
      'Color Palette & Typography Guide',
      '3D Mockup Showcase (Apparel, Signage)',
      'Social Media Profile & Banner Kit',
      'Full Copyright Ownership Transfer'
    ],
    popular: true
  },
  {
    name: 'Investor Pitch Deck / Presentation',
    price: '$400 - $950',
    delivery: '4 - 7 Days',
    description: 'High-converting custom slidedeck (up to 20 slides) designed in PowerPoint, Keynote, or Figma.',
    category: 'presentation',
    features: [
      'Custom Slide Master & Theme Setup',
      'Infographics, Charts & Data Visualization',
      'Smooth Slide Animations & Transitions',
      'Fully Editable PPTX / Figma / Keynote Files',
      'Pitch Deck Storytelling Consultation',
      'Express 48h Turnaround Available'
    ],
    popular: false
  }
];

export const SKILLS_LIST = [
  { name: 'Poster & Key Art Design', level: 98, icon: 'Image' },
  { name: 'Logo & Brand Identity', level: 96, icon: 'Award' },
  { name: 'Pitch Decks & Slidedecks', level: 99, icon: 'Presentation' },
  { name: '3D Typography & Mockups', level: 92, icon: 'Box' },
  { name: 'Adobe Photoshop & Illustrator', level: 97, icon: 'PenTool' },
  { name: 'Figma & Presentation Software', level: 95, icon: 'Layout' },
];

export const FREELANCE_STATS = [
  { label: 'Completed Projects', value: '140+' },
  { label: 'Happy Clients Worldwide', value: '95+' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Avg. Turnaround Time', value: '48 Hrs' },
];
