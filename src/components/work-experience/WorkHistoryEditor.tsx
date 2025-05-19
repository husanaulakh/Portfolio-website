
"use client";

import { useState, useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Sparkles, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { rewriteWorkHistory, type RewriteWorkHistoryInput } from '@/ai/flows/rewrite-work-history';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function WorkHistoryEditor() {
  const [description, setDescription] = useState<string>('');
  const [desiredTone, setDesiredTone] = useState<string>('Professional');
  const [keywords, setKeywords] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    const savedDraft = localStorage.getItem('workHistoryDraft');
    if (savedDraft) {
      setDescription(savedDraft);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workHistoryDraft', description);
  }, [description]);

  const handleRewrite = async () => {
    if (!description.trim()) {
        toast({
            title: "Input Required",
            description: "Please enter some text in your professional summary to rewrite.",
            variant: "destructive"
        });
        return;
    }
    startTransition(async () => {
      try {
        const input: RewriteWorkHistoryInput = {
          currentDescription: description,
          desiredTone: desiredTone || undefined,
          keywords: keywords || undefined,
        };
        const result = await rewriteWorkHistory(input);
        setDescription(result.rewrittenDescription);
        toast({
          title: "Success!",
          description: "Work history rewritten by AI.",
          // Toast will use accent color by default if not specified, which is now terracotta.
          // className: "bg-accent text-accent-foreground border-accent",
        });
        setIsModalOpen(false);
      } catch (error) {
        console.error("Failed to rewrite work history:", error);
        toast({
          title: "Error",
          description: "Failed to rewrite work history. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <Card className="bg-card shadow-lg max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="font-serif text-3xl flex items-center text-primary">
          <Sparkles className="h-6 w-6 mr-2 text-primary" /> {/* Was accent, now primary */}
          AI-Powered Summary
        </CardTitle>
        <CardDescription>
          Craft a compelling narrative about your professional background. Use the AI assistant to refine your description for your resume or online profiles.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="work-history-description" className="text-lg font-medium">Your Professional Summary</Label>
          <Textarea
            id="work-history-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your professional experience, key achievements, and skills... (e.g., for your LinkedIn summary or resume intro)"
            rows={8}
            className="mt-2 bg-input border-border focus:border-primary text-base"
          />
          <p className="text-sm text-muted-foreground mt-1">This draft is saved locally in your browser.</p>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground shadow-sm"> {/* Was accent, now primary */}
              <Sparkles className="mr-2 h-4 w-4" />
              Rewrite with AI
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[480px] bg-card border-border">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-primary">AI Rewrite Options</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Provide guidance for the AI to tailor the rewritten description.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-1.5">
                <Label htmlFor="currentDescriptionModal" className="text-muted-foreground">Original Text (for reference)</Label>
                 <Textarea
                  id="currentDescriptionModal"
                  value={description}
                  readOnly
                  rows={3}
                  className="bg-input/80 border-border/70 text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="desiredTone">Desired Tone</Label>
                <Input
                  id="desiredTone"
                  value={desiredTone}
                  onChange={(e) => setDesiredTone(e.target.value)}
                  placeholder="e.g., Professional, Concise, Creative"
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="keywords">Keywords to Emphasize</Label>
                <Input
                  id="keywords"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g., leadership, innovation, problem-solving"
                  className="bg-input border-border focus:border-primary"
                />
              </div>
            </div>
            <DialogFooter className="gap-2 sm:gap-0">
              <DialogClose asChild>
                <Button variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10 hover:text-secondary">Cancel</Button>
              </DialogClose>
              <Button type="button" onClick={handleRewrite} disabled={isPending || !description.trim()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Generate Rewrite
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
