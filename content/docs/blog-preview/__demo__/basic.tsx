"use client";

import { SingleBlogView } from "@happect/ethereal-ui";
import type { IBlog } from "@happect/ethereal-ui";

const sampleBlog: IBlog = {
  title: "Building Modern Web Applications with AI",
  excerpt:
    "Explore how artificial intelligence is transforming the way we build, deploy, and maintain web applications in 2025.",
  updatedAt: new Date().toISOString(),
  flag: { name: "Technology" },
  summary:
    "This article explores the intersection of AI and modern web development, covering code generation tools, intelligent testing frameworks, and AI-powered design systems that are reshaping developer workflows.",
  content: `
    <h2 id="introduction">Introduction</h2>
    <p>The landscape of web development is evolving rapidly. With the advent of AI-powered tools, developers can now build sophisticated applications faster than ever before.</p>

    <h2 id="ai-code-generation">AI-Powered Code Generation</h2>
    <p>Modern AI assistants can generate <strong>production-ready code</strong> from natural language descriptions. This dramatically reduces the time spent on boilerplate and repetitive tasks.</p>
    <blockquote>The best code is the code you don't have to write. AI is making that philosophy a reality.</blockquote>

    <h3 id="benefits">Key Benefits</h3>
    <ul>
      <li>Faster prototyping and iteration cycles</li>
      <li>Reduced bugs through AI-assisted code review</li>
      <li>Automated test generation and coverage analysis</li>
      <li>Intelligent refactoring suggestions</li>
    </ul>

    <h2 id="intelligent-testing">Intelligent Testing Frameworks</h2>
    <p>AI-driven testing tools can automatically identify <em>edge cases</em>, generate test suites, and even predict where bugs are most likely to occur based on code patterns.</p>

    <h3 id="testing-example">Example: Automated Test Generation</h3>
    <pre><code class="language-typescript">// AI-generated test for a user authentication module
describe('UserAuth', () => {
  it('should reject invalid email formats', () => {
    expect(validateEmail('not-an-email')).toBe(false);
    expect(validateEmail('user@domain.com')).toBe(true);
  });

  it('should enforce password complexity', () => {
    expect(validatePassword('weak')).toBe(false);
    expect(validatePassword('Str0ng!Pass')).toBe(true);
  });
});</code></pre>

    <h2 id="design-systems">AI-Powered Design Systems</h2>
    <p>Design systems are becoming smarter with AI integration. Components can now adapt to <u>user preferences</u>, accessibility needs, and device capabilities automatically.</p>

    <h3 id="responsive-design">Responsive Intelligence</h3>
    <p>Instead of relying on fixed breakpoints, AI-powered layouts can analyze user behavior and device metrics to deliver truly adaptive interfaces.</p>
    <ol>
      <li>Analyze viewport and interaction patterns</li>
      <li>Predict optimal layout configurations</li>
      <li>Apply real-time adjustments based on context</li>
    </ol>

    <hr />

    <h2 id="conclusion">Conclusion</h2>
    <p>The fusion of AI and web development is not just a trend — it's a fundamental shift in how we build for the web. Embracing these tools today will prepare teams for the challenges and opportunities of tomorrow.</p>
  `,
  tags: "AI,Web Development,TypeScript,Testing,Design Systems",
  authorName: "Jane Doe",
  authorEmail: "jane.doe@example.com",
  prompt:
    "Create an AI agent that monitors my codebase, identifies potential bugs, and suggests fixes before they reach production.",
};

export default function BlogPreviewBasicDemo() {
  return (
    <div className="w-full h-[500px] border rounded-lg overflow-auto">
      <div className="origin-top-left scale-[0.4] w-[250%]">
        <SingleBlogView loading={false} blog={sampleBlog} error={null} />
      </div>
    </div>
  );
}
