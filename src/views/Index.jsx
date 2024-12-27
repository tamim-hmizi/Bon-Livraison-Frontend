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
      <Navbar transparent />
      <main>
        {/* Hero Section */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <div className="w-full h-full absolute bg-black bg-opacity-70"></div>
          </div>
          <div className="container relative mx-auto text-center">
            <div className="w-full lg:w-6/12 px-4 mx-auto">
              <h1 className="text-white font-bold text-5xl">
                Your story starts with us.
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Build stunning landing pages with Notus React, leveraging the
                power of Tailwind CSS and FontAwesome.
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
                  icon: "fas fa-award",
                  title: "Awarded Agency",
                  description:
                    "We provide exceptional service and have been recognized for our work.",
                  bgColor: "bg-red-500",
                },
                {
                  icon: "fas fa-retweet",
                  title: "Free Revisions",
                  description:
                    "Our services include multiple free revisions to ensure your satisfaction.",
                  bgColor: "bg-blue-500",
                },
                {
                  icon: "fas fa-fingerprint",
                  title: "Verified Company",
                  description:
                    "Trusted by thousands, our company has a proven track record.",
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
                  <h3 className="text-3xl font-bold mb-2">A growing company</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Join us on our journey as we scale new heights in providing
                    tailored solutions for businesses of all sizes.
                  </p>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Carefully crafted components",
                      "Amazing page examples",
                      "Dynamic components",
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
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
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
