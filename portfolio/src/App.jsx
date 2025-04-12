// App.js
import React, { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    console.log(projectsRef.current);
  }, [projectsRef, contactRef]);
  return (
    <div>
      <NavbarHero refs={{ portfolio: projectsRef, contact: contactRef }} />
      <AboutMe />
      {/* <Affiliations /> */}
      <ProjectsComponent ref={projectsRef} />
      <ContactSection ref={contactRef} />
    </div>
  );
}
export default App;

const profile = {
  name: "unnati singhania",
  imageUrl: "/hands-on-portfolio/images/profile.jpg",
};

const navLinks = [
  { id: 1, href: "#", text: "home" },
  { id: 2, href: "#", text: "portfolio" },
  { id: 3, href: "#", text: "contact" },
];

const hero = {
  title: "unnati singhania",
  subtitle: "junior @jpis",
};
const header = {
  title: "about me.",
  subtitle: "Hey, I'm Akshat!",
  emoji: "👋🏻",
};

const description = {
  intro: `I’m a student at JPIS, Jaipur, and I’m currently interested in developing solutions that make tech and education accessible 📚💡. I’m also a <strong>founder</strong>, empowering tens of blind students in education and employment through affordable smart glasses 🕶️.`,
  researchInterests: `My research interests lie in improving accessible technology for disabled people ♿. I’m also super passionate about <strong>autonomous systems</strong> 🤖 and <strong>artificial intelligence in space exploration</strong> 🚀 and <strong>clean energy</strong> 🌱.`,
  pastProjects:
    "In the past, I’ve explored <strong>nuclear fission disruption systems</strong> ⚛️, engineered plant-based wastewater solutions for textile industries 🌱, built AI-driven CCTV security systems for low-resource environments 🛡️, and launched model rockets to 1km altitude 🚀. I’ve also worked with the <strong>Ministry of Education</strong> 🇮🇳, and worked as a junior engineer for <strong>Skillstrainer.in</strong> 💻.",
};

const image = {
  src: "https://placehold.co/600x800",
  alt: "Profile photo",
};
const header1 = "my recent projects.";
const projects = [
  {
    title:
      "SightSense: affordable ai assistive glasses for the visually impaired",
    items: [
      {
        imgSrc: "/hands-on-portfolio/images/projects/sightsense.png",
        description: "getting feedback from blind students",
      },
      {
        imgSrc: "/hands-on-portfolio/images/drive/t18.jpeg",
        description: "",
      },
      {
        imgSrc: "/hands-on-portfolio/images/drive/t42.png",
        description: "",
      },
      {
        imgSrc: "/hands-on-portfolio/images/b6.jpeg",
        description: "winning Tie Rajasthan 2024",
      },
      {
        imgSrc: "/hands-on-portfolio/images/b6-1.jpeg",
        description: "",
      },
      {
        imgSrc: "/hands-on-portfolio/images/hack.jpg",
        description:
          "invited to and awarded at a government bootcamp in Poornima university, Jaipur",
      },
      {
        imgSrc: "/hands-on-portfolio/images/mp2.jpeg",
        description:
          "meeting and discussing sightsense with member of parliament of jaipur",
      },
      {
        imgSrc: "/hands-on-portfolio/images/drive/t38.jpg",
        description: "explaining my glasses to juniors",
      },
      {
        imgSrc: "/hands-on-portfolio/images/drive/t16.jpeg",
        description: "",
      },

      {
        imgSrc: "/hands-on-portfolio/images/drive/t3.jpg",
        description: "Global Social Leaders Winner 2024",
      },
      {
        imgSrc: "/hands-on-portfolio/images/drive/t30.jpeg",
        description:
          "SightSense featured in local newspaper for Tie Rajasthan win",
      },
      {
        imgSrc: "/hands-on-portfolio/images/drive/t10.jpeg",
        description: "recognized in School's Annual Day",
      },

      {
        imgSrc: "/hands-on-portfolio/images/drive/t44.png",
        description:
          "discussing newly implemented features in SightSense glasses with assistant director of Innovation",
      },

      {
        imgSrc: "/hands-on-portfolio/images/drive/t2.jpg",
        description: "Smart India Hackathon selection, top 19 in the nation",
      },
      {
        imgSrc: "/hands-on-portfolio/images/3rd-graders/1.jpeg",
        description:
          "Session on social impact with technology with 3rd graders",
      },
      {
        imgSrc: "/hands-on-portfolio/images/3rd-graders/2.jpeg",
        description: "",
      },
      {
        imgSrc: "/hands-on-portfolio/images/3rd-graders/3.jpeg",
        description: "",
      },
      {
        imgSrc: "/hands-on-portfolio/images/udyamahotsav/1.JPG",
        description: "Interview with Apex University, Jaipur",
      },
      {
        imgSrc: "/hands-on-portfolio/images/udyamahotsav/2.JPG",
        description: "",
      },
      {
        imgSrc: "/hands-on-portfolio/images/udyamahotsav/3.JPG",
        description: "",
      },
      {
        pdfSrc:
          "https://drive.google.com/file/d/1jaGMkH78oYFgRHkYJnnGAuoAmmFAbC8s/preview",
        description:
          "LOR from Member of Parliament, Manju Sharma (english translation included)",
      },
    ],
  },

  {
    title: "RiverRescue",
    items: [
      {
        imgSrc: "/hands-on-portfolio/images/conf1.jpeg",
        description:
          "at the clean air energy conference with the rajasthan state pollution control board",
      },
      {
        imgSrc: "/hands-on-portfolio/images/drive/t4.jpg",
        description: "",
      },
    ],
  },
];
const affiliations = [
  {
    id: 1,
    name: "Stanford",
    imgSrc: "https://placehold.co/128x64?text=Stanford",
    altText: "Stanford Neurodiversity Project",
  },
  {
    id: 2,
    name: "Project",
    imgSrc: "https://placehold.co/128x64?text=Project",
    altText: "Project",
  },
  {
    id: 3,
    name: "TKS",
    imgSrc: "https://placehold.co/128x64?text=TKS",
    altText: "TKS",
  },
  {
    id: 4,
    name: "TERC",
    imgSrc: "https://placehold.co/128x64?text=TERC",
    altText: "TERC",
  },
  {
    id: 5,
    name: "CAMH",
    imgSrc: "https://placehold.co/128x64?text=CAMH",
    altText: "CAMH",
  },
  {
    id: 6,
    name: "1517",
    imgSrc: "https://placehold.co/128x64?text=1517",
    altText: "1517",
  },
  {
    id: 7,
    name: "Logo",
    imgSrc: "https://placehold.co/128x64?text=Logo",
    altText: "Logo",
  },
];

const NavbarHero = ({ refs }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDownTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav
        className="bg-opacity-55 bg-white container px-24 flex items-center justify-between z-10 top-0 fixed shadow-lg lg:shadow-none"
        // className={`mobile-menu lg:flex hidden flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:relative w-full lg:w-auto left-0 top-full lg:top-auto bg-white p-4 lg:p-0  fixed`}
      >
        {/* Logo/Name */}
        <div className="flex items-center gap-2 py-4">
          {/* <img src={profile.imageUrl} alt="Profile" className="w-8 h-8 rounded-full" /> */}
          <span className="text-black font-medium">{profile.name}</span>
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          className="lg:hidden p-2"
          aria-label="Toggle Menu"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}

        {/* Navigation Links */}
        <div
          className={` ${
            isMobileMenuOpen ? "" : ""
          } lg:flex flex-col lg:flex-row lg:items-center lg:gap-8 absolute lg:relative w-full lg:w-auto left-0 top-full lg:top-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              // href={link.href}
              className="text-black hover:opacity-75 py-2 lg:py-0 cursor-pointer"
              onClick={() => {
                if (refs) {
                  console.log(refs);
                }
                scrollDownTo(refs[link.text]);
              }}
            >
              {link.text}
            </a>
          ))}
        </div>
      </nav>
      <section
        id="navbar_hero"
        className="mt-14 bg-gradient-to-b from-[#B7E9F7] to-[#ABC7FF]"
      >
        <div className="container mx-auto px-4 text-center pt-20 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{hero.title}</h1>
          <p className="text-base md:text-lg">{hero.subtitle}</p>
        </div>
      </section>
    </div>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="py-8 sm:py-16 container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
        {header.title}
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
        <div className="ml-40 max-w-[25rem] flex-1 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 mb-2 sm:mb-4">
            <span className="text-xl sm:text-2xl">{header.emoji}</span>
            <h3 className="text-lg sm:text-xl font-semibold">
              {header.subtitle}
            </h3>
          </div>

          <p
            className="text-gray-800 text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: description.intro }}
          />
          <p
            className="text-gray-800 text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: description.researchInterests }}
          />
          <p
            className="text-gray-800 text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: description.pastProjects }}
          />

          {/* <button
            href="#contact"
            className="w-full sm:w-auto bg-blue-100 px-4 sm:px-6 py-2 rounded-full text-black hover:bg-blue-200 transition mt-4 text-sm sm:text-base">
            contact me here!
          </button> */}
        </div>

        <div className="flex-1 mt-8 lg:mt-0">
          <img
            src={profile.imageUrl}
            alt={image.name}
            // className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg object-cover"
            className="ml-auto max-w-lg object-contain rounded-lg w-full h-1/6"
          />
        </div>
      </div>
    </section>
  );
};

const Affiliations = () => {
  return (
    <section
      id="affiliations"
      className="py-8 sm:py-12 md:py-16 container mx-auto px-4"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
        places I'm affiliated with.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {affiliations.map((affiliation) => (
          <div
            key={affiliation.id}
            className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16"
          >
            <img
              src={affiliation.imgSrc}
              alt={affiliation.altText}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectsComponent = React.forwardRef((props, ref) => {
  return (
    <section
      className="py-8 sm:py-12 md:py-16 container mx-auto px-4"
      ref={ref}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
        {header1}
      </h2>

      {/* <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <button className="bg-blue-100 px-4 sm:px-5 md:px-6 py-2 rounded-full text-black hover:bg-blue-200 transition text-sm sm:text-base">
          {buttonText}
        </button>
      </div> */}

      <div className="space-y-8 sm:space-y-10 md:space-y-12 mx-auto">
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
              {project.title}
            </h3>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                project.items.length > 2 ? "md:grid-cols-3" : ""
              } gap-4 sm:gap-6`}
            >
              {project.items.map((item, idx) => (
                <div
                  key={idx}
                  // className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  {item.pdfSrc ? (
                    <iframe
                      src={item.pdfSrc}
                      title={item.description}
                      className="w-full h-48 sm:h-56 md:h-64 object-contain rounded"
                    />
                  ) : (
                    <img
                      src={item.imgSrc}
                      alt={item.alt}
                      className="w-full h-48 sm:h-56 md:h-64 object-contain rounded"
                    />
                  )}
                  <p className="text-black text-xs sm:text-sm text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

const ContactSection = React.forwardRef((props, ref) => {
  // State Variables
  const [profile, setProfile] = useState({
    name: "unnati singhania",
    image: "https://placehold.co/32x32",
  });

  const [socialLinks, setSocialLinks] = useState([]);

  const [contactInfo, setContactInfo] = useState([
    { type: "General", email: "singhaniaakshat1@gmail.com" },
    { type: "School", email: "asinghania2@jpischool.com" },
  ]);

  const [footerInfo, setFooterInfo] = useState({
    copyright: "Copyright © 2024 unnati singhania, Inc. All rights reserved.",
  });

  return (
    <section id="contact" className="py-16 container mx-auto px-4" ref={ref}>
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto space-y-8">
        {/* Profile */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center gap-2">
            {/* <img
              src={profile.image}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            /> */}
            <span className="text-gray-700">{profile.name}</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-medium text-gray-900"></h3>
            <div className="space-y-1">
              {socialLinks.map((link, index) => (
                <p key={index} className="text-sm text-gray-500">
                  {`${link.platform.toLowerCase()} ${link.handle}`}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-medium text-gray-900">contact</h3>
            <div className="space-y-1">
              {contactInfo.map((info, index) => (
                <p key={index} className="text-sm text-gray-500 break-words">
                  {info.email} ({info.type.toLowerCase()})
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full border-t pt-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            {footerInfo.copyright}
          </p>
        </div>
      </div>
    </section>
  );
});
