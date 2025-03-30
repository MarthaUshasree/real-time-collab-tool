import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Button from './Button';

function LandingPage() {
 
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 300;
      
      const sections = [
        { id: 'hero' },
        { id: 'problem-solution' },
        { id: 'features' },
        { id: 'storytelling' },
        { id: 'social-proof' },
        { id: 'productivity' },
        { id: 'fomo' },
        { id: 'comparison' }
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const features = [
    {
      icon: <DocumentTextIcon className="h-8 w-8 text-primary-400" />,
      title: "Real-Time Document Editing",
      description: "Collaborate on documents with your team in real-time. See changes as they happen."
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary-400" />,
      title: "Integrated Chat",
      description: "Communicate with your team directly within the document workspace."
    },
    {
      icon: <VideoCameraIcon className="h-8 w-8 text-primary-400" />,
      title: "Video Conferencing",
      description: "Start face-to-face meetings with a single click for better collaboration."
    },
    {
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary-400" />,
      title: "Cloud Storage",
      description: "Your documents are automatically saved and securely stored in the cloud."
    }
  ];

  const userTypes = [
    {
      icon: <UserGroupIcon className="h-12 w-12 text-primary-400" />,
      title: "Teams & Companies",
      description: "Collaborate on projects and streamline workflows."
    },
    {
      icon: <AcademicCapIcon className="h-12 w-12 text-primary-400" />,
      title: "Students & Educators",
      description: "Work on group assignments, conduct online classes."
    },
    {
      icon: <DocumentTextIcon className="h-12 w-12 text-primary-400" />,
      title: "Freelancers & Writers",
      description: "Share drafts, receive feedback in real time."
    },
    {
      icon: <BriefcaseIcon className="h-12 w-12 text-primary-400" />,
      title: "Businesses & Startups",
      description: "Improve communication and document management."
    }
  ];

  return (
    <div className="flex-grow relative">
     
      <motion.button
        className="fixed bottom-8 right-8 z-50 glass-card p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          y: showScrollTop ? 0 : 50 
        }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="h-6 w-6 text-primary-400" />
      </motion.button>

      {/* Section Dividers */}
      <div className="absolute left-0 right-0 pointer-events-none overflow-hidden">
        <div className="wave-divider top-[90vh]"></div>
      </div>

      {/* Approach 1: Minimalistic & Straightforward */}
      <section id="hero" className="hero-pattern min-h-[100vh] flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Work Together,</span>
              <span className="block gradient-text mt-2">Effortlessly.</span>
            </motion.h1>
            <motion.p 
              className="mt-6 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-8 md:max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              📄 <strong>Edit Documents in Real Time</strong> | 💬 <strong>Chat with Your Team</strong> | 🎥 <strong>Meet Instantly</strong>
            </motion.p>
            <motion.div
              className="mt-4 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-xl text-gray-300">
                A simple, intuitive tool that lets you and your team <strong>collaborate on documents, communicate via chat, and jump into video calls—all in one place</strong>.
              </p>
              <Button/>
            </motion.div>
            <motion.div 
              className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/register"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 glass-button rounded-xl text-lg md:text-xl md:py-4 md:px-10"
              >
                🚀 Start Collaborating Now!
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <button 
            onClick={() => scrollToSection('problem-solution')}
            className="glass-card p-2 rounded-full hover:bg-white/20 transition-all mb-14 duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>

      {/* Approach 2: Problem-Solution Approach */}
      <section id="problem-solution" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-extrabold sm:text-4xl gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Tired of Endless Emails & Disorganized Docs?
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Managing projects with scattered files, delayed updates, and constant emails is <strong>frustrating</strong>. We've solved that for you.
            </motion.p>
          </div>

          <motion.div
            className="mt-16 glass-card rounded-xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 via-transparent to-primary-600/10 rounded-xl"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative">🔥 With Our Real-Time Collaboration Tool, You Can:</h3>
            <ul className="space-y-3 relative">
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">✔️</span>
                <span className="text-gray-300">Work on <strong>live documents</strong> with your team.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">✔️</span>
                <span className="text-gray-300">Chat & <strong>discuss ideas instantly</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">✔️</span>
                <span className="text-gray-300">Host <strong>video calls</strong> without switching apps.</span>
              </li>
            </ul>
            <p className="mt-6 text-xl text-primary-400 font-bold relative">
              📢 One tool. One workspace. Everything your team needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/register"
              className="glass-card px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center"
            >
              👉 Try It Free Today!
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('features')}
            className="glass-card p-2 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>

      {/* Approach 3: Feature-Driven Approach */}
      <section id="features" className="py-24 bg-gradient-to-b from-black/10 to-black/30 relative">
        <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-text">
              The Ultimate Collaboration Hub – Everything in One Place
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {[
              { icon: <DocumentTextIcon className="h-8 w-8 text-primary-400" />, title: "📄 Real-Time Editing", desc: "Work together on live documents." },
              { icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary-400" />, title: "💬 Chat & Messaging", desc: "Stay connected with your team." },
              { icon: <VideoCameraIcon className="h-8 w-8 text-primary-400" />, title: "🎥 Built-in Video Calls", desc: "Meet without leaving your workspace." },
              { icon: <LockClosedIcon className="h-8 w-8 text-primary-400" />, title: "🔐 Secure Access Control", desc: "Set roles & permissions for safety." },
              { icon: <CloudArrowUpIcon className="h-8 w-8 text-primary-400" />, title: "☁️ Cloud-Powered", desc: "Work anywhere, anytime." }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 hover:bg-white/[0.15] transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1 text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/register"
              className="glass-card px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center"
            >
              🚀 Simplify Teamwork Today!
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('storytelling')}
            className="glass-card p-2 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>

      {/* Approach 4: Emotion-Driven / Storytelling Approach */}
      <section id="storytelling" className="py-24 relative">
        <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-text">
              Great Ideas Deserve Great Collaboration
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Imagine a workspace where your <strong>team's ideas come to life in real time</strong>. No more confusion, no more waiting—just smooth, effortless teamwork.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-white mb-6">Whether you're:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-lg text-center">🔹 A student working on a group project 🎓</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-lg text-center">🔹 A remote team brainstorming new ideas 💡</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-lg text-center">🔹 A business managing important documents 📊</p>
              </div>
            </div>
            <p className="mt-8 text-xl text-primary-400 font-bold text-center">
              🌟 We make teamwork faster, smarter, and stress-free.
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/register"
              className="glass-card px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center"
            >
              🚀 Start Your Journey Today!
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('social-proof')}
            className="glass-card p-2 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>

      {/* Approach 5: Social Proof & Trust Approach */}
      <section id="social-proof" className="py-24 bg-gradient-to-b from-black/30 to-black/10 relative">
        <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-text">
              Trusted by Thousands of Teams Worldwide
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Join <strong>5000+ teams</strong> and <strong>100,000+ users</strong> who are streamlining their work with our collaboration tool.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">🗣️</div>
              <p className="text-xl italic text-white mb-4">
                "This tool transformed the way our remote team works—no more lost files or miscommunication!"
              </p>
              <p className="text-lg text-primary-400">– John D., Project Manager</p>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-300 mb-8">
              📢 <strong>Don't just take our word for it. Experience the future of collaboration today!</strong>
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/register"
              className="glass-card px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center"
            >
              🎯 Try It Now – 100% Free!
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('productivity')}
            className="glass-card p-2 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>

      {/* Approach 6: Productivity & Efficiency-Focused Approach */}
      <section id="productivity" className="py-24 relative">
        <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-text">
              Boost Productivity by 40% with Real-Time Collaboration
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              💡 <strong>Teams waste an average of 10 hours per week</strong> switching between apps, waiting for updates, and tracking down files.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl text-white mb-8">🔹 <strong>What if you could reduce that to zero?</strong></p>
            
            <p className="text-xl text-white mb-6">With our <strong>all-in-one collaboration platform</strong>, you get:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-lg">✔️ <strong>Instant document updates</strong></p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-lg">✔️ <strong>Built-in communication tools</strong></p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-lg">✔️ <strong>Seamless project management</strong></p>
              </div>
            </div>
            <p className="mt-8 text-xl text-primary-400 font-bold">
              📢 <strong>Work smarter, not harder.</strong>
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/register"
              className="glass-card px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center"
            >
              🚀 Get Started for Free!
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('fomo')}
            className="glass-card p-2 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>

      {/* Approach 7: FOMO (Fear of Missing Out) Approach */}
      <section id="fomo" className="py-24 bg-gradient-to-b from-black/10 to-black/30 relative">
        <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-text">
              Join the Future of Team Collaboration – Don't Get Left Behind!
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              🌍 The world is moving <strong>faster than ever</strong>—your team should too.
            </p>
          </motion.div>
</div>
            </section>

      {/* Who Can Use This Section */}
      <section id="who-can-use" className="py-24 bg-gradient-to-b from-black/30 to-black/10 relative">
        <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-text">
              🌟 Who Can Use This?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-8 text-center hover:bg-white/[0.15] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{type.title}</h3>
                  <p className="mt-4 text-gray-300">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('get-started')}
            className="glass-card p-4 rounded-full hover:bg-white/15 transition-all duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>

      
        </div>
  );
}

export default LandingPage;