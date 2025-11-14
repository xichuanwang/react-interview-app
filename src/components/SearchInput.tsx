interface SearchInputBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

/**
 * A reusable search input box component.
 * 
 * - onChange: function to handle input change events
 * - placeholder: optional placeholder text for the input box
 */
export default function SearchInput({ onChange, placeholder = "Search..." }: SearchInputBoxProps) {

  return (
    <div className="search-input relative w-80">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
        />
      </svg>
    </div>
  ); 
}