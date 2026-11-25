let phone_manu_icon = document.getElementById("phone-manu-icon");
let main_mobile_manu = document.querySelector("#main_mobile_manu");
let phone_manu_value = true;
let mobileMenu = document.getElementById("mobileMenu");
let manu_off = document.querySelector(".manu_off")
// let tempbox =document.getElementById("tempbox")


phone_manu_icon.addEventListener("click", () => {
  if (phone_manu_value == true) {
    // main_mobile_manu.style.display = "block !important";
    main_mobile_manu.classList.add ("manu_on");
    main_mobile_manu.classList.remove ( "manu_off");
    phone_manu_value = false;
    // tempbox.classList.add = "";
    phone_manu_icon.innerHTML = `<i class="fa-solid fa-x"></i>`;
    
    // <i class="fa-solid fa-xmark"></i>
    // console.log("0")
  }
  else {
    // main_mobile_manu.style.display = "none !important";
    // manu_off.style.display,transform = "block" , "translateY(0%)";
    main_mobile_manu.classList.add ( "manu_off");
    main_mobile_manu.classList.remove( "manu_on");
    // tempbox.style.backgroundColor = "blue" ;
    phone_manu_icon.innerHTML = `<i class="fas fa-bars fa-lg"></i>`;
    phone_manu_value = true;
    // console.log("1")
  }
}

)


/* ── Data ── */
const skills = [
  { name: 'HTML5', icon: '🌐', pct: 95, cat: 'Frontend' },
  { name: 'CSS3', icon: '🎨', pct: 90, cat: 'Frontend' },
  { name: 'JavaScript', icon: '⚡', pct: 88, cat: 'Frontend' },
  { name: 'Bootstrap', icon: '🅱️', pct: 92, cat: 'Framework' },
  // { name: 'Git & GitHub', icon: '🐙', pct: 85, cat: 'Tools' },
];

 const projects = [
  
//   {
//     title: 'E-Commerce Platform',
//     desc: 'A full-stack shopping app with cart, payments, and admin dashboard built with React and Node.js.',
//     tags: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
//     emoji: '🛒',
//     bg: 'linear-gradient(135deg,#1a1a2e,#16213e)',
//     demo: '#', code: '#'
//   },
//   {
//     title: 'Task Manager App',
//     desc: 'A drag-and-drop productivity tool with real-time sync, user auth, and dark mode.',
//     tags: ['JavaScript', 'CSS3', 'Firebase'],
//     emoji: '✅',
//     bg: 'linear-gradient(135deg,#0f3460,#533483)',
//     demo: '#', code: '#'
//   },
//   {
//     title: 'Weather Dashboard',
//     desc: 'Beautiful weather app with 7-day forecast, location search, and animated weather icons.',
//     tags: ['HTML', 'CSS', 'JS', 'OpenWeather API'],
//     emoji: '🌤️',
//     bg: 'linear-gradient(135deg,#1a1a2e,#204051)',
//     demo: '#', code: '#'
//   },
//   {
//     title: 'Portfolio CMS',
//     desc: 'A dynamic portfolio with a content management system so clients can update content themselves.',
//     tags: ['React', 'Node.js', 'MySQL'],
//     emoji: '💼',
//     bg: 'linear-gradient(135deg,#16213e,#0f3460)',
//     demo: '#', code: '#'
//   },
//   {
//     title: 'Chat Application',
//     desc: 'Real-time chat with rooms, private messages, file sharing, and emoji reactions using Socket.io.',
//     tags: ['Socket.io', 'Express', 'React'],
//     emoji: '💬',
//     bg: 'linear-gradient(135deg,#12012c,#1e0a3c)',
//     demo: '#', code: '#'
//   },
//   {
//     title: 'Restaurant Website',
//     desc: 'Elegant multi-page restaurant site with online reservations, menu showcase, and Google Maps.',
//     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
//     emoji: '🍽️',
//     bg: 'linear-gradient(135deg,#1a0a00,#3d1a00)',
//     demo: '#', code: '#'
//   },
];

/* ── Render Skills ── */
const sg = document.getElementById('skills-grid');
skills.forEach(s => {
  sg.innerHTML += `
    <div class="col-sm-6 col-lg-3 fade-up">
      <div class="skill-card">
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="${s.pct}"></div></div>
        <div class="skill-pct">${s.pct}%</div>
      </div>
    </div>`;
});

/* ── Render Projects ── */
const pg = document.getElementById('projects-grid');
projects.forEach(p => {
  pg.innerHTML += `
    <div class="col-md-6 col-xl-4 fade-up">
      <div class="project-card">
        <div class="project-thumb" style="background:${p.bg}">${p.emoji}</div>
        <div class="project-body">
          <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
          <div class="project-title">${p.title}</div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-links">
            <a href="${p.demo}" class="proj-link proj-link-demo"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="${p.code}" class="proj-link proj-link-code"><i class="fab fa-github"></i> Code</a>
          </div>
        </div>
      </div>
    </div>`;
});

/* ── Typed Text ── */


// const roles = ['Web Developer','Frontend Engineer','React Developer','UI Builder','Problem Solver'];
// let ri=0, ci=0, del=false;
// function type(){
//   const cur = roles[ri];
//   document.getElementById('typed-text').textContent = del ? cur.slice(0,ci--) : cur.slice(0,ci++);
//   if(!del && ci>cur.length){ del=true; setTimeout(type,1400); return; }
//   if(del && ci<0){ del=false; ri=(ri+1)%roles.length; }
//   setTimeout(type, del?55:95);
// }
// type();

/* ── Navbar scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 50);
});

/* ── Fade-up observer ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

/* ── Skill bar animate ── */
const sObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(f => {
        f.style.width = f.dataset.pct + '%';
      });
    }
  });
}, { threshold: .2 });
document.querySelectorAll('#skills-grid').forEach(el => sObs.observe(el));

/* ── Mobile menu ── */
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.style.display = m.style.display === 'none' ? 'flex' : `none`;
}

/* ── Contact form ── */
function sendMessage() {
  const n = document.getElementById('inp-name').value.trim();
  const e = document.getElementById('inp-email').value.trim();
  const m = document.getElementById('inp-msg').value.trim();
  if (!n || !e || !m) { alert('Please fill in all required fields.'); return; }
  const btn = document.getElementById('send-btn');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    btn.disabled = false;
    ['inp-name', 'inp-email', 'inp-subject', 'inp-msg'].forEach(id => document.getElementById(id).value = '');
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
  }, 1600);
}