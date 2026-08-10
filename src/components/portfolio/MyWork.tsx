import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Maximize2 } from "lucide-react";
import { WORK_ITEMS, WORK_FOLDERS, type WorkFolder, type WorkItem } from '@/data/work';

const MyWork = () => {
  const [active, setActive] = useState<WorkFolder | 'All'>('All');
  const [items, setItems] = useState(WORK_ITEMS);
  const [folders, setFolders] = useState(WORK_FOLDERS as readonly string[]);
  const categories = useMemo(() => ['All', ...folders] as const, [folders]);
  const label = (f: string) => {
    const labels: Record<string, string> = {
      websites: "Websites",
      graphics: "Graphics",
      photos: "Photo & Social",
      "client logos": "Client Logos",
    };
    return labels[f] ?? f.charAt(0).toUpperCase() + f.slice(1);
  };
  const visible = useMemo(() => (active === 'All' ? items : items.filter(i => i.category === active)), [active, items]);
  const logoView = active === "client logos";
  const counts = useMemo(() => {
    return items.reduce<Record<string, number>>((acc, item) => {
      acc[item.category] = (acc[item.category] ?? 0) + 1;
      return acc;
    }, {});
  }, [items]);

  useEffect(() => {
    // Try to load a generated manifest to include all files placed in /public/work
    fetch(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/work/manifest.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((m) => {
        if (!m || !Array.isArray(m.items)) return;
        // Use manifest as source of truth so only existing files are shown
        setItems(m.items);
        if (Array.isArray(m.folders) && m.folders.length) setFolders(m.folders);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-12 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 grid lg:grid-cols-[1fr,320px] gap-6 items-end">
            <div>
              <p className="text-cyan-400/80 text-sm font-medium uppercase tracking-wider mb-2">Work Samples</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">A cleaner look at the actual pieces.</h2>
              <p className="text-zinc-400 max-w-3xl leading-relaxed">
                Website screens, campaign graphics, social content, photography, and brand assets. This section uses the real shape of each image so screenshots, flyers, logos, and photos do not get awkwardly cropped.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4">
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Selected Examples</p>
              <div className="grid grid-cols-2 gap-3">
                {folders.map((folder) => (
                  <div key={folder} className="min-w-0">
                    <p className="text-xl font-semibold text-white">{counts[folder] ?? 0}</p>
                    <p className="text-xs text-zinc-500 truncate">{label(folder)}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                These numbers reflect the samples shown here, not the full scope of projects, campaigns, assets, and systems I have built.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat as WorkFolder | "All")}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  active === cat ? "bg-cyan-500 text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
                }`}
              >
                {cat === "All" ? `All (${items.length})` : `${label(cat)} (${counts[cat] ?? 0})`}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <div className="text-center py-20 text-zinc-500 rounded-2xl border border-dashed border-zinc-800/80 bg-zinc-900/30">
              No items in this category.
            </div>
          ) : (
            <div className={logoView ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"}>
              {visible.map((item) => (
                item.category === "client logos" ? (
                  <LogoSampleCard key={item.id} item={item} label={label} />
                ) : (
                  <WorkSampleCard key={item.id} item={item} label={label} />
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

function LogoSampleCard({ item, label }: { item: WorkItem; label: (category: string) => string }) {
  return (
    <article className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm hover:border-cyan-500/25 hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.16)] transition-all duration-300 min-w-0">
      <Dialog>
        <DialogTrigger asChild>
          <button className="w-full text-left block" aria-label={`Open ${item.title} preview`}>
            <div className="h-[176px] w-full bg-white border border-zinc-200 shadow-[inset_0_0_0_1px_rgba(24,24,27,0.04)] p-7 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={encodeURI(item.thumb ?? item.src)}
                  alt={item.title}
                  className={`w-auto h-auto object-contain ${getLogoSizingClass(item)}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="h-[84px] p-4 min-w-0 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-white leading-snug line-clamp-2 break-words" title={item.title}>{item.title}</p>
                <p className="text-xs text-zinc-500 mt-1">{label(item.category)}</p>
              </div>
              <Maximize2 className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
            </div>
          </button>
        </DialogTrigger>
        <SampleDialog item={item} logo />
      </Dialog>
    </article>
  );
}

function getLogoSizingClass(item: WorkItem) {
  const compactMarkIds = new Set([
    "client-logos-gg-square-logo",
    "client-logos-Amanda-Rose-Consulting.png",
  ]);
  const mediumLogoIds = new Set([
    "client-logos-Toothpicks-Catering.jpg",
    "client-logos-My-Ruca.png",
  ]);
  const smallWideLogoIds = new Set([
    "graphics-mayor-john-brand-asset-1",
    "graphics-mayor-john-brand-asset-2",
    "graphics-mayor-john-brand-asset-3",
    "graphics-mayor-john-brand-asset-4",
    "graphics-mayor-john-brand-asset-5",
  ]);

  if (compactMarkIds.has(item.id)) return "max-w-[120px] max-h-[112px]";
  if (mediumLogoIds.has(item.id)) return "max-w-[164px] max-h-[104px]";
  if (smallWideLogoIds.has(item.id)) return "w-[230px] max-w-[78%] max-h-[84px]";
  return "max-w-[230px] max-h-[84px]";
}

function WorkSampleCard({ item, label }: { item: WorkItem; label: (category: string) => string }) {
  return (
    <article className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm hover:border-cyan-500/25 hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.16)] transition-all duration-300 min-w-0">
      <Dialog>
        <DialogTrigger asChild>
          <button className="w-full text-left block" aria-label={`Open ${item.title} preview`}>
            <div className="min-h-36 p-3 bg-zinc-950/70 overflow-hidden flex items-center justify-center">
              <img
                src={encodeURI(item.thumb ?? item.src)}
                alt={item.title}
                className="max-h-[360px] w-auto max-w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.015]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-4 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white leading-snug break-words" title={item.title}>{item.title}</p>
                  <p className="text-xs text-zinc-500 mt-1">{label(item.category)}</p>
                </div>
                <Maximize2 className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
              </div>
              {item.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-zinc-800/80 text-zinc-400 text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </button>
        </DialogTrigger>
        <SampleDialog item={item} />
      </Dialog>
    </article>
  );
}

function SampleDialog({ item, logo = false }: { item: WorkItem; logo?: boolean }) {
  return (
    <DialogContent className="max-w-6xl p-0 bg-zinc-950 border-zinc-800/80 rounded-2xl overflow-hidden">
      <div className="p-4 sm:p-6 flex flex-col items-center justify-center min-h-[50vh]">
        <div className={logo ? "w-full max-w-3xl min-h-[320px] rounded-xl bg-white border border-zinc-200 p-10 flex items-center justify-center" : "w-full flex items-center justify-center"}>
          <img
            src={encodeURI(item.src)}
            alt={item.title}
            className={logo ? "max-w-[78%] max-h-[190px] w-auto h-auto object-contain" : "w-full h-auto max-h-[76vh] object-contain rounded-xl bg-zinc-900"}
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center">
          <p className="text-white font-medium">{item.title}</p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400 text-sm hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" /> View live site
            </a>
          )}
        </div>
      </div>
    </DialogContent>
  );
}

export default MyWork;
