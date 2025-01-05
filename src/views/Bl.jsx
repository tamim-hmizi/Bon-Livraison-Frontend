import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthNavbar from "../components/Navbars/AuthNavbar";
import Footer from "../components/Footers/Footer";

function Bl() {
  const { id } = useParams(); // Get the BL ID from the URL
  const [bl, setBl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/bl/${id}`); // Fetch BL data
        setBl(response.data); // Set BL data
      } catch (error) {
        console.error("Erreur lors de la récupération du BL:", error);
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchBlDetails(); // Call the function when the component loads
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>; // Show loading spinner while fetching data
  }

  if (!bl) {
    return <div>BL introuvable</div>; // Show error message if no BL is found
  }

  return (
    <>
      <AuthNavbar />
      <div className="relative w-full h-20 bg-gray-800" />
      <div className="relative pt-16 pb-32 flex content-start items-start justify-center min-h-screen">
        <div className="relative z-10 w-full max-w-3xl p-6">
          <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-6">Détails du BL</h1>
            <p>
              <strong>Référence:</strong> {bl.ref}
            </p>
            <p>
              <strong>Code Client:</strong> {bl.codeClient || "N/A"}
            </p>
            <p>
              <strong>État Chauffeur:</strong> {bl.etatChauffeur || "N/A"}
            </p>
            <p>
              <strong>Date Chauffeur:</strong>{" "}
              {bl.dateChauffeur
                ? new Date(bl.dateChauffeur).toLocaleString("fr-FR")
                : "N/A"}
            </p>
            <p>
              <strong>État Dépôt:</strong> {bl.etatDepot || "N/A"}
            </p>
            <p>
              <strong>Date Dépôt:</strong>{" "}
              {bl.dateDepot
                ? new Date(bl.dateDepot).toLocaleString("fr-FR")
                : "N/A"}
            </p>
            <p>
              <strong>État Livreur:</strong> {bl.etatLivreur || "N/A"}
            </p>
            <p>
              <strong>Date Livreur:</strong>{" "}
              {bl.dateLivreur
                ? new Date(bl.dateLivreur).toLocaleString("fr-FR")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bl;
