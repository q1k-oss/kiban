"use client";
import { useRef } from "react";

import { Button, IStepItem, Stepper } from "@q1k-oss/kiban";

export default function StepperDemo() {
  const stepperRef = useRef<any>(null);

  const steps: IStepItem[] = [
    { LABEL: "Verify Current Number", STATUS: 'on_going' },
    { LABEL: "Change Phone Number", STATUS: "pending" },
    { LABEL: "Verify New Number", STATUS: "pending" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <Stepper ref={stepperRef} steps={steps} />

      <div className="flex items-center gap-4">
        <Button onClick={() => stepperRef.current.prev()}>Previous</Button>
        <Button onClick={() => stepperRef.current.next()}>Next</Button>
      </div>
    </div>
  );
}
