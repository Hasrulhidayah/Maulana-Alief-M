// ===============================
// CYBERSHIELD - JAVASCRIPT
// ===============================

// ===============================
// MENU AKTIF
// ===============================

const menu = document.querySelectorAll("nav a");

menu.forEach(link => {
    link.addEventListener("click", function () {
        menu.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});


// ===============================
// SCROLL HALUS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// SIMULASI PHISHING
// ===============================

const phishingBtn = document.getElementById("btnPhishing");

if (phishingBtn) {

    phishingBtn.addEventListener("click", function () {

        alert(
            "⚠ PERINGATAN!\n\n" +
            "Ini hanyalah simulasi phishing.\n\n" +
            "Jangan pernah memasukkan Password, PIN, ataupun Kode OTP kepada website yang tidak resmi."
        );

    });

}


// ===============================
// KUIS
// ===============================

const cekNilai = document.getElementById("cekNilai");

if (cekNilai) {

    cekNilai.addEventListener("click", function () {

        let total = 0;

        for (let i = 1; i <= 5; i++) {

            let jawaban = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if (jawaban) {

                total += parseInt(jawaban.value);

            }

        }

        let nilai = total * 20;

        let kategori = "";

        if (nilai == 100) {

            kategori = "⭐⭐⭐⭐⭐ Sangat Baik";

        } else if (nilai >= 80) {

            kategori = "⭐⭐⭐⭐ Baik";

        } else if (nilai >= 60) {

            kategori = "⭐⭐⭐ Cukup";

        } else {

            kategori = "⭐⭐ Perlu Belajar Lagi";

        }

        document.getElementById("hasil").innerHTML =

            "<h2>Hasil Kuis</h2>" +

            "<p><b>Nilai :</b> " + nilai + "</p>" +

            "<p><b>Kategori :</b> " + kategori + "</p>";

    });

}


// ===============================
// FORM KONTAK
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Terima kasih!\nPesan Anda berhasil dikirim.");

        contactForm.reset();

    });

}


// ===============================
// TOMBOL BACK TO TOP
// ===============================

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.id = "backTop";

document.body.appendChild(backTop);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// EFEK CARD SAAT HOVER
// ===============================

const cards = document.querySelectorAll(".card, .artikel-card");

cards.forEach(card => {

    card.addEventListener("mouseover", function () {

        this.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseout", function () {

        this.style.transform = "translateY(0px)";

    });

});


// ===============================
// SAPAAN BERDASARKAN WAKTU
// ===============================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    const jam = new Date().getHours();

    let salam = "";

    if (jam < 11) {

        salam = "Selamat Pagi ☀️";

    } else if (jam < 15) {

        salam = "Selamat Siang 🌤";

    } else if (jam < 18) {

        salam = "Selamat Sore 🌇";

    } else {

        salam = "Selamat Malam 🌙";

    }

    heroTitle.innerHTML = salam + "<br>Lindungi Data Digitalmu";

}