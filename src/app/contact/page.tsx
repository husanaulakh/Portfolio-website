
import ContactForm from '@/components/contact/ContactForm';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export default function ContactPage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="font-serif text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind, a question, or just want to connect? I&apos;d love to hear from you.
        </p>
      </section>

      <Separator className="bg-border/50" />

      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <aside className="md:col-span-2 space-y-8">
          <Card className="bg-card/50 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <a href="mailto:husanaulakh5@gmail.com" className="flex items-center group">
                <Mail className="h-5 w-5 text-accent mr-3 group-hover:text-primary transition-colors" />
                <span className="group-hover:text-primary transition-colors">husanaulakh5@gmail.com</span>
              </a>
              <a href="tel:+16043603566" className="flex items-center group">
                <Phone className="h-5 w-5 text-accent mr-3 group-hover:text-primary transition-colors" />
                <span className="group-hover:text-primary transition-colors">+1 (604) 360-3566</span>
              </a>
              <a href="https://www.linkedin.com/in/husanaulakh/" target="_blank" rel="noopener noreferrer" className="flex items-center group"> {/* Replace with actual LinkedIn URL */}
                <Linkedin className="h-5 w-5 text-accent mr-3 group-hover:text-primary transition-colors" />
                <span className="group-hover:text-primary transition-colors">LinkedIn Profile</span>
              </a>
              <a href="https://github.com/husanaulakh" target="_blank" rel="noopener noreferrer" className="flex items-center group"> {/* Replace with actual GitHub URL */}
                <Github className="h-5 w-5 text-accent mr-3 group-hover:text-primary transition-colors" />
                <span className="group-hover:text-primary transition-colors">GitHub Profile</span>
              </a>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-accent mr-3" />
                <span>Vancouver, BC, Canada</span> {/* General location */}
              </div>
            </CardContent>
          </Card>
          {/* 
          <Card className="bg-card/50 shadow-lg">
             <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">Office Hours</CardTitle>
             </CardHeader>
             <CardContent className="space-y-2">
                <div className="flex items-center">
                    <Clock className="h-5 w-5 text-accent mr-3" />
                    <p className="text-foreground/90">Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                </div>
                <p className="text-sm text-muted-foreground pl-8">Feel free to reach out anytime. I aim to respond within 24-48 hours.</p>
             </CardContent>
          </Card>
          */}
        </aside>
      </div>
    </div>
  );
}
