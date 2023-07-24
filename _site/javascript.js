window.addEventListener('DOMContentLoaded', (event) => {
  /* FUNCTION DECLARATIONS */

  /* Hide all certificates except the one that was clicked */
  function printSingleCertificate(event) {
    const currentCertificate = event.target.closest('.certificate')
    const isSafari = userAgentIsSafari()

    document.querySelectorAll('.certificate').forEach((certificate) => {
      if (certificate !== currentCertificate) {
        certificate.classList.add('-no-print')
      } else if (isSafari) {
        certificate.classList.add('safari-print-single')
      }
    })

    window.print()
  }

  /* Add a note to Safari users and Safari class on certificate frames */
  function addSafariNote() {
    const isSafari = userAgentIsSafari()

    if (isSafari) {
      document.querySelector('#safari-note').classList.remove('-hidden')
      document
        .querySelectorAll('.cert-frame')
        .forEach((el) => el.classList.add('safari'))
    }
  }

  /* Check if user is using Safari */
  function userAgentIsSafari() {
    const userAgent = navigator.userAgent

    /* Please see table:
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#browser_name_and_version
     */
    const containsSafari = userAgent.includes('Safari')
    const containsChrome = userAgent.includes('Chrome')
    const containsChromium = userAgent.includes('Chromium')

    return containsSafari && !containsChrome && !containsChromium
  }

  /* END FUNCTION DECLARATIONS */

  /* FUNCTION CALLS */

  /* Grab all "Print" buttons and add an event listener */
  document
    .querySelectorAll('.cert-header button')
    .forEach((el) => el.addEventListener('click', printSingleCertificate))

  /* Undo the hiding of certificates after printing */
  window.addEventListener('afterprint', () => {
    document.querySelectorAll('.certificate').forEach((certificate) => {
      certificate.classList.remove('-no-print')
      certificate.classList.remove('safari-print-single')
    })
  })

  /* Add a note to Safari users */
  addSafariNote()
})
