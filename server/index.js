import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaLinkedin, FaCode, FaJava, FaReact, FaDatabase, FaCloud, FaGit, FaEnvelope } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Welcome() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#E6F7FF] text-[#083d77] min-h-screen", children: [
    /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 w-full bg-[#1bbcf2] p-4 shadow-lg z-50 flex justify-center space-x-6", children: [
      /* @__PURE__ */ jsx(NavItem, { to: "home", label: "Home" }),
      /* @__PURE__ */ jsx(NavItem, { to: "experience", label: "Experience" }),
      /* @__PURE__ */ jsx(NavItem, { to: "projects", label: "Projects" }),
      /* @__PURE__ */ jsx(NavItem, { to: "skills", label: "Skills" }),
      /* @__PURE__ */ jsx(NavItem, { to: "contact", label: "Contact" })
    ] }),
    /* @__PURE__ */ jsx(Section, { id: "home", content: /* @__PURE__ */ jsx(HomeAboutSection, {}) }),
    /* @__PURE__ */ jsx(Section, { id: "experience", content: /* @__PURE__ */ jsx(ExperienceContent, {}) }),
    /* @__PURE__ */ jsx(Section, { id: "projects", content: /* @__PURE__ */ jsx(ProjectsContent, {}) }),
    /* @__PURE__ */ jsx(Section, { id: "skills", content: /* @__PURE__ */ jsx(SkillsContent, {}) }),
    /* @__PURE__ */ jsx(Section, { id: "contact", content: /* @__PURE__ */ jsx(ContactContent, {}) }),
    /* @__PURE__ */ jsx(BackToTop, {})
  ] });
}
function NavItem({ to, label }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to,
      smooth: true,
      duration: 500,
      className: "cursor-pointer text-white hover:text-[#083d77] transition font-medium",
      children: label
    }
  );
}
function Section({ id, content }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      id,
      className: "h-screen flex flex-col justify-center items-center text-center px-6 bg-[#E6F7FF] w-full",
      children: /* @__PURE__ */ jsx("div", { className: "w-full", children: content })
    }
  );
}
function BackToTop() {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => animateScroll.scrollToTop(),
      className: "fixed bottom-5 right-5 bg-[#1bbcf2] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#1595c2] transition",
      children: "↑ Top"
    }
  );
}
function HomeAboutSection() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center px-12 py-24 bg-[#E6F7FF] min-h-screen text-[#083d77] w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:w-1/3 w-full flex flex-col items-center text-left space-y-6", children: [
      /* @__PURE__ */ jsx(
        motion.h1,
        {
          className: "text-3xl font-serif text-[#1bbcf2] leading-snug",
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 },
          children: "Hello, I'm"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          className: "text-4xl font-serif font-bold text-[#083d77] leading-tight",
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 },
          children: "Anusha Krishna"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h3,
        {
          className: "text-2xl font-serif text-gray-600 leading-relaxed",
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 },
          children: "Software Developer"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 mt-8", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "D:/Resumes/</div>Job/Anusha.pdf",
            download: true,
            className: "bg-[#1bbcf2] text-white py-3 px-8 rounded-full shadow-md hover:bg-[#1595c2] transition transform hover:scale-105 text-base",
            children: "Resume"
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/anusha-m-k-0925b02ab/",
            target: "_blank",
            className: "bg-[#1bbcf2] text-white py-3 px-8 rounded-full shadow-md hover:bg-[#1595c2] flex items-center gap-2 transform hover:scale-105 text-base",
            children: [
              /* @__PURE__ */ jsx(FaLinkedin, { size: 20, className: "text-white" }),
              " LinkedIn"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:w-2/3 w-full mt-12 md:mt-0 md:pl-12", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          className: "text-4xl font-semibold text-[#1bbcf2] mb-6",
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: "About Me"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          className: "text-lg text-[#083d77] mb-6 max-w-3xl text-justify",
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
          children: "Enthusiastic MSc Software Development graduate with 3+ years of experience in designing and delivering scalable, high-performance software solutions. Proficient in Golang and cloud-native architectures, with expertise in building distributed, event-driven systems. Skilled in developing maintainable, efficient, and secure applications within Agile frameworks."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-white shadow-lg p-6 rounded-xl border border-[#1bbcf2] hover:shadow-xl transition duration-300",
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5 },
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#083d77] mb-2", children: "Experience" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700", children: "3+ years working with Golang, Java, React, and modern web technologies." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-white shadow-lg p-6 rounded-xl border border-[#1bbcf2] hover:shadow-xl transition duration-300",
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5 },
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#083d77] mb-2", children: "Education" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700", children: "Masters in Software Development - University of Strathclyde (2023 - 2024)" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function ExperienceContent() {
  return /* @__PURE__ */ jsxs("div", { className: "text-center px-6 py-16 bg-[#E6F7FF]", children: [
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        className: "text-4xl font-semibold text-[#1bbcf2] mb-12",
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: "Work Experience"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "space-y-12 max-w-screen-xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        motion.section,
        {
          className: "relative bg-white shadow-xl p-8 rounded-lg border border-[#1bbcf2] mb-12 transition-all duration-300 ease-in-out transform overflow-hidden h-[200px] hover:h-[350px] hover:shadow-2xl hover:border-[#1bbcf2] hover:scale-105 hover:bg-[#DFF6FF]",
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#083d77] mb-2", children: "Software Developer - Edu-Easy" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-4", children: "Sep 2023 - Feb 2025" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-6", children: "Developed and maintained high-performance, distributed backend services using Golang." }),
            /* @__PURE__ */ jsxs("div", { className: "text-gray-700", children: [
              /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Key Responsibilities:" }) }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mt-2", children: [
                /* @__PURE__ */ jsx("li", { children: "Designed and implemented Microservices for scalable service-to-service communication." }),
                /* @__PURE__ */ jsx("li", { children: "Utilized goroutines and channels to enhance concurrency, improving system throughput." }),
                /* @__PURE__ */ jsx("li", { children: "Worked on fault-tolerant distributed architectures with high availability." }),
                /* @__PURE__ */ jsx("li", { children: "Optimized API response times and system efficiency." }),
                /* @__PURE__ */ jsx("li", { children: "Conducted performance tuning and debugging in distributed environments." })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          className: "relative bg-white shadow-xl p-8 rounded-lg border border-[#1bbcf2] mb-12 transition-all duration-300 ease-in-out transform overflow-hidden h-[200px] hover:h-[350px] hover:shadow-2xl hover:border-[#1bbcf2] hover:scale-105 hover:bg-[#DFF6FF]",
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#083d77] mb-2", children: "Software Backend Developer - C-Square Info Solutions" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-4", children: "Apr 2022 - Aug 2023" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-6", children: "Worked on server-side applications using Go (Golang) and Java." }),
            /* @__PURE__ */ jsxs("div", { className: "text-gray-700", children: [
              /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Key Responsibilities:" }) }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mt-2", children: [
                /* @__PURE__ */ jsx("li", { children: "Optimized queries and data structures to improve API response times." }),
                /* @__PURE__ */ jsx("li", { children: "Launched a key feature that increased user engagement by 30%." }),
                /* @__PURE__ */ jsx("li", { children: "Developed event-driven applications using Kafka for distributed message streaming." }),
                /* @__PURE__ */ jsx("li", { children: "Integrated SQL databases and optimized queries for high-traffic systems." }),
                /* @__PURE__ */ jsx("li", { children: "Collaborated with frontend teams for seamless React-Golang integrations." })
              ] })
            ] })
          ] })
        }
      )
    ] })
  ] });
}
function ProjectsContent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "MySmartShala",
      description: "MySmartShala is an EdTech platform that digitizes educational institutions by providing a paperless system for managing assignments, evaluations, and student-teacher communication. It offers secure document submission, real-time feedback, and streamlined administrative tasks.",
      roles: [
        "I focused on building the backend system to manage student-teacher communication and document submission.",
        "I used Golang to implement RESTful APIs that allowed users to submit assignments, receive real-time feedback, and interact with the system.",
        "Collaborated with frontend teams for seamless integrations and development."
      ],
      link: "https://www.mysmartshala.com/"
    },
    {
      id: 2,
      title: "Abbott",
      description: "Abbott OSV is a comprehensive Sales Information System designed to streamline sales reporting and data access for Abbott’s sales teams. It consolidates sales data, providing real-time updates and easy access to actionable insights for the teams.",
      roles: [
        "Developed and maintained backend services using Golang.",
        "Optimized system performance and reduced response times.",
        "Implemented event-driven architectures using Kafka.",
        "Worked on real-time order processing features.",
        "Implemented user authentication and role-based access control."
      ],
      link: "https://www.abbott.in/"
    },
    {
      id: 3,
      title: "SFA 360",
      description: "SFA360 is a cloud-based Sales Force Automation platform that automates lead management, field force tracking, and reporting. It integrates real-time data, providing actionable insights to sales teams and helping automate administrative tasks.",
      roles: [
        "Worked on the frontend development using React.",
        "Developed RESTful APIs using Golang and integrated them with   React components, ensuring seamless communication between the backend and frontend.",
        "Optimized database queries with PostgreSQL and MS SQL for high performance.",
        "Collaborated closely with stakeholders to define product features."
      ],
      link: "https://sfa360.in/"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "px-6 py-16 bg-[#E6F7FF]", children: [
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        className: "text-4xl font-semibold text-center text-[#1bbcf2] mb-12",
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: "Projects"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-xl mx-auto", children: projects.map((project) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "bg-white shadow-lg rounded-xl p-6 border border-[#1bbcf2] hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out",
        whileHover: { scale: 1.05 },
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#083d77] mb-4", children: project.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6", children: project.description }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "inline-block bg-[#1bbcf2] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1284a9] transition",
              onClick: () => setSelectedProject(project),
              children: "View Details"
            }
          )
        ]
      },
      project.id
    )) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selectedProject && /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-0 bg-gray-900/50 backdrop-blur-lg flex justify-center items-center",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative",
            initial: { scale: 0.8 },
            animate: { scale: 1 },
            exit: { scale: 0.8 },
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "absolute top-4 right-4 text-gray-600 hover:text-black",
                  onClick: () => setSelectedProject(null),
                  children: /* @__PURE__ */ jsx(X, { size: 24 })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-left space-y-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#083d77]", children: selectedProject.title }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-[#1bbcf2]", children: "Description:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: selectedProject.description })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-[#1bbcf2]", children: "Roles & Responsibilities:" }),
                  /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 text-gray-700", children: selectedProject.roles.map((role, index) => /* @__PURE__ */ jsx("li", { children: role }, index)) })
                ] }),
                selectedProject.link && /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-[#1bbcf2]", children: "Project Link:" }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: selectedProject.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-blue-500 hover:text-blue-700",
                      children: selectedProject.link
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}
function SkillsContent() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "skills",
      className: "text-center px-6 py-16 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200",
      children: [
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            className: "text-4xl font-semibold text-black mb-12",
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            children: "Skills"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-screen-xl mx-auto", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out",
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx(FaCode, { className: "text-4xl text-blue-600 mb-4 mx-auto" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-blue-600", children: "Golang" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out",
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx(FaJava, { className: "text-4xl text-red-600 mb-4 mx-auto" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-red-600", children: "Java" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out",
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx(FaReact, { className: "text-4xl text-blue-500 mb-4 mx-auto" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-blue-500", children: "React" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out",
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx(FaDatabase, { className: "text-4xl text-orange-600 mb-4 mx-auto" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-orange-600", children: "HTML" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out",
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx(FaCloud, { className: "text-4xl text-teal-600 mb-4 mx-auto" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-teal-600", children: "CSS" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out",
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx(FaDatabase, { className: "text-4xl text-purple-600 mb-4 mx-auto" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-purple-600", children: "SQL" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out",
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx(FaGit, { className: "text-4xl text-black mb-4 mx-auto" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-black", children: "Git" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out",
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx(SiApachekafka, { className: "text-4xl text-green-600 mb-4 mx-auto" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-green-600", children: "Kafka" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ContactContent() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-100 to-gray-200", children: [
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        className: "text-4xl font-bold text-[#1bbcf2] mb-6",
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: "Contact"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-lg text-center border border-[#1bbcf2]", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-semibold text-[#083d77] mb-4", children: "Get in Touch" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6", children: "Feel free to reach out to me via email or LinkedIn!" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:mkanushagowda@gmail.com",
            className: "flex items-center justify-center gap-3 bg-[#1bbcf2] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#1284a9] transition duration-300 transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsx(FaEnvelope, { size: 20 }),
              "Email Me"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/anusha-m-k-0925b02ab/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-center gap-3 bg-[#1bbcf2] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#1284a9] transition duration-300 transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsx(FaLinkedin, { size: 20 }),
              "Connect on LinkedIn"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BHP6uCCK.js", "imports": ["/assets/chunk-HA7DTUK3-DwIzA06v.js", "/assets/index-BqkXzDZD.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-Bqjf0o0U.js", "imports": ["/assets/chunk-HA7DTUK3-DwIzA06v.js", "/assets/index-BqkXzDZD.js", "/assets/with-props-BsT4o02u.js"], "css": ["/assets/root-DkdrSLXD.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-BdjzlakM.js", "imports": ["/assets/with-props-BsT4o02u.js", "/assets/chunk-HA7DTUK3-DwIzA06v.js", "/assets/index-BqkXzDZD.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-358e8e53.js", "version": "358e8e53" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
