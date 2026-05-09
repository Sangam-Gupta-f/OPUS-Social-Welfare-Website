import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Award, Download, Search } from 'lucide-react';

export default function CertificatesPage() {
  const certificates = [
    {
      id: 1,
      title: 'Internship Completion Certificate',
      description: 'Awarded to participants who successfully complete our internship programs with excellence.',
      image: '/images/certificate-1-internship.jpg',
      issueCount: '150+ issued',
    },
    {
      id: 2,
      title: 'Excellence in Service Award',
      description: 'Recognizes outstanding contribution and exceptional service to community welfare initiatives.',
      image: '/images/certificate-2-excellence.jpg',
      issueCount: '45+ issued',
    },
    {
      id: 3,
      title: 'Teaching & Education Support Certificate',
      description: 'Acknowledges dedicated educators and mentors who support educational development.',
      image: '/images/certificate-3-education.jpg',
      issueCount: '80+ issued',
    },
    {
      id: 4,
      title: 'Awareness Campaign Achievement',
      description: 'Honors individuals and teams for their impactful awareness and outreach campaigns.',
      image: '/images/certificate-4-awareness.jpg',
      issueCount: '60+ issued',
    },
    {
      id: 5,
      title: 'Leadership & Mentorship Certificate',
      description: 'Presented to exceptional leaders and mentors who inspire and guide others.',
      image: '/images/certificate-5-leadership.jpg',
      issueCount: '35+ issued',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-12 w-12 text-primary" />
            <h1 className="text-5xl sm:text-6xl font-bold text-primary">Our Certificates</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Professional certifications recognizing achievements, excellence, and commitment to social welfare and community development.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-primary/10 hover:border-primary/30"
              >
                <div className="grid grid-cols-3 gap-4 p-6">
                  {/* Certificate Image - 2/3 width */}
                  <div className="col-span-2">
                    <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Certificate Info - 1/3 width */}
                  <div className="col-span-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{cert.description}</p>
                      <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                        {cert.issueCount}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 gap-2">
                      <Download className="h-4 w-4" />
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certificate Details Section */}
          <div className="bg-white dark:bg-slate-950 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-8">Certificate Details & Benefits</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">What Our Certificates Represent</h3>
                <ul className="space-y-3">
                  {[
                    'Recognition of achievement and excellence',
                    'Proof of participation and completion',
                    'Verification of skills and training',
                    'Boost to professional credibility',
                    'Gateway to opportunities and advancement',
                    'Lifetime achievement documentation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Certificate Verification</h3>
                <p className="text-foreground/80 mb-6">
                  All OPUS certificates are officially issued and can be verified through our certificate verification system. 
                  Each certificate is unique with a certificate number for authenticity.
                </p>
                <Card className="p-6 bg-secondary/5 border-secondary/20">
                  <p className="text-sm text-muted-foreground mb-4">
                    To verify a certificate or learn more about certification programs, please contact us:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="text-foreground">
                      <span className="font-semibold">Email:</span> certificates@opusfoundation.org
                    </li>
                    <li className="text-foreground">
                      <span className="font-semibold">Phone:</span> +91 99288 54662
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Programs */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Certification Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Internship Certificate Program',
                duration: '21 Days - 6 Months',
                requirements: [
                  'Active participation in internship',
                  'Completion of assigned projects',
                  'Minimum 80% attendance',
                  'Positive feedback from mentors',
                ],
              },
              {
                title: 'Skills Certification Program',
                duration: '30-90 Days',
                requirements: [
                  'Completion of training modules',
                  'Practical skill demonstration',
                  'Assessment and evaluation',
                  'Project implementation',
                ],
              },
              {
                title: 'Community Leadership Program',
                duration: '3-6 Months',
                requirements: [
                  'Community service participation',
                  'Leadership training completion',
                  'Mentorship contribution',
                  'Social impact demonstration',
                ],
              },
              {
                title: 'Educational Excellence Program',
                duration: 'Academic Year',
                requirements: [
                  'Academic performance maintenance',
                  'Consistent engagement',
                  'Community contribution',
                  'Final assessment passing',
                ],
              },
            ].map((program, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                <p className="text-sm text-secondary font-semibold mb-4">{program.duration}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Requirements:</p>
                  <ul className="space-y-2">
                    {program.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Search */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-2 text-center">Verify Your Certificate</h2>
            <p className="text-muted-foreground text-center mb-8">
              Enter your certificate number or name to verify authenticity
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter certificate number"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                <Search className="h-4 w-4" />
                Verify
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Earn Your Certificate Today</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our programs and earn recognized certificates that enhance your professional profile and open new opportunities.
          </p>
          <a
            href="/programs"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-opacity"
          >
            Explore Programs
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
