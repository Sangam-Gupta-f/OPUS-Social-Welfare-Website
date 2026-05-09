import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-primary">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Learn more about OPUS Social Welfare Foundation and our journey to
            create meaningful social impact.
          </p>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  OPUS Social Welfare Foundation was established with a vision
                  to create positive, lasting change in communities. Our name,
                  OPUS, represents our commitment to creating a
                  &quot;masterpiece&quot; of social development through our
                  comprehensive and integrated approach.
                </p>
                <p>
                  Founded on the principles of compassion, integrity, and
                  collective responsibility, we have dedicated ourselves to
                  serving the most vulnerable and underprivileged sections of
                  society. Our journey has been marked by consistent growth and
                  expanding impact across multiple dimensions of social welfare.
                </p>
                <p>
                  Today, we operate multiple programs touching thousands of
                  lives, from education and skill development to healthcare and
                  community empowerment. We believe that sustainable social
                  change requires a holistic approach that addresses the root
                  causes of poverty and inequality.
                </p>
              </div>
            </div>

            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <Image
                src="/images/about1.jpeg"
                alt="Foundation Logo"
                width={300}
                height={300}
                className="relative w-full h-full object-cover drop-shadow-2xl border border-border rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Compassion",
                description:
                  "We approach every individual with empathy, understanding their unique challenges and needs.",
              },
              {
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty, transparency, and ethical conduct in all our operations.",
              },
              {
                title: "Sustainability",
                description:
                  "We design programs that create lasting impact and empower communities for long-term growth.",
              },
              {
                title: "Inclusivity",
                description:
                  "We believe in equal opportunities and ensure our programs reach the most marginalized sections.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously evolve our approaches, leveraging new ideas to maximize our social impact.",
              },
              {
                title: "Accountability",
                description:
                  "We remain accountable to our stakeholders and are committed to delivering measurable results.",
              },
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      {/* <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Lives Transformed", suffix: "" },
              { number: "50+", label: "Active Programs", suffix: "" },
              { number: "15+", label: "Years of Service", suffix: "" },
              { number: "1000+", label: "Volunteers & Partners", suffix: "" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      {/* Impact Metrics */}
      <section className="py-16 sm:py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: "500+",
                label: "Lives Directly Impacted",
                description:
                  "Students, youth, and community members benefited from our programs",
              },
              {
                number: "5+",
                label: "Active Programs",
                description:
                  "Diverse initiatives across education, health, and community development",
              },
              {
                number: "85%",
                label: "Program Success Rate",
                description:
                  "Participants achieving their goals and desired outcomes",
              },
              {
                number: "1000+",
                label: "Volunteers & Partners",
                description: "Dedicated individuals supporting our mission",
              },
            ].map((metric, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  <span className="text-3xl font-bold text-primary">
                    {metric.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leader driving our mission toward meaningful
              social impact and community development.
            </p>
          </div>

          <div className="overflow-hidden border-0 shadow-xl bg-white dark:bg-slate-900">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Leader Image */}
              <div className="relative h-[400px] lg:h-full">
                <img
                  src="/images/f1-opus.jpeg" // replace with your image path
                  alt="Leader"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Leader Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block w-fit px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Founder & President
                </span>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Mr. Hemraj kharol
                </h3>

                {/* Education */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                    Education
                  </h4>

                  <ul className="space-y-2 text-muted-foreground">
                    <li>• BA Economics (Hons )</li>
                    <li>• Master's in English and Economics.</li>
                    <li>• Certified Community Leadership Specialist</li>
                  </ul>
                </div>

                {/* About */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                    About
                  </h4>

                  <p className="text-muted-foreground leading-relaxed">
                    Mr. Hemraj kharol is a passionate social reformer and
                    community leader with more than 10 years of experience in
                    education, healthcare, and rural development initiatives.
                    Under his leadership, the organization has successfully
                    impacted thousands of lives through sustainable welfare
                    programs and community-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
