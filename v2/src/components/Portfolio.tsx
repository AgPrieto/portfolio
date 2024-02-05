import Project from "./Project";
import { FaGithub} from "react-icons/fa";
import { MdWeb } from "react-icons/md";


export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Portfolio
        </h2>

        {/* Projects Grid */}
        <div className="mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
          <Project
            image="pok.png"
            description="Comprehensive Pokémon app with API integration, user-friendly interface, customization options, and efficient storage on its server. Offers a seamless experience for both API and user-created Pokémon."
            techStack="React, Redux, Css, JavaScript, Express, PostgreSQL"
            buttons={[
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/AgPrieto/PI-Pokemon-main.git",
              },
            ]}
          >
            Pokemon Web App
          </Project>

          <Project
            image="rym2.png"
            description="
            Developed a feature-rich Rick and Morty web app with user registration, secure database handling, and intuitive character navigation. Included Favorites for secure character saving and detailed views for an enhanced user experience."
            techStack="React, Redux, Css, JavaScript, Express, PostgreSQL"
            buttons={[
             
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/AgPrieto/R-MProyect",
              },
             
            ]}
          >
            Rick and Morty Web App
          </Project>

          <Project
            image="ola.png"
            description="
            Designed and developed a seamless E-Commerce platform for a surf shop in collaboration with peers. Utilized advanced technologies, including React, Redux, Node.js, Express, Sequelize, Cloudinary, and Mercado Pago, ensuring a smooth and efficient shopping experience."
            techStack="React, Redux, Css, JavaScript, Express, PostgreSQL"
            buttons={[
             
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/Melanialassia/ClientServer",
              },

              {
                name: "Deploy",
                image: MdWeb,
                link: "https://client-server-okg3.vercel.app/",
              }
             
            ]}
          >
            Surf Shop E-commerce
          </Project>

          
        </div>
      </div>
    </section>
  );
}
