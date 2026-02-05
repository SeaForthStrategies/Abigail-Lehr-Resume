import { useMemo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
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
    fetch('/work/manifest.json')
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
    <section id="my-work" className="py-20 bg-background/40">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral dark:text-white mb-4">My Work</h2>
          <p className="text-portfolio-muted dark:text-zinc-400 text-lg">Selected websites, flyers, graphics, and social content.</p>
        </div>

        <Tabs value={active} onValueChange={(v) => setActive(v as WorkFolder | 'All')} className="w-full">
          <TabsList className="bg-card/50 backdrop-blur border border-primary/10 rounded-full p-1">
            {categories.map(cat => (
              <TabsTrigger key={cat} value={cat} className="rounded-full px-4 py-1.5 data-[state=active]:bg-background data-[state=active]:text-primary">
                {cat === 'All' ? 'All' : label(cat)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={active} className="mt-8">
            {visible.length === 0 ? (
              <div className="text-center text-portfolio-muted">No items in this category yet.</div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map(item => (
                <Card key={item.id} className="group glass-card overflow-hidden">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full text-left">
                        <div className="aspect-square sm:aspect-video bg-zinc-800 overflow-hidden relative border-b border-white/5">
                          <img
                            src={encodeURI(item.thumb ?? item.src)}
                            alt={item.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm flex items-center justify-center">
                            <span className="text-white font-bold text-sm tracking-wider uppercase">Project Details</span>
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-5xl p-0 bg-black/90 border-primary/20 backdrop-blur-2xl">
                      <div className="p-4 sm:p-8 flex items-center justify-center min-h-[50vh]">
                        <img src={encodeURI(item.src)} alt={item.title} className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10" />
                      </div>
                    </DialogContent>
                  </Dialog>
                </Card>
              ))}
            </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MyWork;
