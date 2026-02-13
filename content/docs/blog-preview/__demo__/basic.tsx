"use client";

import { useState } from "react";

import { AppIcon, BlogPreview, Button } from "@happect/ethereal-ui";
import type { Blog } from "@happect/ethereal-ui";

const sampleBlog: Blog = {
  title: "Building Modern Web Applications with AI",
  excerpt:
    "Explore how artificial intelligence is transforming the way we build, deploy, and maintain web applications in 2025.",
  updatedAt: new Date().toISOString(),
  flag: { name: "Technology" },
  summary:
    "This article explores the intersection of AI and modern web development, covering code generation tools, intelligent testing frameworks, and AI-powered design systems that are reshaping developer workflows.",
  content: `
  
  <h1 id="introduction"><a href="#introduction" class="heading-anchor">#</a><span>Introduction</span></h1><p>Focus has become one of the most valuable skills of the modern era. While intelligence and talent remain important, the ability to concentrate deeply on important tasks often separates average performers from exceptional ones.</p><p>Deep work is not about working longer hours. It is about working with intensity and intention. A single hour of fully concentrated effort can produce more meaningful output than an entire day filled with interruptions.</p><hr><h3 id="the-psychology-behind-focus"><a href="#the-psychology-behind-focus" class="heading-anchor">#</a><span>The Psychology Behind Focus</span></h3><p>Our brains are not designed for constant context switching. Every notification, message, or quick glance at social media forces the brain to shift attention. These shifts consume cognitive resources and reduce overall mental efficiency.</p><p>Research in cognitive psychology suggests that sustained focus strengthens neural circuits related to learning and problem-solving. When we practice deep concentration, our brain adapts by becoming more efficient at complex thinking.</p><p>In contrast, chronic distraction trains the brain to crave novelty. This reduces patience and makes long-term projects feel overwhelming.</p><hr><h3 id="benefits-of-deep-work"><a href="#benefits-of-deep-work" class="heading-anchor">#</a><span>Benefits of Deep Work</span></h3><ol><li><p>Higher Quality Output<br>Focused effort leads to fewer mistakes and more refined thinking.</p></li><li><p>Faster Skill Development<br>Deliberate practice accelerates mastery.</p></li><li><p>Greater Satisfaction<br>Completing meaningful work provides deeper fulfillment than finishing small, scattered tasks.</p></li><li><p>Competitive Advantage<br>In a distracted world, the ability to focus deeply is rare and valuable.</p></li></ol><hr><h3 id="practical-strategies-to-practice-deep-work"><a href="#practical-strategies-to-practice-deep-work" class="heading-anchor">#</a><span>Practical Strategies to Practice Deep Work</span></h3><p>Schedule Focus Blocks<br>Dedicate specific hours each day for uninterrupted work. Treat these blocks as non-negotiable appointments.</p><p>Eliminate Distractions<br>Turn off notifications. Keep your phone away. Use website blockers if necessary.</p><p>Set Clear Goals<br>Before starting a deep work session, define exactly what you want to accomplish.</p><p>Work in Time Intervals<br>Techniques like the 60–90 minute focus cycle can maintain mental energy without burnout.</p><p>Create a Ritual<br>Start deep work sessions with a small routine — such as organizing your desk or writing your goal — to signal your brain that it’s time to concentrate.</p><hr><h3 id="overcoming-common-challenges"><a href="#overcoming-common-challenges" class="heading-anchor">#</a><span>Overcoming Common Challenges</span></h3><p>Many people struggle initially because their attention span has weakened. Start small. Even 30 minutes of focused work is progress. Gradually increase duration as your concentration improves.</p><p>Another challenge is the fear of missing out — checking messages or updates constantly. Remind yourself that most interruptions are not urgent. Protecting your focus protects your future success.</p><hr><h3 id="long-term-impact"><a href="#long-term-impact" class="heading-anchor">#</a><span>Long-Term Impact</span></h3><p>Deep work compounds over time. A person who practices focused effort daily will accumulate skills, knowledge, and achievements that far exceed those who work in fragmented patterns.</p><p>The ability to concentrate deeply is not just a productivity tool — it is a life skill. It shapes your career trajectory, personal growth, and creative output.</p><hr><h3 id="conclusion"><a href="#conclusion" class="heading-anchor">#</a><span>Conclusion</span></h3><p>In a noisy world, focus is power. Deep work is not about isolation or rigidity; it is about choosing what deserves your full attention. By cultivating this habit, you build discipline, improve performance, and create meaningful results that stand the test of time.</p><p></p>
  `,
  tags: "AI,Web Development,TypeScript,Testing,Design Systems",
  authorName: "Jane Doe",
  authorEmail: "jane.doe@example.com",
  prompt:
    "Create an AI agent that monitors my codebase, identifies potential bugs, and suggests fixes before they reach production.",
};

export default function BlogPreviewBasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition h-fit"
      >
        Click to Preview Blog
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black backdrop-blur-sm no-scrollbar">
          <div className="relative w-full h-full bg-black overflow-y-auto shadow-2xl no-scrollbar">
            <Button
              onClick={() => setOpen(false)}
              className="sticky top-3 float-right mr-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border-3 text-secondary-text hover:text-primary-text transition"
            >
              <AppIcon iconName="x" size={20} />
            </Button>
            <div className="p-6 no-scrollbar">
              <BlogPreview loading={false} blog={sampleBlog} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
