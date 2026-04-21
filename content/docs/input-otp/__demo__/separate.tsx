"use client";

import { useForm, Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Button,
} from "@q1k-oss/kiban";

type FormType = { otp: string };

export default function OTPWithRHF() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ defaultValues: { otp: "" } });

  const onSubmit = (data: FormType) => {
    console.log("OTP Submitted:", data.otp);
  };

  const hasError = !!errors.otp;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center space-y-4"
    >
      <h3 className="text-lg font-medium">Verification Code</h3>
      <p className="text-sm text-muted-foreground">
        Enter the 6-digit code sent to your device
      </p>

      {/* OTP Field */}
      <Controller
        name="otp"
        control={control}
        rules={{
          required: "OTP is required",
          minLength: { value: 6, message: "OTP must be 6 digits" },
        }}
        render={({ field }) => (
          <InputOTP
            {...field}
            maxLength={6}
            variant="separate"
            
          >
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className={hasError ? "kiban-form-field-shake-error border border-error-border-2" : ""}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      {/* Error message */}
      {hasError && (
        <p className="text-error text-sm">{errors.otp?.message}</p>
      )}

      <Button type="submit">Verify Code</Button>
    </form>
  );
}
