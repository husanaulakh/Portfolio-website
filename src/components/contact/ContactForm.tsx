
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
  const [previewOnly, setPreviewOnly] = useState(false);
  const devToolsEnabled = process.env.NEXT_PUBLIC_CONTACT_DEV_TOOLS === "true";
  const { toast } = useToast();

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
  const emailValue = form.watch("email");

  async function onSubmit(data: ContactFormValues) {
    if (data.honeypot) {
      toast({
        title: "Message processing...",
        description: "Thank you for your message.",
      });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, previewOnly }),
      });
      const result: { message?: string; preview?: boolean } = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "We could not send your message. Please try again.");
      }

      if (previewOnly && result.preview !== true) {
        throw new Error('Preview was not confirmed by the server.');
      }
      toast({
        title: result.preview ? "Preview Complete" : "Message Sent!",
        description: result.preview
          ? "Preview mode is on, so no email was sent."
          : "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error: unknown) {
      toast({
        title: "Error Sending Message",
        description: error instanceof Error
          ? error.message
          : "We could not send your message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Card className="bg-card shadow-lg w-full">
      <CardHeader>
        <CardTitle className="font-serif text-3xl text-primary">Send a Message</CardTitle>
        <CardDescription className="text-muted-foreground">Fill out the form below and I&apos;ll respond as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        {devToolsEnabled && (
          <div className="mb-6 flex items-center justify-between gap-4 rounded-lg border border-dashed border-primary/40 bg-primary/5 p-3 text-sm">
            <div>
              <p className="font-semibold text-primary">Developer preview mode</p>
              <p className="text-muted-foreground">
                {previewOnly ? "Submissions will not send email." : "Submissions will send through Resend."}
              </p>
            </div>
            <Button
              type="button"
              variant={previewOnly ? "secondary" : "outline"}
              size="sm"
              onClick={() => setPreviewOnly((enabled) => !enabled)}
              aria-pressed={previewOnly}
            >
              {previewOnly ? "Preview only" : "Live email"}
            </Button>
          </div>
        )}
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
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      autoComplete="email"
                      list="contact-email-suggestions"
                      {...field}
                      className="bg-input border-border focus:border-primary text-base"
                    />
                  </FormControl>
                  {emailValue && !emailValue.includes("@") && (
                    <datalist id="contact-email-suggestions">
                      {["gmail.com", "outlook.com", "hotmail.com", "icloud.com", "yahoo.com"].map((domain) => (
                        <option key={domain} value={emailValue + "@" + domain} />
                      ))}
                    </datalist>
                  )}
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
            <Button type="submit" disabled={form.formState.isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-semibold shadow-md hover:shadow-lg">
              {form.formState.isSubmitting ? (
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
