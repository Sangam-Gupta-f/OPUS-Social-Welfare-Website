import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Quote, TrendingUp } from 'lucide-react';

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-primary">Our Impact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Stories of transformation and measurable outcomes from our programs and initiatives.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: '500+',
                label: 'Lives Directly Impacted',
                description: 'Students, youth, and community members benefited from our programs',
              },
              {
                number: '50+',
                label: 'Active Programs',
                description: 'Diverse initiatives across education, health, and community development',
              },
              {
                number: '85%',
                label: 'Program Success Rate',
                description: 'Participants achieving their goals and desired outcomes',
              },
              {
                number: '1000+',
                label: 'Volunteers & Partners',
                description: 'Dedicated individuals supporting our mission',
              },
            ].map((metric, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  <span className="text-3xl font-bold text-primary">{metric.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya',
                role: 'Program Graduate',
                story:
                  'Through the education support program, I was able to complete my schooling and secure admission to college. The mentorship provided by the foundation changed my perspective on learning.',
                achievement: 'First generation college student',
              },
              {
                name: 'Rajesh',
                role: 'Internship Alumni',
                story:
                  'The internship program gave me real-world experience and helped me develop skills that made me job-ready. I now work as a software developer and mentor other interns.',
                achievement: 'Employed, Mentoring others',
              },
              {
                name: 'Aisha',
                role: 'Women Empowerment',
                story:
                  'The women empowerment initiative provided me with skill training and confidence. I started my own small business and now support my family independently.',
                achievement: 'Entrepreneur, Income generator',
              },
            ].map((story, index) => (
              <Card key={index} className="p-6">
                <Quote className="h-5 w-5 text-accent mb-4" />
                <p className="text-foreground/80 mb-6 leading-relaxed">{story.story}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{story.name}</p>
                  <p className="text-sm text-muted-foreground mb-3">{story.role}</p>
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium">
                    {story.achievement}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact Areas */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Areas of Impact</h2>

          <div className="space-y-8">
            {[
              {
                title: 'Education & Literacy',
                metrics: ['300+ students supported', '85% school completion rate', '12 scholarships awarded'],
                description:
                  'Our education programs have helped hundreds of students overcome barriers to learning and achieve academic excellence.',
              },
              {
                title: 'Youth Development & Skills',
                metrics: ['150+ interns trained', '90% employment rate', '5+ skill certifications offered'],
                description:
                  'Through internships and skill training, we have prepared youth for professional careers and entrepreneurship.',
              },
              {
                title: 'Community Health & Welfare',
                metrics: ['1000+ health awareness', '200+ beneficiaries', '50+ camps conducted'],
                description:
                  'Community health initiatives have improved awareness, access to healthcare, and overall well-being.',
              },
              {
                title: 'Women Empowerment',
                metrics: ['80+ women trained', '40% started businesses', '100+ income generators'],
                description:
                  'Women empowerment programs have fostered economic independence and social participation.',
              },
            ].map((area, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{area.title}</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">{area.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {area.metrics.map((metric, i) => (
                    <div key={i} className="bg-secondary/5 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-secondary">{metric}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">What People Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'OPUS Foundation changed my life by providing the education and support I needed to succeed.',
                author: 'Rahul, Student',
              },
              {
                quote: 'The internship program was instrumental in launching my career. Highly recommend to everyone!',
                author: 'Neha, Software Developer',
              },
              {
                quote: 'An amazing organization that genuinely cares about community development and social impact.',
                author: 'Mr. Sharma, Community Leader',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-l-4 border-secondary">
                <Quote className="h-5 w-5 text-accent mb-3" />
                <p className="text-foreground/80 mb-4 leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold">{testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Impact Story</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Every contribution, volunteer hour, and partnership multiplies our impact. Join us in transforming lives and building stronger communities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-opacity"
          >
            Get Involved Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
