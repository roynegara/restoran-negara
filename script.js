function toggleMenu() {
    var navList = document.querySelector('.nav-list');
  navList.classList.toggle('show'); 
}

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 870) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// CGPT
$(document).ready(function(){
    $('.slick-carousel').slick({
        slidesToShow: 4, // Menampilkan 3 kartu sekaligus, sesuaikan dengan kebutuhan
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Sesuaikan dengan kecepatan yang diinginkan
        responsive: [
            {
                breakpoint: 990, // Responsive di lebar 768px
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, // Responsive di lebar 768px
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, // Responsive di lebar 480px
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// link internal
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.scroll-link');

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
          var offsetTop = targetElement.offsetTop - 95;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });


