import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbars/AuthNavbar";
import Footer from "../components/Footers/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Index() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (user && user.role === "admin") navigate("/admin/dashboard");
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/417464935_275617385547524_4254739153366842668_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=UNKkN7N6b3sQ7kNvgH6voXc&_nc_oc=AdjrOmNaHL6v-87YXO5jXeX3Pgy6Vp2Lg9zsmGBI40UEajCJUKAKn4-leibSbL7Utyk&_nc_zt=23&_nc_ht=scontent.ftun7-1.fna&_nc_gid=ACp6jjKXRyVVCC4HXaDAwW1&oh=00_AYBEQMOhiNFOA2CuikQScHE4iQLOEa0kRPmVLaPpc0guBw&oe=678173AF')",
            }}

           
          >
            <div className="w-full h-full absolute bg-black bg-opacity-70"></div>
          </div>
          <div className="container relative mx-auto text-center">
            <div className="w-full lg:w-6/12 px-4 mx-auto">
              <h1 className="text-white font-bold text-5xl">
                Expérience Client unique avec nos gammes de points  de Ventes .
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Livraison Rapide et Garantie 
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="pb-20 bg-gray-100 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {[
                {
                  icon: "fas fa-retweet",
                  title: "Un Grand Nombre Des Produits Fournis",
                  description:
                    "Notre entreprise offre une large gamme des produits aquacoles pour répondre à tous vos besoins de production, de la conception à la gestion de la qualité.",
                  bgColor: "bg-red-500",
                },
                {
                  icon: "fas fa-award",
                  title: "14+ Années D'expérience Professionnelle",
                  description:
                    "Notre entreprise s'engage à assurer un environnement aquacole de qualité pour offrir une production saine et durable, de manière efficace et rapide.",
                  bgColor: "bg-blue-500",
                },
                {
                  icon: "fas fa-fingerprint",
                  title: "Un Grand Nombre De Clients Satisfaits",
                  description:
                    "Depuis de nombreuses années, nous travaillons pour améliorer nos compétences et élargir notre champ d'expertise afin de répondre à vos besoins.",
                  bgColor: "bg-green-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="w-full md:w-4/12 px-4 text-center mt-6 md:mt-0"
                >
                  <div className="relative flex flex-col min-w-0 break-words bg-white shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${feature.bgColor}`}
                      >
                        <i className={feature.icon}></i>
                      </div>
                      <h6 className="text-xl font-semibold">{feature.title}</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                <div className="text-center md:text-left">
                  <div className="text-blue-600 p-3 inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Nous produisons pour votre bien-être et votre satisfaction</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  Le Groupe Méditerranée Aquaculture a été fondé en 2009 par M. Chebil MEDIMEGH et ses fils, capitalisant sur une expérience de plus de 30 ans dans le monde des affaires. Fort de son expertise, M. Chebil MEDIMEGH a entrepris de diversifier ses investissements en se tournant vers le domaine prometteur de l'aquaculture.

Depuis sa création, notre groupe s'est développé et a acquis une position de premier plan dans le secteur aquacole. Notre première réalisation a été la création de Tunisian Teboulba Fish (TTF), une ferme d'élevage qui a contribué à la diversification de notre portefeuille d'activités.
                  </p>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Élevage  Expert ",
                      "Poisson  Premium ",
                      "Professionnels  vérifiés",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="text-blue-600 mr-3">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-12 md:mt-0">
                <img
                  alt="Team"
                  className="rounded-lg shadow-lg"
                  src="https://www.gm.com.tn/images/a-propos-img.webp"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
