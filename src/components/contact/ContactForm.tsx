
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTransition } from "react";
import { Loader2, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  email: z.string().email({ message: "Invalid email address." }).max(100),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }).max(150),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(2000),
  honeypot: z.string().optional(), // Honeypot field
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    if (data.honeypot) { 
      console.log("Honeypot field filled, submission blocked.");
      toast({
        title: "Message processing...",
        description: "Thank you for your message.",
      });
      return; 
    }
    startTransition(async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({name: data.name, email: data.email, subject: data.subject, message: data.message}),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ message: "An unknown error occurred" }));
          throw new Error(errorData.message || "Something went wrong");
        }

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          // The toast will use default variant which now reflects earth tones.
          // className: "bg-primary text-primary-foreground border-primary", // Use primary for success toast
        });
        form.reset();
      } catch (error: any) {
        toast({
          title: "Error Sending Message",
          description: error.message || "Could not send your message. Please try again.",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <Card className="bg-card shadow-lg w-full">
      <CardHeader>
        <CardTitle className="font-serif text-3xl text-primary">Send a Message</CardTitle>
        <CardDescription className="text-muted-foreground">Fill out the form below and I&apos;ll respond as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="honeypot"
              render={({ field }) => (
                <FormItem className="sr-only" aria-hidden="true">
                  <FormLabel>Leave this field empty</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} tabIndex={-1} autoComplete="off" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} className="bg-input border-border focus:border-primary text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} className="bg-input border-border focus:border-primary text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Regarding your project..." {...field} className="bg-input border-border focus:border-primary text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project or query..."
                      rows={5}
                      {...field}
                      className="bg-input border-border focus:border-primary text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-semibold shadow-md hover:shadow-lg">
              {isPending ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Send className="mr-2 h-5 w-5" />
              )}
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
