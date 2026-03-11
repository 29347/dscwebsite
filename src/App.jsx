import { useState } from 'react'
import { stats, events, team, socials } from './data'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-violet-600 to-fuchsia-600 p-2.5 rounded-xl shadow-lg shadow-purple-500/20">
              <i className="fas fa-brain text-white text-lg"></i>
            </div>
            <span className="font-extrabold text-2xl tracking-tighter">
              PCC <span className="gradient-text">DATA SCIENCE</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 font-semibold text-slate-300">
            <a href="#home"    className="hover:text-white transition-colors">Home</a>
            <a href="#about"   className="hover:text-white transition-colors">About</a>
            <a href="#events"  className="hover:text-white transition-colors">Events</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
          </div>

          <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-nav px-6 pb-6 flex flex-col space-y-4 font-semibold text-slate-300">
          <a href="#home"    onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Home</a>
          <a href="#about"   onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">About</a>
          <a href="#events"  onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Events</a>
          <a href="#team" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Team</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative pt-48 pb-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-3/5 mb-16 lg:mb-0 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
            Master the Art of <br /><span className="gradient-text">Data & AI.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Welcome to Pasadena City College's tech hub. We turn raw information into powerful insights and students into industry-ready data scientists.
          </p>
          <div className="flex flex-wrap justify-start gap-4 mb-10">
            <a href="#events" className="btn-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl">
              Start Learning
            </a>
            <a href={socials.discord} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-md flex items-center gap-3">
              <i className="fab fa-discord"></i> Join the Club
            </a>
            <a href={socials.lancerlife} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-md flex items-center gap-3">
              <i className="fas fa-graduation-cap"></i> LancerLife Page
            </a>
          </div>
          <div className="flex justify-center lg:justify-start space-x-6 text-2xl text-slate-500">
            <a href={socials.instagram} className="hover:text-white transition-colors" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={socials.linktree} className="hover:text-white transition-colors" title="Linktree">
              <i className="fas fa-tree"></i>
            </a>
          </div>
        </div>

        <div className="lg:w-2/5 w-full max-w-lg lg:max-w-none">
          <div className="code-window rounded-2xl overflow-hidden transform lg:rotate-3 transition-transform hover:rotate-0 duration-500">
            <div className="bg-slate-800/50 px-4 py-3 flex items-center space-x-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-500 ml-4 font-mono">predict_future.py</span>
            </div>
            <div className="p-6">
              <pre className="text-sm font-mono leading-relaxed text-slate-300">{`\u001b[35mfrom\u001b[0m sklearn \u001b[35mimport\u001b[0m pcc_lancers
\u001b[35mimport\u001b[0m knowledge \u001b[35mas\u001b[0m kn

\u001b[90m# Load student potential\u001b[0m
club = pcc_lancers.Club(name=\u001b[32m"Data Science"\u001b[0m)

\u001b[90m# Train on real-world datasets\u001b[0m
club.train(hours=\u001b[33m"unlimited"\u001b[0m, passion=\u001b[33mTrue\u001b[0m)

\u001b[90m# Predicting successful careers...\u001b[0m
results = club.predict(\u001b[36m"2026_graduates"\u001b[0m)
print(f\u001b[32m"Accuracy: {results.score}%"\u001b[0m)
\u001b[36m>>> Accuracy: 99.9%\u001b[0m`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-4 -mt-16 mb-24 relative z-10">
      <div className="glass-card rounded-3xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-5xl font-black gradient-text mb-2">{s.value}</div>
            <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function About() {
  const cards = [
    {
      icon: 'fa-terminal',
      bg: 'bg-violet-600/20', color: 'text-violet-400',
      hoverBg: 'group-hover:bg-violet-600',
      title: 'Python Mastery',
      desc: 'Deep dive into NumPy, Pandas, and Scikit-learn. Learn to write clean, production-ready data pipelines.',
    },
    {
      icon: 'fa-project-diagram',
      bg: 'bg-cyan-600/20', color: 'text-cyan-400',
      hoverBg: 'group-hover:bg-cyan-600',
      title: 'ML Foundations',
      desc: 'From Linear Regression to Neural Networks. Understand the math and logic behind the world\'s smartest AI.',
    },
    {
      icon: 'fa-microchip',
      bg: 'bg-pink-600/20', color: 'text-pink-400',
      hoverBg: 'group-hover:bg-pink-600',
      title: 'Project Incubator',
      desc: 'Collaborate on real-world datasets from NASA, Kaggle, and PCC Campus to build your professional portfolio.',
    },
  ]

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-purple-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">Core Competencies</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-white">Why Join the Data Revolution?</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl group">
              <div className={`w-16 h-16 ${c.bg} ${c.color} rounded-2xl flex items-center justify-center mb-8 ${c.hoverBg} group-hover:text-white transition-all duration-300`}>
                <i className={`fas ${c.icon} text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
              <p className="text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Events() {
  const accentColors = ['text-cyan-400', 'text-purple-400', 'text-pink-400']
  const hoverColors  = ['group-hover:text-cyan-400', 'group-hover:text-purple-400', 'group-hover:text-pink-400']

  return (
    <section id="events" className="py-32 px-4 bg-white/5 backdrop-blur-3xl">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left">
          <div>
            <h2 className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2">The Schedule</h2>
            <p className="text-4xl font-extrabold">Upcoming Sessions</p>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((e, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between group">
              <div className="flex flex-col md:flex-row items-center md:space-x-10 text-center md:text-left">
                <div className="mb-4 md:mb-0">
                  <div className="text-3xl font-black text-white">{e.month.toUpperCase()} {e.day}</div>
                  <div className={`${accentColors[i % accentColors.length]} font-bold text-sm tracking-widest`}>
                    {e.dayOfWeek || 'FRIDAY'}
                  </div>
                </div>
                <div className="h-12 w-px bg-white/10 hidden md:block"></div>
                <div>
                  <h4 className={`text-2xl font-bold ${hoverColors[i % hoverColors.length]} transition-colors`}>{e.title}</h4>
                  <p className="text-slate-500 max-w-md">{e.desc}</p>
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex items-center space-x-6">
                <div className="text-right hidden sm:block">
                  <div className="text-white font-bold">{e.location}</div>
                  <div className="text-slate-500 text-sm">{e.time}</div>
                </div>
                {e.signupUrl && (
                  <a href={e.signupUrl} target="_blank" rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-extrabold hover:bg-cyan-400 hover:text-white transition-all whitespace-nowrap">
                    Sign Up
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-fuchsia-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">The People</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-white">Club Officers</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="glass-card rounded-3xl overflow-hidden text-center group">
              <div className="bg-gradient-to-br from-violet-900/60 to-fuchsia-900/40 p-8">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-white/20"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-4 border-2 border-white/20">
                    {m.initials}
                  </div>
                )}
                <h3 className="text-white font-bold text-xl">{m.name}</h3>
              </div>
              <div className="p-6">
                <span className="inline-block bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
                  {m.role}
                </span>
                <p className="text-slate-400 text-sm leading-relaxed">{m.bio}</p>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <i className="fab fa-linkedin text-base"></i>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 text-slate-500 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="bg-gradient-to-tr from-violet-600 to-fuchsia-600 p-2 rounded-lg mb-6">
          <i className="fas fa-brain text-white"></i>
        </div>
        <div className="font-black text-2xl text-white tracking-tighter mb-4">
          PCC <span className="gradient-text">DATA SCIENCE</span>
        </div>
        <p className="max-w-md mx-auto mb-10">
          Empowering the next generation of data specialists and machine learning engineers in Southern California.
        </p>
        <div className="text-xs font-bold tracking-[0.3em] uppercase opacity-50">
          &copy; {new Date().getFullYear()} Pasadena City College · Data Science Club
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Events />
      <Team />
      <Footer />
    </>
  )
}
