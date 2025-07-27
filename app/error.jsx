'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-[#3b065e] text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-400 mb-4">Something went wrong!</h2>
        <p className="text-lg mb-6">We apologize for the inconvenience.</p>
        <button
          onClick={() => reset()}
          className="bg-[#29b7dd] hover:bg-[#1C82B1] text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
