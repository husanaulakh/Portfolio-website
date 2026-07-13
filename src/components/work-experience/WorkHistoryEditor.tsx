"use client";

import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkHistoryEditor() {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const savedDraft = localStorage.getItem("workHistoryDraft");
    if (savedDraft) setDescription(savedDraft);
  }, []);

  useEffect(() => {
    localStorage.setItem("workHistoryDraft", description);
  }, [description]);

  return (
    <Card className="mx-auto max-w-3xl bg-card shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl text-primary">Professional Summary</CardTitle>
        <CardDescription>
          Draft a professional summary for your resume or online profiles. Your draft is saved locally in this browser.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="work-history-description" className="text-lg font-medium">
          Your Professional Summary
        </Label>
        <Textarea
          id="work-history-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe your professional experience, key achievements, and skills..."
          rows={8}
          className="mt-2 bg-input text-base"
        />
      </CardContent>
    </Card>
  );
}
