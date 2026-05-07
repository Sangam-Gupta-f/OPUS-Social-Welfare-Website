import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Briefcase, Globe, Heart, Brain } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Education Excellence',
      description: 'Comprehensive education programs for students of all ages, including literacy programs, skill development, and academic scholarships.',
      highlights: ['School support', 'Vocational training', 'Scholarships', 'Online learning'],
      category: 'Education',
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      description: 'Internship programs, mentorship, and career guidance designed to prepare youth for professional success.',
      highlights: ['Internships', 'Mentorship', 'Career guidance', 'Leadership training'],
      category: 'Youth',
    },
    {
      icon: Briefcase,
      title: 'Skill Development',
      description: 'Job-ready skill training programs in technical and soft skills to enhance employability.',
      highlights: ['Technical skills', 'Soft skills', 'Certification', 'Job placement'],
      category: 'Skills',
    },
    {
      icon: Globe,
      title: 'Community Outreach',
      description: 'Community engagement initiatives focused on awareness, health, and social development.',
      highlights: ['Awareness campaigns', 'Health programs', 'Social support', 'Event management'],
      category: 'Community',
    },
    {
      icon: Heart,
      title: 'Women Empowerment',
      description: 'Programs dedicated to supporting women&apos;s education, health, and economic independence.',
      highlights: ['Women education', 'Health awareness', 'Income generation', 'Safety programs'],
      category: 'Welfare',
    },
    {
      icon: Brain,
      title: 'Child Development',
      description: 'Focused programs for child welfare, education, and holistic development in underprivileged communities.',
      highlights: ['Child education', 'Nutrition support', 'Play therapy', 'Mentoring'],
      category: 'Children',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-primary">Our Programs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive initiatives designed to create sustainable impact across education, youth development, and community welfare.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:border-primary/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{program.category}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Key Areas:</p>
                  <ul className="space-y-1">
                    {program.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Process */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">How Our Programs Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'We identify community needs and individual requirements through comprehensive assessment.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Custom programs are designed to address specific needs and maximize impact.',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Programs are delivered with dedicated support and continuous monitoring.',
              },
              {
                step: '04',
                title: 'Evaluation',
                description: 'We track outcomes and feedback to ensure program effectiveness and improvements.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Involved in Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you want to participate, volunteer, or contribute, there are many ways to be part of our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Join a Program
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Volunteer With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
