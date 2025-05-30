// Dark mode toggle
function toggleTheme() {
    console.log('Toggling theme');
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    console.log('Theme set to:', localStorage.theme);
}

// Mobile menu toggle
function openMenu() {
    document.getElementById('sideMenu').style.right = '0';
}

function closeMenu() {
    document.getElementById('sideMenu').style.right = '-100%';
}

// Set initial theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    console.log('Initial theme: dark');
} else {
    document.documentElement.classList.remove('dark');
    console.log('Initial theme: light');
}

// Animate skill bars when scrolled to
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Check if skills section is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Handle scroll event
let skillsAnimated = false;
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    if (isInViewport(skillsSection) && !skillsAnimated) {
        animateSkillBars();
        skillsAnimated = true;
    }
});