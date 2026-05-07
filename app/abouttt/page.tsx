import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-primary">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Learn more about OPUS Social Welfare Foundation and our journey to create meaningful social impact.
          </p>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  OPUS Social Welfare Foundation was established with a vision to create positive, lasting change in communities. 
                  Our name, OPUS, represents our commitment to creating a &quot;masterpiece&quot; of social development through our 
                  comprehensive and integrated approach.
                </p>
                <p>
                  Founded on the principles of compassion, integrity, and collective responsibility, we have dedicated ourselves 
                  to serving the most vulnerable and underprivileged sections of society. Our journey has been marked by consistent 
                  growth and expanding impact across multiple dimensions of social welfare.
                </p>
                <p>
                  Today, we operate multiple programs touching thousands of lives, from education and skill development to healthcare 
                  and community empowerment. We believe that sustainable social change requires a holistic approach that addresses 
                  the root causes of poverty and inequality.
                </p>
              </div>
            </div>

            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <Image
                src="/images/opus-logo.png"
                alt="Foundation Logo"
                width={300}
                height={300}
                className="relative w-full h-full object-contain"
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
                title: 'Compassion',
                description: 'We approach every individual with empathy, understanding their unique challenges and needs.',
              },
              {
                title: 'Integrity',
                description: 'We maintain the highest standards of honesty, transparency, and ethical conduct in all our operations.',
              },
              {
                title: 'Sustainability',
                description: 'We design programs that create lasting impact and empower communities for long-term growth.',
              },
              {
                title: 'Inclusivity',
                description: 'We believe in equal opportunities and ensure our programs reach the most marginalized sections.',
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve our approaches, leveraging new ideas to maximize our social impact.',
              },
              {
                title: 'Accountability',
                description: 'We remain accountable to our stakeholders and are committed to delivering measurable results.',
              },
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Lives Transformed', suffix: '' },
              { number: '50+', label: 'Active Programs', suffix: '' },
              { number: '15+', label: 'Years of Service', suffix: '' },
              { number: '1000+', label: 'Volunteers & Partners', suffix: '' },
            ].map((stat, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Organization */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Founder & President',
                bio: 'Visionary leader with 20+ years of experience in social development and community empowerment.',
              },
              {
                name: 'Priya Sharma',
                role: 'Director of Programs',
                bio: 'Dedicated professional focused on designing and implementing impactful educational and welfare programs.',
              },
              {
                name: 'Amit Patel',
                role: 'Director of Operations',
                bio: 'Operations expert ensuring efficient delivery of programs and sustainable organizational growth.',
              },
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
