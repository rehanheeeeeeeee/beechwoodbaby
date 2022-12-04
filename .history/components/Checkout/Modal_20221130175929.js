import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../redux/cartSlice";
import { MdClose } from "react-icons/md";

const styles = {
  close: "absolute text-xl ",
};

export default function MyModal({ isOpen, openModal, closeModal }) {
  const basketTotal = useSelector(selectBasketTotal);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const paypalOptions = {
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    intent: "capture",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
    color: "blue",
  };

  const addPaypal = () => {
    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_CLIENT_ID}`;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    setScriptLoaded(true);
  };

  useEffect(() => {
    addPaypal();
  }, []);

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
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
                  <MdClose className={styles.close} />
                  <p className="font-semibold text-headingColor text-xl w-full text-center p-2 my-3">
                    Payment Options Offered By Us
                  </p>
                  <PayPalButton
                    paypalOptions={paypalOptions}
                    buttonStyles={buttonStyles}
                    amount={basketTotal}
                    onPaymentSuccess={(onCaptureData) => {
                      console.log(onCaptureData);
                      console.log("success");
                    }}
                    onPaymentCancel={(onCancelData) => {
                      console.log(onCancelData);
                      console.log("cancel");
                    }}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
