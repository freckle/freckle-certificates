window.addEventListener("DOMContentLoaded", (event) => {
  function printSingleCertificate(event) {
    const currentCertificate = event.target.closest(".certificate");

    // Hide all other certificates from the print view
    document.querySelectorAll(".certificate").forEach((certificate) => {
      if (certificate !== currentCertificate) {
        certificate.classList.add("-no-print");
      }
    });

    window.print();
  }

  // Grab all "Print" buttons and add an event listener
  document
    .querySelectorAll(".cert-header button")
    .forEach((el) => el.addEventListener("click", printSingleCertificate));

  // Always undo the work of `printSingleCertificate` when the print dialog is
  // closed
  window.addEventListener("afterprint", () => {
    document.querySelectorAll(".certificate").forEach((certificate) => {
      certificate.classList.remove("-no-print");
    });
  });
});
