// Animasi untuk membuat elemen muncul dengan efek fade-in
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    // Fungsi untuk menambahkan kelas 'show' pada elemen saat digulir
    function animateOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = window.innerHeight / 1.3;

            if (sectionTop < sectionVisible) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        });
    }

    // Memanggil fungsi animateOnScroll saat halaman digulir
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Inisialisasi efek saat halaman pertama kali dimuat
});
