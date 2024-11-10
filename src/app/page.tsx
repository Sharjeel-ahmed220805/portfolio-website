// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#projects" className="hover:underline">Projects</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-16 text-center" id="home">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-4">Hello, I'm Sharjeel Ahmed</h2>
          <p className="text-xl mb-6">I build modern web applications with Typescript, HTML and CSS.</p>
          <Link href="#projects" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            View My Projects
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16" id="about">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto">
          I am a student at GIAIC, pursuing a course in Artificial Intelligence, web 3.0, & Metaverse. Passionte about technology and constantly learning new skills to stay up-to-date with the latest innovations.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-16" id="projects">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Project One</h3>
              <p className="text-gray-600 mb-4">A static resume builder allows users to create a professional resume using predefined templates and fixed formatting, with no dynamic or interactive customization options.</p>
              <Link href="https://staticresumebuilderbysharjeel.vercel.app/" className="text-blue-600 hover:underline">View Project</Link>
            </div>
            {/* Project Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Project Two</h3>
              <p className="text-gray-600 mb-4">An HTML and CSS simple website is a basic web page built using HTML for structure and CSS for styling, creating a static, visually appealing online presence.</p>
              <Link href="https://html-css-eight-sooty.vercel.app/" className="text-blue-600 hover:underline">View Project</Link>
            </div>
            {/* Project Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Project Three</h3>
              <p className="text-gray-600 mb-4">A dynamic resume builder offers real-time customization, allowing users to tailor content, layout, and design to create a personalized and interactive resume.</p>
              <Link href="https://dynamicresumebuilderbysharjeel.vercel.app/" className="text-blue-600 hover:underline">View Project</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <p className="text-lg mb-6">Feel free to reach out if you'd like to collaborate or discuss a project!</p>
          <form className="max-w-xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={4}
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Sharjeel</p>
        </div>
      </footer>
    </div>
  );
}
