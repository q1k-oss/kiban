"use client";
import { useRef } from "react";

import { Button, IStepItem, Stepper, StepperRef } from "@q1k-oss/kiban";

export default function StepperDemo() {
  const stepperRef = useRef<StepperRef>(null);

  const steps: IStepItem[] = [
    {
      label: "Open VS Code",
      description: "Stare at it like it owes you money",
      status: "on_going",
    },
    {
      label: "Overthink the Architecture",
      description: "Draw 47 diagrams, use none of them",
      status: "pending",
    },
    {
      label: "Write 3 Lines of Code",
      description: "Take a 2 hour break, you earned it legend",
      status: "pending",
      subSteps: [
        {
          label: "Forget a Semicolon",
          description: "Entire app explodes, universe collapses",
          status: "pending",
        },
        {
          label: "Ask ChatGPT",
          description: "It confidently gives you wrong code",
          status: "pending",
        },
        {
          label: "Copy from Stack Overflow",
          description: "Answer from 2012, somehow still works",
          status: "pending",
        },
      ],
    },
    {
      label: "git push --force",
      description: "Delete everyone's work, assert dominance",
      status: "pending",
      subSteps: [
        {
          label: "Mass Panic in Slack",
          description: "17 people typing... 0 solutions",
          status: "pending",
        },
        {
          label: "Blame DNS",
          description: "It's always DNS, nobody can prove otherwise",
          status: "pending",
        },
      ],
    },
    {
      label: "Update Resume",
      description: "10x Developer & Professional Googler",
      status: "pending",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-12 p-8">
      <Stepper
        ref={stepperRef}
        steps={steps}
        orientation="vertical"
        
        styles={{
          connectorGap: 60,
          subConnectorGap: 44,
          labelDescriptionGap:'2px',
        
        }}
      />

      <div className="flex items-center gap-4">
        <Button onClick={() => stepperRef.current?.prev()}>Previous</Button>
        <Button onClick={() => stepperRef.current?.next()}>Next</Button>
      </div>
    </div>
  );
}
