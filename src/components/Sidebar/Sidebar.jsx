import { Link } from "react-router-dom";
import { useState } from "react";

import UserDropdown from "../Dropdowns/UserDropdown";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [activeRoute, setActiveRoute] = useState("/admin/dashboard");

  const handleSetActiveRoute = (route) => {
    setActiveRoute(route);
  };

  const linkClass = (route) =>
    "text-xs uppercase py-3 font-bold block " +
    (activeRoute === route
      ? "text-blue-500 hover:text-blue-600"
      : "text-gray-700 hover:text-gray-500");

  const iconClass = (route) =>
    "fas text-sm mr-2 " +
    (activeRoute === route ? "opacity-75" : "text-gray-300");

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-50 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-visible">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>

          <Link
            className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/admin/dashboard"
            onClick={() => handleSetActiveRoute("/admin/dashboard")}
          >
            Bon Livraison
          </Link>

          <div className="md:hidden items-center flex flex-wrap list-none">
            <div className="inline-block relative">
              <UserDropdown />
            </div>
          </div>

          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-50 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/admin/dashboard"
                    onClick={() => handleSetActiveRoute("/admin/dashboard")}
                  >
                    Bon Livraison
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={linkClass("/admin/dashboard")}
                  to="/admin/dashboard"
                  onClick={() => handleSetActiveRoute("/admin/dashboard")}
                >
                  <i className={`${iconClass("/admin/dashboard")} fa-tv`}></i>{" "}
                  Tableau de board
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={linkClass("/admin/tables")}
                  to="/admin/tables"
                  onClick={() => handleSetActiveRoute("/admin/tables")}
                >
                  <i className={`${iconClass("/admin/tables")} fa-table`}></i>{" "}
                  Gestion Utilisateur
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={linkClass("/admin/tablebl")}
                  to="/admin/tablebl"
                  onClick={() => handleSetActiveRoute("/admin/tablebl")}
                >
                  <i className={`${iconClass("/admin/tablebl")} fa-table`}></i>{" "}
                  Gestion Bon Livraison
               </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
