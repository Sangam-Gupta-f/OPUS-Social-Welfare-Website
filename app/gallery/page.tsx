"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const galleryImages = [
    {
      title: "Education Support Program",
      image: "/images/hero1.jpeg", // replace with your image path
      category: "Education",
    },
    {
      title: "Women Empowerment Workshop",
      image: "/images/i1.jpeg",
      category: "Women Empowerment",
    },
    {
      title: "Community Health Camp",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
      category: "Healthcare",
    },
    {
      title: "Youth Skill Development",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      category: "Youth Development",
    },
    {
      title: "Food Distribution Drive",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
      category: "Community Welfare",
    },
    {
      title: "Tree Plantation Campaign",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
      category: "Environment",
    },
    {
      title: "Volunteer Activities",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
      category: "Volunteers",
    },
    {
      title: "Children Learning Center",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
      category: "Education",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold tracking-tight"
          >
            Our Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            Explore moments of impact, hope, empowerment, and transformation
            through our initiatives and community programs.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {[
              "All",
              "Education",
              "Healthcare",
              "Women Empowerment",
              "Youth Development",
              "Environment",
            ].map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300
                ${
                  index === 0
                    ? "bg-primary text-white border-primary"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden py-0 border-0 shadow-lg group cursor-pointer bg-white dark:bg-slate-900">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                      <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary text-white text-xs font-medium mb-3">
                        {item.category}
                      </span>

                      <h3 className="text-white text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-10 sm:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Be Part of the Change</h2>

            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Together, we can create brighter futures and stronger communities.
              Join us in making a lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary font-semibold px-8 py-3 rounded-xl hover:scale-105 transition">
                Become a Volunteer
              </button>

              <button className="border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-primary transition">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
