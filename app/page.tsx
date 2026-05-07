import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Heart, Award } from "lucide-react";

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
                <Link href="#">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                  >
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#">
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
      <section className="py-20 sm:py-32">
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
            <Link href="#">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Explore Programs
              </Button>
            </Link>
            <Link href="#">
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
