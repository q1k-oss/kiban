"use client";
import { useRef } from "react";

import { Button, IStepItem, Stepper, StepperRef } from "@q1k-oss/kiban";

export default function StepperHorizontalDemo() {
  const stepperRef = useRef<StepperRef>(null);

  const steps: IStepItem[] = [
    { label: "Alarm Goes Off", description: "Throw phone across the room", status: "on_going" },
    { label: "Zombie Mode", description: "Walk into 3 walls minimum", status: "pending" },
    { label: "Inhale Coffee", description: "Personality loading... 12%", status: "pending" },
    { label: "Open Slack", description: "847 unread messages, nice", status: "pending" },
    { label: "First Meeting", description: "This could've been an email", status: "pending" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-12 p-8 w-full overflow-hidden">
      <div className="w-full overflow-auto">
        <Stepper
          ref={stepperRef}
          steps={steps}
          orientation="horizontal"
          showDescription
        />
      </div>

      <div className="flex items-center gap-4">
        <Button onClick={() => stepperRef.current?.prev()}>Previous</Button>
        <Button onClick={() => stepperRef.current?.next()}>Next</Button>
      </div>
    </div>
  );
}
