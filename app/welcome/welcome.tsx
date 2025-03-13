import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Close icon
import {
  FaReact,
  FaCode,
  FaJava,
  FaDatabase,
  FaGit,
  FaCloud,
} from "react-icons/fa"; // Import icons
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";

export default function Welcome() {
  return (
    <div className="bg-[#E6F7FF] text-[#083d77] min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#1bbcf2] p-4 shadow-lg z-50 flex justify-center space-x-6">
        <NavItem to="home" label="Home" />
        <NavItem to="experience" label="Experience" />
        <NavItem to="projects" label="Projects" />
        <NavItem to="skills" label="Skills" />
        <NavItem to="contact" label="Contact" />
      </nav>

      {/* Sections */}
      <Section id="home" content={<HomeAboutSection />} />
      <Section id="experience" content={<ExperienceContent />} />
      <Section id="projects" content={<ProjectsContent />} />
      <Section id="skills" content={<SkillsContent />} />
      <Section id="contact" content={<ContactContent />} />

      <BackToTop />
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer text-white hover:text-[#083d77] transition font-medium"
    >
      {label}
    </Link>
  );
}

function Section({ id, content }) {
  return (
    <div
      id={id}
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[#E6F7FF] w-full" // Ensure full width usage
    >
      <div className="w-full">{content}</div>
    </div>
  );
}

function BackToTop() {
  return (
    <button
      onClick={() => scroll.scrollToTop()}
      className="fixed bottom-5 right-5 bg-[#1bbcf2] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#1595c2] transition"
    >
      ↑ Top
    </button>
  );
}

function HomeAboutSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-12 py-24 bg-[#E6F7FF] min-h-screen text-[#083d77] w-full">
      {/* Left Side: Home Details (30%) */}
      <div className="md:w-1/3 w-full flex flex-col items-center text-left space-y-6">
        {/* Name & Role */}
        <motion.h1
          className="text-3xl font-serif text-[#1bbcf2] leading-snug"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm
        </motion.h1>
        <motion.h2
          className="text-4xl font-serif font-bold text-[#083d77] leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Anusha Krishna
        </motion.h2>
        <motion.h3
          className="text-2xl font-serif text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Software Developer
        </motion.h3>

        {/* Buttons */}
        <div className="flex space-x-4 mt-8">
          <a
            href="D:/Resumes/</div>Job/Anusha.pdf"
            download
            className="bg-[#1bbcf2] text-white py-3 px-8 rounded-full shadow-md hover:bg-[#1595c2] transition transform hover:scale-105 text-base"
          >
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/anusha-m-k-0925b02ab/"
            target="_blank"
            className="bg-[#1bbcf2] text-white py-3 px-8 rounded-full shadow-md hover:bg-[#1595c2] flex items-center gap-2 transform hover:scale-105 text-base"
          >
            <FaLinkedin size={20} className="text-white" /> LinkedIn
          </a>
        </div>
      </div>

      {/* Right Side: About Details (70%) */}
      <div className="md:w-2/3 w-full mt-12 md:mt-0 md:pl-12">
        <motion.h2
          className="text-4xl font-semibold text-[#1bbcf2] mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-[#083d77] mb-6 max-w-3xl text-justify"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Enthusiastic MSc Software Development graduate with 3+ years of
          experience in designing and delivering scalable, high-performance
          software solutions. Proficient in Golang and cloud-native
          architectures, with expertise in building distributed, event-driven
          systems. Skilled in developing maintainable, efficient, and secure
          applications within Agile frameworks.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Experience */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-xl border border-[#1bbcf2] hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-[#083d77] mb-2">
              Experience
            </h3>
            <p className="text-lg text-gray-700">
              3+ years working with Golang, Java, React, and modern web
              technologies.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-xl border border-[#1bbcf2] hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-[#083d77] mb-2">
              Education
            </h3>
            <p className="text-lg text-gray-700">
              Masters in Software Development - University of Strathclyde (2023
              - 2024)
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="text-center px-6 py-16 bg-[#E6F7FF]">
      <motion.h2
        className="text-4xl font-semibold text-[#1bbcf2] mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>

      {/* Experience Sections */}
      <div className="space-y-12 max-w-screen-xl mx-auto">
        {/* Experience Section 1 */}
        <motion.section
          className="relative bg-white shadow-xl p-8 rounded-lg border border-[#1bbcf2] mb-12 transition-all duration-300 ease-in-out transform overflow-hidden h-[200px] hover:h-[350px] hover:shadow-2xl hover:border-[#1bbcf2] hover:scale-105 hover:bg-[#DFF6FF]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-[#083d77] mb-2">
              Software Developer - Edu-Easy
            </h3>
            <p className="text-lg text-gray-700 mb-4">Sep 2023 - Feb 2025</p>
            <p className="text-gray-500 mb-6">
              Developed and maintained high-performance, distributed backend
              services using Golang.
            </p>
            {/* Expanding details */}
            <div className="text-gray-700">
              <p>
                <strong>Key Responsibilities:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Designed and implemented Microservices for scalable
                  service-to-service communication.
                </li>
                <li>
                  Utilized goroutines and channels to enhance concurrency,
                  improving system throughput.
                </li>
                <li>
                  Worked on fault-tolerant distributed architectures with high
                  availability.
                </li>
                <li>Optimized API response times and system efficiency.</li>
                <li>
                  Conducted performance tuning and debugging in distributed
                  environments.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Experience Section 2 */}
        <motion.section
          className="relative bg-white shadow-xl p-8 rounded-lg border border-[#1bbcf2] mb-12 transition-all duration-300 ease-in-out transform overflow-hidden h-[200px] hover:h-[350px] hover:shadow-2xl hover:border-[#1bbcf2] hover:scale-105 hover:bg-[#DFF6FF]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-[#083d77] mb-2">
              Software Backend Developer - C-Square Info Solutions
            </h3>
            <p className="text-lg text-gray-700 mb-4">Apr 2022 - Aug 2023</p>
            <p className="text-gray-500 mb-6">
              Worked on server-side applications using Go (Golang) and Java.
            </p>
            {/* Expanding details */}
            <div className="text-gray-700">
              <p>
                <strong>Key Responsibilities:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Optimized queries and data structures to improve API response
                  times.
                </li>
                <li>
                  Launched a key feature that increased user engagement by 30%.
                </li>
                <li>
                  Developed event-driven applications using Kafka for
                  distributed message streaming.
                </li>
                <li>
                  Integrated SQL databases and optimized queries for
                  high-traffic systems.
                </li>
                <li>
                  Collaborated with frontend teams for seamless React-Golang
                  integrations.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function ProjectsContent() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "MySmartShala",
      description:
        "MySmartShala is an EdTech platform that digitizes educational institutions by providing a paperless system for managing assignments, evaluations, and student-teacher communication. It offers secure document submission, real-time feedback, and streamlined administrative tasks.",
      roles: [
        "I focused on building the backend system to manage student-teacher communication and document submission.",
        "I used Golang to implement RESTful APIs that allowed users to submit assignments, receive real-time feedback, and interact with the system.",
        "Collaborated with frontend teams for seamless integrations and development.",
      ],
      link: "https://www.mysmartshala.com/",
    },
    {
      id: 2,
      title: "Abbott",
      description:
        "Abbott OSV is a comprehensive Sales Information System designed to streamline sales reporting and data access for Abbott’s sales teams. It consolidates sales data, providing real-time updates and easy access to actionable insights for the teams.",
      roles: [
        "Developed and maintained backend services using Golang.",
        "Optimized system performance and reduced response times.",
        "Implemented event-driven architectures using Kafka.",
        "Worked on real-time order processing features.",
        "Implemented user authentication and role-based access control.",
      ],
      link: "https://www.abbott.in/",
    },
    {
      id: 3,
      title: "SFA 360",
      description:
        "SFA360 is a cloud-based Sales Force Automation platform that automates lead management, field force tracking, and reporting. It integrates real-time data, providing actionable insights to sales teams and helping automate administrative tasks.",
      roles: [
        "Worked on the frontend development using React.",
        "Developed RESTful APIs using Golang and integrated them with   React components, ensuring seamless communication between the backend and frontend.",
        "Optimized database queries with PostgreSQL and MS SQL for high performance.",
        "Collaborated closely with stakeholders to define product features.",
      ],
      link: "https://sfa360.in/",
    },
  ];

  return (
    <div className="px-6 py-16 bg-[#E6F7FF]">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-semibold text-center text-[#1bbcf2] mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white shadow-lg rounded-xl p-6 border border-[#1bbcf2] hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-[#083d77] mb-4">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-6">{project.description}</p>

            {/* View Details Button */}
            <button
              className="inline-block bg-[#1bbcf2] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1284a9] transition"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal for Viewing Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-lg flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              {/* Project Details */}
              <div className="text-left space-y-6">
                <h3 className="text-2xl font-semibold text-[#083d77]">
                  {selectedProject.title}
                </h3>

                <div>
                  <strong className="text-[#1bbcf2]">Description:</strong>
                  <p className="text-gray-700">{selectedProject.description}</p>
                </div>

                <div>
                  <strong className="text-[#1bbcf2]">
                    Roles & Responsibilities:
                  </strong>
                  <ul className="list-disc pl-6 text-gray-700">
                    {selectedProject.roles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.link && (
                  <div>
                    <strong className="text-[#1bbcf2]">Project Link:</strong>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {selectedProject.link}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SkillsContent() {
  return (
    <div
      id="skills"
      className="text-center px-6 py-16 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200"
    >
      <motion.h2
        className="text-4xl font-semibold text-black mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-screen-xl mx-auto">
        {/* Skill 1: Golang */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaCode className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-600">Golang</h3>
        </motion.div>

        {/* Skill 2: Java */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaJava className="text-4xl text-red-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-red-600">Java</h3>
        </motion.div>

        {/* Skill 3: React */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaReact className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-500">React</h3>
        </motion.div>

        {/* Skill 4: HTML */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaDatabase className="text-4xl text-orange-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-orange-600">HTML</h3>
        </motion.div>

        {/* Skill 5: CSS */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaCloud className="text-4xl text-teal-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-teal-600">CSS</h3>
        </motion.div>

        {/* Skill 6: SQL */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaDatabase className="text-4xl text-purple-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-purple-600">SQL</h3>
        </motion.div>

        {/* Skill 7: Git */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaGit className="text-4xl text-black mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-black">Git</h3>
        </motion.div>

        {/* Skill 8: Kubernetes */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SiApachekafka className="text-4xl text-green-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-green-600">Kafka</h3>
        </motion.div>
      </div>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-[#1bbcf2] mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>

      {/* Glassmorphic Card */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-lg text-center border border-[#1bbcf2]">
        <h3 className="text-3xl font-semibold text-[#083d77] mb-4">
          Get in Touch
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Feel free to reach out to me via email or LinkedIn!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col space-y-4">
          {/* Email Button */}
          <a
            href="mailto:mkanushagowda@gmail.com"
            className="flex items-center justify-center gap-3 bg-[#1bbcf2] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#1284a9] transition duration-300 transform hover:scale-105"
          >
            <FaEnvelope size={20} />
            Email Me
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/anusha-m-k-0925b02ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#1bbcf2] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#1284a9] transition duration-300 transform hover:scale-105"
          >
            <FaLinkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
