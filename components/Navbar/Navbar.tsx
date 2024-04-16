export default function Navbar() {
  return (
    <nav className="bg-secondary w-full">
      <div className="max-w-[1024px] mx-auto py-3">
        <form className="">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar sucursal"
              className={`w-[350px] bg-white rounded-sm py-[2px] pl-10  text-base
              focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50`}
            />
            <img
              src="/icons/search.png"
              alt="Buscar"
              className="w-5 h-5 absolute top-[6px] left-2"
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
