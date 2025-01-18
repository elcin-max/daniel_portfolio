import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Globe, Server, Database } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
      setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'React.js', level: 85 },
  ];

  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A modern e-commerce analytics dashboard with real-time data visualization',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management platform with real-time updates',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=350&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather forecasting with interactive maps',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=350&fit=crop',
      tags: ['React', 'Weather API', 'Charts'],
      link: '#'
    }
  ];
const technologies = [
  {
    name: 'Frontend',
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    skills: [
      { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ]
  },
  {
    name: 'Backend',
    icon: <Server className="w-8 h-8 text-purple-400" />,
    skills: [
      { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ]
  },
  {
    name: 'Tools & Others',
    icon: <Code2 className="w-8 h-8 text-purple-400" />,
    skills: [
      { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ]
  },
  {
    name: 'Databases',
    icon: <Database className="w-8 h-8 text-purple-400" />,
    skills: [
      { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Redis', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ]
  }
];
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Daniel
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'text-purple-400 border-b-2 border-purple-400'
                      : 'text-gray-400 hover:text-purple-400'
                  } px-1 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'bg-gray-800 text-purple-400'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-purple-400'
                  } block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}img
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
              alt="Daniel"
              className="w-40 h-40 rounded-full mx-auto shadow-lg transform hover:scale-105 transition-transform duration-300 ring-4 ring-purple-400/20"
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text animate-fade-in">
              Hi, I'm Daniel
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A passionate web developer with 3+ years of experience in creating
              modern web applications using React.js and other cutting-edge technologies.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      

      {/* Skills Section */}
      <section id="about" className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">About Me</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&h=400&fit=crop"
            alt="Coding Setup"
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&h=150&fit=crop"
              alt="Code"
              className="rounded-lg shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed animate-fade-in">
          I'm a web developer at Jori Technology with a unique background,
          holding a BA in English. This combination allows me to bring both
          technical expertise and strong communication skills to my work.
        </p>
        <p className="text-gray-400 leading-relaxed animate-fade-in">
          With over 3 years of experience in web development, I specialize
          in creating responsive, user-friendly web applications using
          modern technologies and best practices.
        </p>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-6 text-purple-400">Quick Facts</h3>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="w-12 h-12 flex items-center justify-center bg-purple-400/10 rounded-lg">
              <Code2 className="w-6 h-6 text-purple-400" />
            </span>
            <div>
              <span className="block text-sm text-gray-400">Experience</span>
              <span className="block text-lg font-medium">3 years, 5 months</span>
            </div>
          </li>
          <li className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="w-12 h-12 flex items-center justify-center bg-purple-400/10 rounded-lg">
              <Globe className="w-6 h-6 text-purple-400" />
            </span>
            <div>
              <span className="block text-sm text-gray-400">Education</span>
              <span className="block text-lg font-medium">BA in English</span>
            </div>
          </li>
          <li className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="w-12 h-12 flex items-center justify-center bg-purple-400/10 rounded-lg">
              <Server className="w-6 h-6 text-purple-400" />
            </span>
            <div>
              <span className="block text-sm text-gray-400">Company</span>
              <span className="block text-lg font-medium">Jori Technology</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Skills & Technologies</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {technologies.map((category, index) => (
        <div
          key={category.name}
          className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800 group hover:scale-105"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="flex items-center gap-3 mb-6">
            {category.icon}
            <h3 className="text-xl font-semibold text-gray-200">{category.name}</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-12 h-12 mb-2 transform group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <a
                      href={project.link}
                      className="text-white p-4 flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-900 text-purple-400 rounded-full text-sm font-medium border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-12 border-l-2 border-gray-800">
              <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full -left-[9px] top-0"></div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-800">
                <h3 className="text-xl font-semibold text-gray-200">Web Developer</h3>
                <p className="text-purple-400 mb-4">Jori Technology</p>
                <p className="text-gray-400 mb-4">2020 - Present</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Developed and maintained multiple React.js applications</li>
                  <li>Implemented responsive designs using Tailwind CSS and Bootstrap</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                  <li>Optimized application performance and user experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 px-4 rounded-md hover:from-purple-500 hover:to-pink-500 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;