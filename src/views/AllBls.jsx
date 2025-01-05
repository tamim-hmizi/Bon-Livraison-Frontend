import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AllBls() {
  const [bls, setBls] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBls = async () => {
      try {
        const response = await axios.get("http://localhost:3000/bl");
        setBls(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des BLs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBls();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bls.length === 0 ? (
          <div className="bg-gray-700 p-8 rounded-lg text-white">
            <h2 className="text-xl font-semibold">Aucun BL existant</h2>
          </div>
        ) : (
          bls.map((bl) => (
            <div
              key={bl._id}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700"
              onClick={() => navigate(`/bl/${bl._id}`)}
            >
              <h2 className="text-2xl font-semibold text-center">
                Référence: {bl.ref}
              </h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AllBls;
