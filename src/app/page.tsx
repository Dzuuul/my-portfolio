'use client';
import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import OptimizedVideo from "@/components/OptimizedVideo";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Video Background */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="relative flex min-h-screen items-center justify-center px-8 overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/background-poster.jpg"
          >
            <source src="/background.mp4" type="video/mp4" />
            <source src="/background.webm" type="video/webm" />
            <img 
              src="/background-poster.jpg" 
              alt="Background fallback" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold text-white md:text-6xl"
          >
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 text-xl text-gray-200"
          >
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gray-50 dark:bg-gray-800 py-20 px-8" 
        id="about"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            variants={fadeInUp}
            className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <OptimizedImage
                src="/profile-placeholder.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full"
                priority
              />
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="md:w-2/3"
            >
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate full-stack developer with experience in building web applications
                using modern technologies. I love solving complex problems and creating elegant
                solutions that make a difference.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-8" 
        id="skills"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            variants={fadeInUp}
            className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white"
          >
            Skills
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { 
                title: "Frontend", 
                color: "blue",
                icon: (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                )
              },
              { 
                title: "Backend", 
                color: "green",
                icon: (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                )
              },
              { 
                title: "DevOps", 
                color: "purple",
                icon: (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                )
              },
              { 
                title: "Database", 
                color: "yellow",
                icon: (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 5h16"
                  />
                )
              },
              { 
                title: "Mobile Dev", 
                color: "red",
                icon: (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                )
              },
              { 
                title: "UI/UX", 
                color: "pink",
                icon: (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17a4 4 0 01-4 4h-4zm2-16H7v12a2 2 0 002 2h4a2 2 0 002-2V9h-4V5z"
                  />
                )
              },
              { 
                title: "Cloud", 
                color: "indigo",
                icon: (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                )
              },
              { 
                title: "Testing", 
                color: "emerald",
                icon: (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                )
              }
            ].map((skill) => (
              <motion.div
                key={skill.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`rounded-full bg-${skill.color}-100 p-4 dark:bg-${skill.color}-900`}
                >
                  <svg 
                    className={`h-8 w-8 text-${skill.color}-600`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {skill.icon}
                  </svg>
                </motion.div>
                <p className="mt-2 font-medium text-gray-900 dark:text-white">{skill.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section with Video */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gray-50 dark:bg-gray-800 py-20 px-8" 
        id="projects"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            variants={fadeInUp}
            className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 gap-12"
          >
            {/* Featured Project with Video */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Featured Project
              </h3>
              <div className="mb-4 relative aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <video
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/project-poster.jpg"
                >
                  <source src="/project-demo.mp4" type="video/mp4" />
                  <source src="/project-demo.webm" type="video/webm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      Your browser doesn't support video playback.
                      <a 
                        href="/project-demo.mp4" 
                        download 
                        className="text-blue-500 hover:text-blue-600 ml-2"
                      >
                        Download video
                      </a>
                    </p>
                  </div>
                </video>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                A detailed walkthrough of my featured project. This video demonstrates the key features
                and technical implementation details.
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>

            {/* Other Projects */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[1, 2].map((project) => (
                <motion.div
                  key={project}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700"
                >
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Project Name
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Description of the project and the technologies used.
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                    >
                      Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 px-8" 
        id="contact"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            variants={fadeInUp}
            className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="flex justify-center space-x-6"
          >
            {[
              { 
                name: "GitHub",
                href: "https://github.com/yourusername",
                path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              },
              {
                name: "LinkedIn",
                href: "https://linkedin.com/in/yourusername",
                path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              },
              {
                name: "Email",
                href: "mailto:your.email@example.com",
                path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              }
            ].map((social) => (
              <motion.a
                key={social.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={social.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">{social.name}</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
