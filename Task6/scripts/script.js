

const alerts_icon = document.getElementById('alerts-icon');

const alerts_menu = document.getElementById('alerts-menu');

// ✅ Show hidden DIV on hover
alerts_icon.addEventListener('mouseover', function handleMouseOver() {
  alerts_menu.style.visibility = 'visible';

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
alerts_icon.addEventListener('mouseout', function handleMouseOut() {
  alerts_menu.style.visibility = 'hidden';

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'hidden';
});

const announcements_icon = document.getElementById('announcements-icon');

const announcements_menu = document.getElementById('announcements-menu');

// ✅ Show hidden DIV on hover
announcements_icon.addEventListener('mouseover', function handleMouseOver() {
  announcements_menu.style.display = 'block';

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
announcements_icon.addEventListener('mouseout', function handleMouseOut() {
  announcements_menu.style.display = 'none';

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'hidden';
});
const ham_icon = document.getElementById('hamburger-icon');

const ham_menu = document.getElementById('hamburger-menu');

// ✅ Show hidden DIV on hover
ham_icon.addEventListener('mouseover', function handleMouseOver() {
  ham_menu.style.display = 'block';

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
ham_icon.addEventListener('mouseout', function handleMouseOut() {
  ham_menu.style.display = 'none';

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'hidden';
});