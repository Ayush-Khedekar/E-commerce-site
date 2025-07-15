import React from "react";

export default function PurchaseButton() {
  const [isPurchased, setIsPurchased] = React.useState(false); 
  const [showModal, setShowModal] = React.useState(false); 

  function openModal() {
    setShowModal(true); 
  }

  function confirmPurchase() {
    setIsPurchased(true); 
    setShowModal(false); 
  }

  function undoPurchase() {
    setIsPurchased(false)
  }
  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={openModal}
          className={`w-full text-white text-xl p-2 rounded-[10px] items-center shadow-lg cursor-pointer ${
            isPurchased ? "bg-red-600" : "bg-blue-600 hover:bg-green-600"
          }`}
        >
          {isPurchased ? "Purchased" : "Purchase"}
        </button>
        <button
          onClick={undoPurchase}
          className={`w-[120%] text-white text-[1rem] rounded-[10px] items-center shadow-lg cursor-pointer ${
            isPurchased ? "bg-red-600" : "bg-blue-600 hover:bg-green-600"
          }`}
        >
          {isPurchased ? "Cancel-Purchase" : true}
        </button>
      </div>

      {showModal && isPurchased === false && (
        <div
          className="fixed inset-0 z-50 bg-opacity-40 backdrop-blur-sm flex justify-center items-center transition-all duration-300"
          onClick={() => setShowModal(false)} 
        >
          <div
            className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-lg animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} 
          >
            <h2 className="text-2xl font-bold mb-4">Confirm Purchase</h2>
            <p className="mb-6 text-gray-600">
              Are you sure you want to proceed with the purchase?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmPurchase}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
