/* LostNoMore – Premium SaaS JS */
document.addEventListener('DOMContentLoaded', function () {
  /* --- Navbar scroll effect --- */
  const navbar = document.querySelector('.lnm-navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  /* --- Mobile menu toggle --- */
  const menuBtn = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  /* --- Intersection Observer for scroll animations --- */
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('[data-anim]').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
    el.style.transitionDelay = (el.dataset.animDelay || '0') + 'ms';
    observer.observe(el);
  });

  /* --- Add visible class styles --- */
  var style = document.createElement('style');
  style.textContent = '.anim-visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

  /* --- Auto-dismiss Bootstrap alerts after 5s --- */
  document.querySelectorAll('.alert-dismissible').forEach(function (alert) {
    setTimeout(function () {
      var bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
      if (bsAlert) bsAlert.close();
    }, 5000);
  });

  /* --- Image preview for file inputs --- */
  document.querySelectorAll('input[type="file"]').forEach(function (input) {
    input.addEventListener('change', function (e) {
      var preview = input.closest('.lnm-input-group, .mb-3, .mb-4')?.querySelector('.img-preview');
      if (preview && e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (ev) {
          preview.src = ev.target.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  });

  /* --- Password toggle --- */
  document.querySelectorAll('.toggle-password').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.lnm-input-group').querySelector('input');
      var icon = btn.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  });

  /* --- Date field max = today --- */
  var today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(function (el) {
    if (!el.max) el.max = today;
  });

  /* --- DOB max = 10 years ago --- */
  var dobInput = document.getElementById('dob');
  if (dobInput) {
    var d = new Date();
    d.setFullYear(d.getFullYear() - 10);
    dobInput.max = d.toISOString().split('T')[0];
  }
});
