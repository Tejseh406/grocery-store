import { useState } from "react";
import { PhoneStep } from "@/components/ui/PhoneStep";
import { OtpStep } from "@/components/ui/OtpStep";

type LoginProps = {
  onClose: () => void;
};

const LoginModal = ({ onClose }: LoginProps) => {
  const [step, setStep] = useState<"PHONE" | "OTP">("PHONE");
  const [phone, setPhone] = useState("");

  return (
    <>
      {step === "PHONE" && (
        <PhoneStep
          phone={phone}
          setPhone={setPhone}
          onContinue={() => setStep("OTP")}
        />
      )}
      {step === "OTP" && <OtpStep phone={phone} onSuccess={onClose} />}
    </>
  );
};

export default LoginModal;
