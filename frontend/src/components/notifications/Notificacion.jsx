import toast from 'react-hot-toast';

function Notificacion({ customText, t }) {
  return (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 bg-red-500 mt-10`}
    >
      <div className="flex-1 w-0 border-1 p-4 text-white text-xl text-center">
        <h1>{customText}</h1>
      </div>
      <div className="flex border-l border-gray-200 bg-white">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Notificacion