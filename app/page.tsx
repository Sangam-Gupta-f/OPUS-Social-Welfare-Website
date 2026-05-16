import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Heart, Award, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="text-sm font-medium text-secondary">
                  Dedicated to Social Welfare
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-balance leading-tight">
                <span className="text-primary">OPUS</span> Social Welfare
                Foundation
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl">
                Seva Se Samriddhi (Service for Prosperity)
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
                Empowering communities through education, youth development, and
                comprehensive social welfare initiatives. We believe in
                transforming lives and building a stronger society, one program
                at a time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/programs">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                  >
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contacts">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <p className="text-sm text-muted-foreground">
                    Lives Impacted
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">5+</div>
                  <p className="text-sm text-muted-foreground">
                    Active Programs
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full ">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <Image
                src="/images/hero1.jpeg"
                alt="OPUS Foundation Logo"
                width={400}
                height={400}
                className="relative w-full h-full object-cover drop-shadow-2xl border border-border rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white dark:bg-slate-950 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guiding our commitment to positive social change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                To provide quality education, skill development, and
                comprehensive support to underprivileged communities. We focus
                on youth empowerment, women&apos;s welfare, and sustainable
                community development through innovative and inclusive programs.
              </p>
            </Card>

            {/* Vision Card */}
            <Card className="p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                A society where every individual has equal opportunities for
                education, growth, and prosperity. We envision a world built on
                values of compassion, integrity, and collective progress where
                social welfare becomes a shared responsibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      {/* <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to create lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Education",
                description:
                  "Quality education and literacy programs for all ages",
              },
              {
                icon: Users,
                title: "Youth Development",
                description:
                  "Internships, skill training, and mentorship programs",
              },
              {
                icon: Award,
                title: "Certification",
                description:
                  "Recognized credentials and achievement certificates",
              },
              {
                icon: Heart,
                title: "Community Care",
                description: "Healthcare, welfare, and support initiatives",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      {/* Program Impact Areas */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight">
              Areas of Impact
            </h2>

            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our initiatives focus on transforming lives through education,
              healthcare, empowerment, and skill development.
            </p>
          </div>

          {/* Impact Cards */}
          <div className="space-y-10">
            {[
              {
                title: "Education & Literacy",
                image: "/images/i1.jpeg",
                metrics: [
                  "300+ students supported",
                  "85% school completion rate",
                  "12 scholarships awarded",
                ],
                description:
                  "Our education programs have helped hundreds of students overcome barriers to learning and achieve academic excellence.",
              },
              {
                title: "Youth Development & Skills",
                image: "/images/opus-group.jpeg",
                metrics: [
                  "150+ interns trained",
                  "90% employment rate",
                  "5+ skill certifications offered",
                ],
                description:
                  "Through internships and skill training, we have prepared youth for professional careers and entrepreneurship.",
              },
              {
                title: "Community Health & Welfare",
                image:
                  "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
                metrics: [
                  "1000+ health awareness",
                  "200+ beneficiaries",
                  "50+ camps conducted",
                ],
                description:
                  "Community health initiatives have improved awareness, access to healthcare, and overall well-being.",
              },
              {
                title: "Women Empowerment",
                image: "/images/i2.jpeg",
                metrics: [
                  "80+ women trained",
                  "40% started businesses",
                  "100+ income generators",
                ],
                description:
                  "Women empowerment programs have fostered economic independence and social participation.",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg bg-white dark:bg-slate-900 py-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div
                    className={`h-72 lg:h-full overflow-hidden ${
                      index % 2 !== 0 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`p-8 flex flex-col justify-center ${
                      index % 2 !== 0 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="text-3xl font-bold mb-4 text-primary">
                      {area.title}
                    </h3>

                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {area.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-primary/5 border border-primary/10 p-4 rounded-xl text-center"
                        >
                          <p className="text-sm font-semibold text-primary">
                            {metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What People Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "OPUS Foundation changed my life by providing the education and support I needed to succeed.",
                author: "Rahul, Student",
              },
              {
                quote:
                  "The internship program was instrumental in launching my career. Highly recommend to everyone!",
                author: "Neha, Software Developer",
              },
              {
                quote:
                  "An amazing organization that genuinely cares about community development and social impact.",
                author: "Mr. Sharma, Community Leader",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-l-4 border-secondary">
                <Quote className="h-5 w-5 text-accent mb-3" />
                <p className="text-foreground/80 mb-4 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-semibold">{testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Be part of a movement dedicated to transforming lives and building
            stronger communities. Together, we can create meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Explore Programs
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-accent sm:w-auto text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
