import { DialogFooter } from "@/components/ui/dialog";
import Logo from "../shared/Logo";
import Button from "../shared/Button";

type Props = {
  phone: string;
  setPhone: (v: string) => void;
  onContinue: () => void;
};

export function PhoneStep({ phone, setPhone, onContinue }: Props) {
  return (
    <div className="w-full mx-auto xs:w-[70%]">
      <div className="flex flex-col items-center gap-2 text-center">
        <Logo />

        <h2 className="text-xl font-bold mt-3">
          Login and get fresh essentials delivered
        </h2>

        <p className="text-sm">Sign in or sign up </p>

        <input
          type="tel"
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-md p-2 mt-4"
          placeholder="Enter your mobile number"
          maxLength={10}
        />
      </div>

      <DialogFooter className="justify-center sm:justify-end mt-3">
        <Button
          disabled={phone.length !== 10}
          handleClick={onContinue}
          size="md"
          variant="primary"
        >
          Continue
        </Button>
      </DialogFooter>
    </div>
  );
}
