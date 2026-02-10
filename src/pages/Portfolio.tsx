import Layout from "@/components/Layout";
import { WORK_ITEMS } from "@/data/work";

const projects = [
  {
    title: "Abigail-Lehr-Resume",
    description: "Personal resume and portfolio site built with React, Vite, Tailwind CSS, and Framer Motion.",
    href: "https://github.com/SeaForthStrategies/Abigail-Lehr-Resume",
  },
  {
    title: "SeaForth Strategies Dashboard",
    description: "Internal dashboard for client workflows and marketing analytics. Next.js, Supabase.",
    href: null,
  },
  {
    title: "Marketing Automation Engine",
    description: "Syncs leads between Facebook Lead Ads, HubSpot, and PostgreSQL. Node.js, Zapier.",
    href: "https://github.com/SeaForthStrategies/marketing-automation-engine",
  },
  {
    title: "Headless CMS for Real Estate",
    description: "Real estate listing portal with Sanity.io, React, Algolia search.",
    href: "https://github.com/SeaForthStrategies/real-estate-portal",
  },
  {
    title: "Technical SEO Dashboard",
    description: "Python dashboard for technical SEO audits, Core Web Vitals. Streamlit, BeautifulSoup.",
    href: "https://github.com/SeaForthStrategies/seo-debt-dashboard",
  },
  {
    title: "Vibe-Coded E-Commerce Template",
    description: "Conversion-optimized e-commerce starter kit. React, Tailwind CSS, Framer Motion.",
    href: "https://github.com/SeaForthStrategies/vibe-coded-template",
  },
  {
    title: "1031 Capital Solutions Website",
    description: "Financial services website with lead gen.",
    href: "https://1031capitalsolutions.com",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Portfolio</h1>

      <h2 className="text-lg font-semibold mb-3">Projects</h2>
      <ul className="space-y-4 mb-6">
        {projects.map((project) => (
          <li key={project.title}>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-2"
              >
                {project.title}↗
              </a>
            ) : (
              <span className="font-medium text-zinc-900 dark:text-zinc-100">{project.title}</span>
            )}
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{project.description}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mb-3">Work Samples</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Websites, flyers, graphics, and client logos.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {WORK_ITEMS.map((item) => (
          <div key={item.id} className="group">
            <a
              href={item.link ?? item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded overflow-hidden border border-zinc-200 dark:border-zinc-700">
                <img
                  src={item.thumb ?? item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 truncate">
                {item.title}
                {" ↗"}
              </p>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Portfolio;
