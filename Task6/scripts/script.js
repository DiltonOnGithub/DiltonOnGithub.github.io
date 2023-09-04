const alerts_icon = document.getElementById('alerts-icon');
const alerts_menu = document.getElementById('alerts-menu');

alerts_icon.addEventListener('mouseover', function handleMouseOver() {
  alerts_menu.style.visibility = 'visible';
});

alerts_icon.addEventListener('mouseout', function handleMouseOut() {
  alerts_menu.style.visibility = 'hidden';
});


const announcements_icon = document.getElementById('announcements-icon');
const announcements_menu = document.getElementById('announcements-menu');

announcements_icon.addEventListener('mouseover', function handleMouseOver() {
  announcements_menu.style.visibility = 'visible';
});

announcements_icon.addEventListener('mouseout', function handleMouseOut() {
  announcements_menu.style.visibility = 'hidden';
});


const ham_icon = document.getElementById('hamburger-icon');
const ham_menu = document.getElementById('hamburger-menu');
ham_icon.addEventListener('mouseover', function handleMouseOver() {
  ham_menu.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
ham_icon.addEventListener('mouseout', function handleMouseOut() {
  ham_menu.style.visibility = 'hidden';
});