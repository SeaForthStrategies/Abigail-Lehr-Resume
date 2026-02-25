/**
 * Maps tool/platform names to Simple Icons slugs for logo display.
 * Uses cdn.simpleicons.org for colored brand logos (official hex colors).
 * @see https://simpleicons.org/
 */
export const TOOL_LOGO_SLUGS: Record<string, string> = {
  // Design
  Figma: "figma",
  Framer: "framer",
  Canva: "canva",
  "Adobe Express": "adobe",
  Behance: "behance",
  // Web & Tech
  "Next.js": "nextdotjs",
  Vercel: "vercel",
  Squarespace: "squarespace",
  WordPress: "wordpress",
  Lovable: "lovable",
  "Tailwind CSS": "tailwindcss",
  Python: "python",
  JavaScript: "javascript",
  Git: "git",
  GitHub: "github",
  VSCode: "visualstudiocode",
  Cursor: "cursor",
  Claude: "claude",
  ChatGPT: "openai",
  Anthropic: "anthropic",
  GoDaddy: "godaddy",
  Netlify: "netlify",
  // Marketing & Email
  HubSpot: "hubspot",
  "CRM (HubSpot)": "hubspot",
  Mailchimp: "mailchimp",
  "Campaign Monitor": "campaignmonitor",
  GA4: "google",
  "Google Analytics (GA4)": "google",
  // Social & Scheduling
  Buffer: "buffer",
  Hootsuite: "hootsuite",
  Meta: "meta",
  Instagram: "instagram",
  Facebook: "facebook",
  LinkedIn: "linkedin",
  // Events & Webinars
  Zoom: "zoom",
  Calendly: "calendly",
  Eventbrite: "eventbrite",
  // POS & Hospitality
  Square: "square",
  // Automation & Forms
  Zapier: "zapier",
  Typeform: "typeform",
  // Operations & Project Management
  Airtable: "airtable",
  Notion: "notion",
  Asana: "asana",
  Trello: "trello",
};

const CDN_BASE = "https://cdn.simpleicons.org";

export function getToolLogoUrl(toolName: string): string | null {
  const slug = TOOL_LOGO_SLUGS[toolName];
  if (!slug) return null;
  return `${CDN_BASE}/${slug}`;
}
