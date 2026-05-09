'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-primary">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have questions or want to get involved? We&apos;d love to hear from you. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '+91 99288 54662',
                subtext: 'Call us during business hours',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@opusfoundation.org',
                subtext: 'We respond within 24 hours',
              },
              {
                icon: MapPin,
                title: 'Address',
                content: 'Nasnoda, Dudu',
                subtext: 'Rajasthan, India',
              },
              {
                icon: Clock,
                title: 'Hours',
                content: 'Mon - Fri: 9 AM - 6 PM',
                subtext: 'IST (Indian Standard Time)',
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="font-medium text-foreground mb-1">{item.content}</p>
                <p className="text-sm text-muted-foreground">{item.subtext}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="partnership">Partnership</option>
                    <option value="certificate">Certificate Verification</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 bg-primary hover:bg-primary/90"
                  disabled={submitted}
                >
                  <Send className="h-4 w-4" />
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </Button>

                {submitted && (
                  <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-lg">
                    <p className="text-secondary font-medium">
                      Thank you for reaching out! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">How We Can Help</h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Program Information',
                    description: 'Learn about our various programs, eligibility criteria, and how to apply.',
                  },
                  {
                    title: 'Volunteer With Us',
                    description: 'Interested in volunteering? We have many opportunities to contribute your skills and time.',
                  },
                  {
                    title: 'Partnership & Sponsorship',
                    description: 'Explore partnership opportunities or discuss sponsoring our initiatives.',
                  },
                  {
                    title: 'Certificate Verification',
                    description: 'Verify certificates issued by OPUS or inquire about certification programs.',
                  },
                  {
                    title: 'Donations & Support',
                    description: 'Learn how you can support our mission through donations and contributions.',
                  },
                  {
                    title: 'Feedback & Suggestions',
                    description: 'Share your feedback and suggestions to help us improve our services.',
                  },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl h-96 flex items-center justify-center border-2 border-dashed border-primary/20">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-foreground font-semibold mb-2">OPUS Social Welfare Foundation</p>
              <p className="text-muted-foreground">Nasnoda, Dudu, Rajasthan, India</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
