"use client";
import { useRef } from "react";

import { Button, IStepItem, Stepper, StepperRef } from "@q1k-oss/kiban";

export default function StepperDotDemo() {
  const stepperRef = useRef<StepperRef>(null);

  const steps: IStepItem[] = [
    { label: "Download a Framework", description: "React? Vue? Nah, build your own", status: "on_going" },
    { label: "Spend 9 Hours on Config", description: "Webpack, Vite, tears, repeat", status: "pending" },
    { label: "Build a Todo App", description: "The 47th one this year, a masterpiece", status: "pending" },
    { label: "Abandon the Project", description: "Ooh, a new JS framework dropped", status: "pending" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-12 p-8">
      <Stepper
        ref={stepperRef}
        steps={steps}
        indicator="dot"

        orientation="vertical"
        colors={{}}
      />

      <div className="flex items-center gap-4">
        <Button onClick={() => stepperRef.current?.prev()}>Previous</Button>
        <Button onClick={() => stepperRef.current?.next()}>Next</Button>
      </div>
    </div>
  );
}
