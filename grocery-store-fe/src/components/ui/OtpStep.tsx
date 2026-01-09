import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useCallback, useEffect, useState } from "react";

type Props = {
  phone: string;
  onSuccess: () => void;
};

export function OtpStep({ phone, onSuccess }: Props) {
  const [otp, setOtp] = useState("");

  const verifyOtp = useCallback(() => {
    onSuccess();
  }, [onSuccess]);

  useEffect(() => {
    if (otp.length === 6) {
      verifyOtp();
    }
  }, [otp, verifyOtp]);

  return (
    <div className="w-full mx-auto xs:w-[70%]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-bold">OTP Verification</h2>

        <p className="text-sm text-muted-foreground my-3">
          Please enter the 4 digit OTP code sent to +91 {phone}
        </p>

        <InputOTP
          maxLength={6}
          value={otp}
          onChange={setOtp}
          disabled={false}
        >
          <InputOTPGroup className="gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="first:rounded-md last:rounded-md rounded-md border border-(--gray-3)"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        <button className="text-sm text-(--soft-green) hover:underline mt-3">
          Resend OTP
        </button>
      </div>
    </div>
  );
}
