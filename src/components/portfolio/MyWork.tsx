import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from '@/components/ui/card';
import { useEffect } from 'react';
import { WORK_ITEMS, WORK_FOLDERS, type WorkFolder } from '@/data/work';

const MyWork = () => {
  const [active, setActive] = useState<WorkFolder | 'All'>('All');
  const [items, setItems] = useState(WORK_ITEMS);
  const [folders, setFolders] = useState(WORK_FOLDERS as readonly string[]);
  const categories = useMemo(() => ['All', ...folders] as const, [folders]);
  const label = (f: string) => f.charAt(0).toUpperCase() + f.slice(1);
  const visible = useMemo(() => (active === 'All' ? items : items.filter(i => i.category === active)), [active, items]);

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
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat as WorkFolder | "All")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  active === cat ? "bg-cyan-500 text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
                }`}
              >
                {cat === "All" ? "All" : label(cat)}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <div className="text-center py-20 text-zinc-500 rounded-2xl border border-dashed border-zinc-800/80 bg-zinc-900/30">
              No items in this category.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {visible.map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm hover:border-cyan-500/20 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.08)] transition-all duration-300 min-w-0"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full text-left block">
                        <div className="aspect-square bg-zinc-800 overflow-hidden">
                          <img
                            src={encodeURI(item.thumb ?? item.src)}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="p-3 min-w-0">
                          <p className="text-sm font-medium text-white truncate break-words" title={item.title}>{item.title}</p>
                          {item.tags?.length > 0 && (
                            <p className="text-xs text-zinc-500 mt-0.5">{item.tags.join(" • ")}</p>
                          )}
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 bg-zinc-950 border-zinc-800/80 rounded-2xl overflow-hidden">
                      <div className="p-4 sm:p-8 flex flex-col items-center justify-center min-h-[50vh]">
                        <img
                          src={encodeURI(item.src)}
                          alt={item.title}
                          className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                        />
                        <p className="text-white font-medium mt-4">{item.title}</p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 text-sm mt-2 hover:underline"
                          >
                            View live site
                          </a>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
