import { FaExclamationTriangle, FaExclamationCircle } from "react-icons/fa";

const Modal = ({ closeModal, selectedProject }) => {

  const proceed = () => {
      window.location.href = `${selectedProject.link}`;
  }

  return (
    <div
      id="static-modal"
      tabIndex="-1"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
    >
      <div className="relative p-4 w-full max-w-sm max-h-full">
          {/* Modal content */}
          <div className="relative bg-[#1B1B1B] rounded-lg shadow-sm text-white">
            {/* Modal body */}
            <div className="p-4 space-y-3">
              <p className="text-xs leading-relaxed flex items-center gap-2">
                <FaExclamationTriangle className="text-yellow-400" />
                You will be redirected to {selectedProject.name}
              </p>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end gap-2 p-4 border-t">
              <button
                onClick={proceed}
                className="bg-[#ff914d] rounded-lg text-xs px-4 py-2 w-full hover:bg-orange-900"
              >
                Proceed
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 rounded-lg text-xs px-4 py-2 w-full hover:bg-red-900"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Modal;
