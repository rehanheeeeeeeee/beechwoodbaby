import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";

const styles = {
  close: "text-2xl cursor-pointer absolute",
};

export default function UpdateStatus({ isOpen, setIsOpen, selectedOrderId }) {
  const [deliveryStatus, setDeliveryStatus] = useState("");

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={true}
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white px-6 py-3 text-left align-middle shadow-xl transition-all">
                <MdClose
                  className={styles.close}
                  onClick={() => setIsOpen(false)}
                />
                <p className="font-semibold text-headingColor text-md w-full text-left p-2 mt-7">
                  You can change the delivery status of the order to if you have
                  delivered it to notify the user
                </p>
                <p className="text-xs px-2">
                  *To update just type{" "}
                  <span className="font-semibold">Delivered</span> in the input
                  field below
                </p>
                <input
                  value={deliveryStatus}
                  onChange={(e) => setDeliveryStatus(e.target.value)}
                  autoCapitalize
                  className="border-headingColor border px-2 py-1 rounded-sm outline-none w-[80%] ml-4"
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
