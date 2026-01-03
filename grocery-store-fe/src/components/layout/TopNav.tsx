
import MapPinIcon from "@/assets/svg/map-pin.svg";
import LoginModal from "@/components/ui/LoginModal";
import Modal from "../shared/Modal";
import { useState } from "react";
const TopNav = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-(--black) text-(--gray-3) flex sm:flex-row gap-3 sm:gap-0 flex-col justify-between items-center px-3 py-2.5 text-sm">
      <div className="flex gap-2 items-center">
        <img src={MapPinIcon} alt="map pin" />
        <p>Deliver to John - New York 123456</p>
      </div>
      <div className="flex gap-4 items-center">
        <p>Eng</p>
        <span className="opacity-60">|</span>
         <button className="cursor-pointer" onClick={() => setOpenModal(true)}>
          Sign In / Sign Up
        </button>
        <Modal isOpen={openModal} customClasss="max-w-[330px]" onOpenChange={setOpenModal}>
          <LoginModal onClose={() => setOpenModal(false)} />
        </Modal>
      </div>
    </div>
  )
}

export default TopNav