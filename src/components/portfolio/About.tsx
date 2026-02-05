import { CheckCircle, Zap, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications using React, Next.js, and Node.js with a focus on performance and SEO."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "UI/UX & Product Design",
      description: "Crafting intuitive user interfaces and premium experiences using Figma and Tailwind CSS."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Vibe Coding & AI",
      description: "Leveraging AI-assisted tools like Cursor and Claude to accelerate development and focus on creative problem-solving."
    }
  ];

  const skills = [
    "React", "Next.js", "TypeScript", 
    "Tailwind CSS", "Node.js", "Supabase",
    "Figma", "AI-Driven Development", "Vibe Coding"
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral mb-6">
              About Me
            </h2>
            <p className="text-xl text-portfolio-muted max-w-2xl mx-auto">
              A software engineer and UI/UX designer dedicated to building high-performance, 
              aesthetically pleasing digital products through "Vibe Coding."
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Story */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-neutral">
                My Story
              </h3>
              <div className="space-y-4 text-portfolio-muted">
                <p className="leading-relaxed">
                  Based in California, I've transitioned from a background in data-driven digital marketing 
                  to technical product execution. I specialize in the "Vibe Coding" movement—leveraging AI 
                  to bridge the gap between creative vision and high-quality build.
                </p>
                <p className="leading-relaxed">
                  I typically vibe code, which allows me to build complex applications and solve technical 
                  problems effectively. While I have a basic understanding of various coding languages 
                  and am continuing to deepen my knowledge, my strength lies in using modern tools to 
                  ship products quickly and beautifully.
                </p>
                <p className="leading-relaxed">
                  My work focuses on the modern web stack, primarily React, Next.js, and Tailwind CSS. I believe 
                  software should not only function perfectly but also look and feel premium, providing users with 
                  a seamless and delightful experience.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-neutral">
                What I Bring
              </h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <motion.div key={index} className="flex gap-4" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-xl flex items-center justify-center text-white">
                        {highlight.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-neutral mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-portfolio-muted">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            className="relative bg-white rounded-3xl p-8 shadow-sm border border-transparent"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ padding: 1 }}>
              <div className="h-full w-full rounded-3xl" style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.25), rgba(34,211,238,0.25))' }} />
            </div>
            <div className="absolute inset-[1px] rounded-3xl bg-white" />
            <h3 className="text-2xl font-semibold text-portfolio-neutral mb-6 text-center">
              Core Skills & Technologies
            </h3>
            <motion.div
              className="relative flex flex-wrap gap-3 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-portfolio-light px-4 py-2 rounded-full border border-portfolio-primary/10"
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                >
                  <CheckCircle className="w-4 h-4 text-portfolio-primary" />
                  <span className="text-portfolio-neutral font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;