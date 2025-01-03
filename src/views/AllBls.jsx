import { useEffect, useState } from "react";
import axios from "axios";

function AllBls() {
  const [bls, setBls] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {bls.length === 0 ? (
          <div className="bg-gray-700 p-8 rounded-lg text-white">
            <h2 className="text-xl font-semibold">Aucun BL existant</h2>
          </div>
        ) : (
          bls.map((bl) => (
            <div
              key={bl._id}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Référence: {bl.ref}
              </h2>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <span>Code Client:</span>
                  <span>{bl.codeClient || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span>État Chauffeur:</span>
                  <span>{bl.etatChauffeur || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span>État Dépôt:</span>
                  <span>{bl.etatDepot || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span>État Livreur:</span>
                  <span>{bl.etatLivreur || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date Chauffeur:</span>
                  <span>
                    {bl.dateChauffeur
                      ? new Date(bl.dateChauffeur).toLocaleString("fr-FR")
                      : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Date Dépôt:</span>
                  <span>
                    {bl.dateDepot
                      ? new Date(bl.dateDepot).toLocaleString("fr-FR")
                      : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Date Livreur:</span>
                  <span>
                    {bl.dateLivreur
                      ? new Date(bl.dateLivreur).toLocaleString("fr-FR")
                      : "N/A"}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <strong>Articles:</strong>
                <ul className="space-y-4">
                  {bl.articleScan && bl.articleScan.length > 0 ? (
                    bl.articleScan.map((article, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between p-4 border-b border-gray-600"
                      >
                        <div>
                          <p>Référence: {article.referance || "N/A"}</p>
                          <span>Poids: {article.poids || "N/A"}</span>

                          <span className="pl-2">
                            Nombre: {article.nombre || "N/A"}
                          </span>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">Aucun article disponible</p>
                  )}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AllBls;
