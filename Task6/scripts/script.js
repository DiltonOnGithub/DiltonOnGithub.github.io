const alerts_icon = document.getElementById('alerts-icon');
const alerts_menu = document.getElementById('alerts-menu');

alerts_icon.addEventListener('mouseover', function handleMouseOver() {
  alerts_menu.style.visibility = 'visible';
  ham_menu.style.visibility = 'hidden';
  announcements_menu.style.visibility = 'hidden';
});

alerts_icon.addEventListener('mouseout', function handleMouseOut() {
  alerts_menu.style.visibility = 'hidden';
  announcements_menu.style.visibility = 'hidden';
  ham_menu.style.visibility = 'hidden';
});


const announcements_icon = document.getElementById('announcements-icon');
const announcements_menu = document.getElementById('announcements-menu');

announcements_icon.addEventListener('mouseover', function handleMouseOver() {
  announcements_menu.style.visibility = 'visible';
  alerts_menu.style.visibility = 'hidden';
  ham_menu.style.visibility = 'hidden';
});
announcements_icon.addEventListener('mouseout', function handleMouseOut() {
  alerts_menu.style.visibility = 'hidden';
  announcements_menu.style.visibility = 'hidden';
  ham_menu.style.visibility = 'hidden';
});


const ham_icon = document.getElementById('hamburger-icon');
const ham_menu = document.getElementById('hamburger-menu');
ham_icon.addEventListener('mouseover', function handleMouseOver() {
  ham_menu.style.visibility = 'visible';
  alerts_menu.style.visibility = 'hidden';
  announcements_menu.style.visibility = 'hidden';
});

// ✅ (optionally) Hide DIV on mouse out
ham_icon.addEventListener('mouseout', function handleMouseOut() {
  alerts_menu.style.visibility = 'hidden';
  announcements_menu.style.visibility = 'hidden';
  ham_menu.style.visibility = 'hidden';
});