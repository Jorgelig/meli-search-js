import Image from "next/image";

const SearchBox = () => {

  return (
    <div className="input-group">
      <input
        type="text" placeholder="Buscar..."
        className="input input-bordered w-full px-4 py-2 rounded-md"
        onChange={(e) => setTermInput(e.target.value)}
        onKeyUpCapture={handleKeyPress}
        value={termInput}
      />
      <button
        className="btn bg-gray-lighting hover:bg-gray-lighting border-gray-lighting hover:border-gray-lighting btn-square h-10"
        onClick={handleSearch}
        disabled={!termInput}
      >
        <Image
          src="/assets/images/ic_Search.png"
          width={18}
          height={18}
          alt="Search"
        />
      </button>
    </div>
  );
};

export default SearchBox;