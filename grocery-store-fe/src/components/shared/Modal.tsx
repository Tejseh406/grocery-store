import { Dialog, DialogContent } from "@/components/ui/dialog";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  customClasss?: string;
};

const Modal = ({
  isOpen,
  children,
  onOpenChange,
  customClasss = "",
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={customClasss}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
