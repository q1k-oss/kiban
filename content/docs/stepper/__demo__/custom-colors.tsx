"use client";
import { useRef } from "react";

import { Button, IStepItem, Stepper, StepperRef } from "@q1k-oss/kiban";

export default function StepperCustomColorsDemo() {
  const stepperRef = useRef<StepperRef>(null);

  const steps: IStepItem[] = [
    { label: "Open Gym Door", description: "Hardest part honestly", status: "on_going" },
    { label: "Take a Selfie", description: "Flex in mirror for 20 mins", status: "pending" },
    {
      label: "Attempt Exercise",
      description: "How hard can it be, right?",
      status: "pending",
      subSteps: [
        { label: "Touch a Dumbbell", description: "Just holding counts as a rep", status: "pending" },
        { label: "Sit on a Machine", description: "Scroll TikTok for 40 mins", status: "pending" },
      ],
    },
    { label: "Reward Yourself", description: "Triple cheeseburger, earned it", status: "pending" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-12 p-8">
      <Stepper
        ref={stepperRef}
        steps={steps}
        orientation="horizontal"
        colors={{
          completedBg: "#22c55e",
          completedBorder: "#16a34a",
          completedText: "#ffffff",
          activeBg: "transparent",
          activeBorder: "#3b82f6",
          activeText: "#3b82f6",
          pendingBorder: "#374151",
          pendingText: "#6b7280",
          connectorFilled: "#22c55e",
          connectorEmpty: "#374151",
        }}
      />

      <div className="flex items-center gap-4">
        <Button onClick={() => stepperRef.current?.prev()}>Previous</Button>
        <Button onClick={() => stepperRef.current?.next()}>Next</Button>
      </div>
    </div>
  );
}
