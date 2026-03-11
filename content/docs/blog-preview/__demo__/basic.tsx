"use client";

import { useState } from "react";

import { AppIcon, BlogPreview, Button } from "@q1k-oss/kiban";
import type { Blog } from "@q1k-oss/kiban";

const sampleBlog: Blog = {
  title: "Building Modern Web Applications with AI",
  excerpt:
    "Explore how artificial intelligence is transforming the way we build, deploy, and maintain web applications in 2025.",
  updatedAt: new Date().toISOString(),
  flag: { name: "Technology" },
  summary:
    "This article explores the intersection of AI and modern web development, covering code generation tools, intelligent testing frameworks, and AI-powered design systems that are reshaping developer workflows.",
  content: `
  
  <h3 id=\"introduction\"><a href=\"#introduction\" class=\"heading-anchor\">Introduction</a></h3><p>State is the heart of every React application.<br>Without state, React components would be static and unresponsive.</p><p>As applications grow, managing state becomes harder because:</p><ul><li><p>Data flows across many components</p></li><li><p>Updates trigger unexpected re-renders</p></li><li><p>Performance issues appear gradually</p></li></ul><p>Understanding how React handles state internally helps developers write code that scales gracefully.</p><blockquote><p>Good state management reduces bugs more than any library ever will.</p></blockquote><hr><h3 id=\"what-is-state-in-react\"><a href=\"#what-is-state-in-react\" class=\"heading-anchor\">What Is State in React?</a></h3><p>State represents mutable data that belongs to a component.<br>When state changes, React schedules a re-render.</p><p>Key characteristics:</p><ul><li><p>State is local by default</p></li><li><p>State updates are asynchronous</p></li><li><p>Multiple updates may be batched together</p></li></ul><p>State is not immediately updated after calling a setter function.</p><hr><h3 id=\"how-react-processes-state-updates\"><a href=\"#how-react-processes-state-updates\" class=\"heading-anchor\">How React Processes State Updates</a></h3><p>When you call a state setter:</p><ol><li><p>React queues the update</p></li><li><p>React schedules a re-render</p></li><li><p>React compares the new Virtual DOM with the previous one</p></li><li><p>Only necessary DOM updates are committed</p></li></ol><table style=\"min-width: 100px;\">
<colgroup><col style=\"min-width: 25px;\"><col style=\"min-width: 25px;\"><col style=\"min-width: 25px;\"><col style=\"min-width: 25px;\"></colgroup>
<tbody>
   <tr>
      <th colspan=\"1\" rowspan=\"1\">
         <p>Planet</p>
      </th>
      <th colspan=\"1\" rowspan=\"1\">
         <p>Yelp Review</p>
      </th>
      <th colspan=\"1\" rowspan=\"1\">
         <p>Stars</p>
      </th>
      <th colspan=\"1\" rowspan=\"1\">
         <p>Would Visit Again</p>
      </th>
   </tr>
   <tr>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Mercury</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Too hot, no AC</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">1/5</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Melted on arrival</span></p>
      </td>
   </tr>
   <tr>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Venus</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Smells like rotten eggs</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">0/5</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Absolutely not</span></p>
      </td>
   </tr>
   <tr>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Earth</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Decent, but the WiFi drops</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">3/5</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Stuck here anyway</span></p>
      </td>
   </tr>
   <tr>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Mars</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Empty, no restaurants</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">2/5</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Elon says yes</span></p>
      </td>
   </tr>
   <tr>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Jupiter</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Beautiful but gassy</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">2/5</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Couldn't find parking</span></p>
      </td>
   </tr>
   <tr>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Saturn</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Nice ring, bad personality</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">3/5</span></p>
      </td>
      <td colspan=\"1\" rowspan=\"1\">
         <p><span style=\"color: rgb(204, 204, 204); font-size: 13px;\">Only for Social Media</span></p>
      </td>
   </tr>
</tbody>
</table><p>Example:</p><pre><code>const [count, setCount] = useState(0);\n\nfunction increment() {\n  setCount(prev =&gt; prev + 1);\n}\n</code></pre><p>Using the updater function ensures correctness when updates are batched.</p><hr><h3 id=\"props-and-one-way-data-flow\"><a href=\"#props-and-one-way-data-flow\" class=\"heading-anchor\">Props and One-Way Data Flow</a></h3><p>Props are read-only values passed from parent to child components.</p><p>Important rules:</p><ul><li><p>Props should never be mutated</p></li><li><p>Child components depend on parent state</p></li><li><p>Data flows downward only</p></li></ul><p>This one-way flow makes applications predictable.</p><blockquote><p>Predictability is more valuable than flexibility.</p></blockquote><hr><h3 id=\"context-api-and-global-state\"><a href=\"#context-api-and-global-state\" class=\"heading-anchor\">Context API and Global State</a></h3><p>Context solves the problem of prop drilling.</p><p>Use cases:</p><ul><li><p>Authentication state</p></li><li><p>Theme configuration</p></li><li><p>Language preferences</p></li></ul><p>Example:</p><pre><code>const ThemeContext = createContext('light');\n\nfunction App() {\n  return (\n    &lt;ThemeContext.Provider value=\"dark\"&gt;\n      &lt;Layout /&gt;\n    &lt;/ThemeContext.Provider&gt;\n  );\n}\n</code></pre><p>Context updates cause all consuming components to re-render, which can impact performance if overused.</p><hr><h3 id=\"performance-implications\"><a href=\"#performance-implications\" class=\"heading-anchor\">Performance Implications</a></h3><p>Common performance problems:</p><ul><li><p>Storing too much state globally</p></li><li><p>Frequent context updates</p></li><li><p>Derived state stored unnecessarily</p></li></ul><p>Solutions:</p><ul><li><p>Lift state only when needed</p></li><li><p>Memoize components</p></li><li><p>Split contexts by concern</p></li></ul><hr><h3 id=\"conclusion\"><a href=\"#conclusion\" class=\"heading-anchor\">Conclusion</a></h3><p>React does not magically manage state for you — it follows strict rules.<br>Understanding those rules gives you control.</p><blockquote><p>State should be simple, predictable, and intentional.</p></blockquote>
   
  `,
  tags: "AI,Web Development,TypeScript,Testing,Design Systems",
  authorName: "Jane Doe",
  authorEmail: "jane.doe@example.com",
  prompt:
    "Create an AI agent that monitors my codebase, identifies potential bugs, and suggests fixes before they reach production.",
    readTime: "4 min read"
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
