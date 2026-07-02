/**
 * auth-guard.js
 * -------------------------------------------------------------------------
 * Tempel script ini (setelah firebase-config.js) di setiap halaman yang
 * WAJIB login untuk diakses. Lihat AUTH-SETUP-GUIDE.md untuk cara pasang.
 *
 * Cara kerja:
 * - Saat halaman dimuat, konten disembunyikan dulu (lewat CSS di snippet head)
 * - Firebase mengecek status login user
 * - Kalau sudah login  -> konten ditampilkan
 * - Kalau belum login  -> redirect otomatis ke halaman login,
 *                         dan setelah login sukses akan dibawa kembali
 *                         ke halaman yang tadi mau diakses
 * -------------------------------------------------------------------------
 */
(function () {
    // Path ke login.html relatif dari halaman ini.
    // Default "login.html" (satu folder yang sama).
    // Untuk halaman di dalam subfolder, override sebelum script ini load:
    //   <script>window.AUTH_LOGIN_PATH = "../login.html";</script>
    var loginPath = window.AUTH_LOGIN_PATH || "login.html";

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Login valid -> tampilkan halaman
            document.documentElement.classList.add("auth-ready");
            document.body.style.visibility = "visible";
        } else {
            // Belum login -> simpan halaman tujuan, lalu redirect ke login
            var here = window.location.pathname + window.location.search + window.location.hash;
            window.location.href = loginPath + "?redirect=" + encodeURIComponent(here);
        }
    });
})();
