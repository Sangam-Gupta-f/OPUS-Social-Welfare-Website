import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">OPUS Foundation</h3>
            <p className="text-sm opacity-90">
              Dedicated to the Service of Society. Empowering communities
              through education, youth development, and social welfare
              initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Intenrship Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/certificates"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+91 99288 54662</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@opusfoundation.org</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Nasnoda, Dudu, Rajasthan</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/178DfGFcHk/"
                className="p-2 rounded-full opacity-90 hover:opacity-100 transition-opacity hover:bg-primary-foreground/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 rounded-full opacity-90 hover:opacity-100 transition-opacity hover:bg-primary-foreground/20"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/opus_foundation_?utm_source=qr&igsh=c25zNHN5am5teGt6"
                className="p-2 rounded-full opacity-90 hover:opacity-100 transition-opacity hover:bg-primary-foreground/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-center md:text-left">
            <p className="opacity-90">
              &copy; {currentYear} OPUS Social Welfare Foundation.Desined By{" "}
              <Link
                href="https://blackpapers.in"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                Blackpapers
              </Link>{" "}
              All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end gap-4">
              <Link
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
