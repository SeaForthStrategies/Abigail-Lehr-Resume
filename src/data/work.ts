// Mirror the folder names inside /public/work
export const WORK_FOLDERS = ['websites', 'photos', 'graphics', 'client logos'] as const;
export type WorkFolder = typeof WORK_FOLDERS[number];

export type WorkItem = {
  id: string;
  title: string;
  category: WorkFolder; // folder name
  src: string; // path under /public, e.g. /work/websites/home.jpg
  thumb?: string; // optional smaller preview
  tags?: string[];
  link?: string; // optional external link
};

export const WORK_ITEMS: WorkItem[] = [
  {
    id: '1031-site',
    title: '1031 Capital Solutions Website',
    category: 'websites',
    src: '/work/websites/Financial Services Website home.png',
    tags: ['Website', 'Lead Gen'],
    link: 'https://1031capitalsolutions.com',
  },
  {
    id: '1031-team',
    title: '1031 Capital Solutions - About & Team',
    category: 'websites',
    src: '/work/websites/1031-capital-solutions-team.png',
    tags: ['Website', 'Financial Services', 'Lead Gen'],
    link: 'https://1031capitalsolutions.com',
  },
  {
    id: 'san-diego-tax-tracker',
    title: 'San Diego County Tax Hike Tracker',
    category: 'websites',
    src: '/work/websites/san-diego-tax-hike-tracker.png',
    tags: ['Website', 'Data', 'UI Design'],
  },
  {
    id: 'news-commentary-franklin',
    title: 'News & Commentary - Mayor John Franklin',
    category: 'websites',
    src: '/work/websites/news-commentary-mayor-franklin.png',
    tags: ['Website', 'Campaign', 'News'],
  },
  {
    id: 'issues-franklin',
    title: 'Issues - Mayor John Franklin',
    category: 'websites',
    src: '/work/websites/issues-page-mayor-franklin.png',
    tags: ['Website', 'Campaign', 'Video'],
  },
  {
    id: 'endorsements-franklin',
    title: 'Endorsements - Mayor John Franklin',
    category: 'websites',
    src: '/work/websites/endorsements-page-mayor-franklin.png',
    tags: ['Website', 'Campaign'],
  },
  {
    id: 'catering-site',
    title: 'Catering Company Website',
    category: 'websites',
    src: '/work/websites/Catering Company  Website Home.png',
    tags: ['Website'],
  },
  {
    id: 'fin-services-1',
    title: 'Financial Services Website',
    category: 'websites',
    src: '/work/websites/Financial Services Website.png',
  },
  {
    id: 'fin-services-2',
    title: 'Financial Services Website 2',
    category: 'websites',
    src: '/work/websites/Financial Services Website 2.png',
  },
  {
    id: 'fin-services-4',
    title: 'Financial Services Website 4',
    category: 'websites',
    src: '/work/websites/Financial Services Website 4.png',
  },
  {
    id: 'fin-services-5',
    title: 'Financial Services Website 5',
    category: 'websites',
    src: '/work/websites/Financial Services Website 5.png',
  },
  {
    id: 'fin-services-6',
    title: 'Financial Services Website 6',
    category: 'websites',
    src: '/work/websites/Financial Services Website 6.png',
  },
  {
    id: 'fin-services-7',
    title: 'Financial Services Website 7',
    category: 'websites',
    src: '/work/websites/Financial Services Website 7.png',
  },
  {
    id: 'amazing-grace-flyer',
    title: 'Amazing Grace Promo Flyer',
    category: 'graphics',
    src: '/work/graphics/Blue And Beige Minimalist Real Estate Expert Realtor Flyer.png',
    tags: ['Design', 'Promo'],
  },
  {
    id: 'casino-night-flyer',
    title: 'Casino Night Flyer',
    category: 'graphics',
    src: '/work/graphics/Casinonightflyer.png',
    tags: ['Design'],
  },
  {
    id: 'red-tennis',
    title: 'Red Modern Tennis Flyer',
    category: 'graphics',
    src: '/work/graphics/Red Modern Tennis Season Flyer.png',
  },
  {
    id: '8-strategies',
    title: '8 Strategies Flyer',
    category: 'graphics',
    src: '/work/graphics/8 strategies flyer w disclosures.png',
  },
  {
    id: 'peoplemvr-insta',
    title: 'PeopleMVR Instagram Creative',
    category: 'graphics',
    src: '/work/graphics/PeopleMVR insta work for us.png',
  },
  {
    id: 'photo-dsc00170',
    title: 'Photo',
    category: 'photos',
    src: '/work/photos/dsc00170.jpg',
  },
  {
    id: 'photo-dsc00175',
    title: 'Photo',
    category: 'photos',
    src: '/work/photos/dsc00175.jpg',
  },
  {
    id: 'logo-toothpicks',
    title: 'Toothpicks Catering Logo',
    category: 'client logos',
    src: '/work/client logos/Toothpicks Catering.jpg',
  },
  {
    id: 'logo-social-affair',
    title: 'The Social Affair Logo',
    category: 'client logos',
    src: '/work/client logos/The Social Affair.jpg',
  },
  {
    id: 'logo-vine-tap',
    title: 'Vine & Tap',
    category: 'client logos',
    src: '/work/client logos/Vine & Tap.png',
  },
  {
    id: 'logo-west-coast-chiro',
    title: 'West Coast Chiropractic Center',
    category: 'client logos',
    src: '/work/client logos/West Coast Chiropractic Center.webp',
  },
];
