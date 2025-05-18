function showMessage() {
  const output = document.getElementById("output");
  output.textContent = "You clicked the button! 🎉";
}

//for seperate nav to change active class
window.addEventListener('DOMContentLoaded', () => {
    fetch('assets/topnav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;

            // After inserting, highlight the current page
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.topnav a');
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.classList.add('active');
                }
            });
        })
});

// for the dropdown things
/*
document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', () => {
    const dropdown = button.closest('.dropdown');
    dropdown.classList.toggle('open');
  });
});
*/

document.querySelectorAll('.dropdown-btn').forEach(button => {
  const dropdown = button.closest('.dropdown');
  const content = dropdown.querySelector('.dropdown-content');

  button.addEventListener('click', () => {
    const isOpen = dropdown.classList.contains('open');

    if (isOpen) {
      // Closing
      const fullHeight = content.scrollHeight;
      content.style.height = fullHeight + 'px'; // set to current height
      requestAnimationFrame(() => {
        content.style.height = '0px';
      });
      dropdown.classList.remove('open');
    } else {
      // Opening
      const fullHeight = content.scrollHeight;
      content.style.height = fullHeight + 'px';
      dropdown.classList.add('open');

      content.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'height') {
          content.style.height = 'auto'; // only after opening
          content.removeEventListener('transitionend', handler);
        }
      });
    }
  });
});



