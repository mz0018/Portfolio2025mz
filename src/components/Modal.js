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
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-3xl leading-relaxed text-gray-500 dark:text-gray-400">
               You will be redirected to {selectedProject.name}
            </p>
          </div>

          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => proceed()}
              className="text-white bg-orange-500 hover:bg-gray-200 rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Proceed to {selectedProject.name}
            </button>
            <button
              onClick={closeModal}
              className=" text-white py-2.5 px-5 ms-3 text-sm bg-red-500 rounded-lg border hover:bg-gray-200"
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
