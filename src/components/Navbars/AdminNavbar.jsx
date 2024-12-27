import UserDropdown from "../Dropdowns/UserDropdown";

export default function AdminNavbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-between flex items-center pt-4">
      <div className="w-full mx-auto flex items-center justify-between md:px-10 px-4">
        <h1 className="text-white text-sm uppercase inline-block font-semibold">
          Tableau de board
        </h1>
        <ul className="hidden md:flex flex-row list-none items-center">
          <UserDropdown />
        </ul>
      </div>
    </nav>
  );
}
