import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../redux/cartSlice";
import { MdClose } from "react-icons/md";
import PaypalBtn from "./PaypalBtn";
import Loading from "../Create/Loading";

const styles = {
  close: "absolute text-2xl cursor-pointer",
  loading:
    "block text-center w-full rounded-md mt-5 bg-headingColor p-2 hover:shadow-lg",
};

export default function MyModal({
  isOpen,
  openModal,
  closeModal,
  scriptLoaded,
}) {
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <>
      <Transition show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 py-3 text-left align-middle shadow-xl transition-all">
                  <MdClose className={styles.close} onClick={closeModal} />
                  <p className="font-semibold text-headingColor text-xl w-full text-center p-2 my-3">
                    Payment Options Offered By Us
                  </p>
                  {scriptLoaded ? (
                    <PaypalBtn basketTotal={basketTotal} />
                  ) : (
                    <button className={styles.loading}>
                      <Loading />
                    </button>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
