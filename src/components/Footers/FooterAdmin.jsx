export default function FooterAdmin() {
  return (
    <footer className="bg-white shadow py-4 mt-auto">
      <div className="container mx-auto px-4">
        <hr className="mb-4 border-b-1 border-gray-200" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm text-gray-500 font-semibold py-1 text-center md:text-left">
              Copyright © {new Date().getFullYear()} Bon Livraison
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
