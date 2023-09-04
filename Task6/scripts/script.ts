const alerts_icon1: HTMLElement | null = document.getElementById('alerts-icon');
const alerts_menu1: HTMLElement | null = document.getElementById('alerts-menu');

alerts_icon1.addEventListener('mouseover', function handleMouseOver() {
  alerts_menu1.style.visibility = 'visible';
  ham_menu1.style.visibility = 'hidden';
  announcements_menu1.style.visibility = 'hidden';
});

alerts_icon1.addEventListener('mouseout', function handleMouseOut() {
  alerts_menu1.style.visibility = 'hidden';
  announcements_menu1.style.visibility = 'hidden';
  ham_menu1.style.visibility = 'hidden';
});


const announcements_icon1: HTMLElement | null = document.getElementById('announcements-icon');
const announcements_menu1: HTMLElement | null = document.getElementById('announcements-menu');

announcements_icon1.addEventListener('mouseover', function handleMouseOver() {
  announcements_menu1.style.visibility = 'visible';
  alerts_menu1.style.visibility = 'hidden';
  ham_menu1.style.visibility = 'hidden';
});
announcements_icon1.addEventListener('mouseout', function handleMouseOut() {
  alerts_menu1.style.visibility = 'hidden';
  announcements_menu1.style.visibility = 'hidden';
  ham_menu1.style.visibility = 'hidden';
});


const ham_icon1: HTMLElement | null = document.getElementById('hamburger-icon');
const ham_menu1: HTMLElement | null = document.getElementById('hamburger-menu');
ham_icon1.addEventListener('mouseover', function handleMouseOver() {
  ham_menu1.style.visibility = 'visible';
  alerts_menu1.style.visibility = 'hidden';
  announcements_menu1.style.visibility = 'hidden';
});

// ✅ (optionally) Hide DIV on mouse out
ham_icon1.addEventListener('mouseout', function handleMouseOut() {
  alerts_menu1.style.visibility = 'hidden';
  announcements_menu1.style.visibility = 'hidden';
  ham_menu1.style.visibility = 'hidden';
});