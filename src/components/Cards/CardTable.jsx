import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa"; // Icône de la corbeille pour la suppression

export default function CardTable() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Récupérer tous les utilisateurs depuis le backend
    axios
      .get("http://localhost:3000/users/")
      .then((response) => setUsers(response.data.users))
      .catch((err) =>
        setError(
          err.response
            ? err.response.data.message
            : "Erreur lors de la récupération des utilisateurs"
        )
      );
  }, []);

  const deleteUser = (userId) => {
    // Envoyer une requête pour supprimer l'utilisateur
    axios
      .delete(`http://localhost:3000/users/${userId}`)
      .then(() => {
        // Supprimer l'utilisateur de la liste
        setUsers(users.filter((user) => user._id !== userId));
      })
      .catch((err) =>
        setError(
          err.response
            ? err.response.data.message
            : "Erreur lors de la suppression de l'utilisateur"
        )
      );
  };

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800">
        <div className="rounded-t mb-0 px-4 py-3 border-0 bg-blue-600">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-2xl text-white">
                Liste des utilisateurs
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 py-3 text-lg font-semibold text-left bg-gray-700 text-white border-gray-600">
                  Image
                </th>
                <th className="px-6 py-3 text-lg font-semibold text-left bg-gray-700 text-white border-gray-600">
                  Nom
                </th>
                <th className="px-6 py-3 text-lg font-semibold text-left bg-gray-700 text-white border-gray-600">
                  Email
                </th>
                <th className="px-6 py-3 text-lg font-semibold text-left bg-gray-700 text-white border-gray-600">
                  Téléphone
                </th>
                <th className="px-6 py-3 text-lg font-semibold text-left bg-gray-700 text-white border-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="bg-gray-800 hover:bg-gray-700">
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4 text-left">
                    <img
                      src={user.image}
                      className="h-14 w-14 bg-white rounded-full border"
                      alt={user.name}
                    />
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4 text-left">
                    <span className="ml-3 font-bold text-white">
                      {user.name} {user.lastName}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4 text-white">
                    {user.email}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4 text-white">
                    {user.phone}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4 text-right">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteUser(user._id)}
                    >
                      <FaTrashAlt className="inline mr-2" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
