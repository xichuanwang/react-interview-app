/**
 * A generic error message component that displays an error message and an optional retry button.
 */
export default function GenericError({ retryCallback, retryButtonMessage = 'Retry again' }: { retryCallback?: ()=>void, retryButtonMessage?: string }) {
  return (
    <div className="error-message text-red-600">
      An error occurred while fetching the latest pokemon.
      
      {
        retryCallback && (
          <div>
            <button 
              className="retry-button mt-2 px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-2 focus:outline-offset-2 focus:outline-red-600"
              onClick={retryCallback}
            >
              {retryButtonMessage}
            </button>
          </div>
        )
      }
    </div>
  );
}