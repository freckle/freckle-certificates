# freckle-certificates

Freckle printable teacher certificates of achievements for students.

## Styling

Styles that are relevant to both the U.K. and the U.S. site should go in `styles.css`.

Each site also has a `styles-??.css` where styling specific to that page go.

## Print Single Certificate Functionality

The "Print Single Certificate" functionality adds an `onClick` handler to the
"Print" button of each certificate.

The handler hides all other certificates using `display: none` (via the
`-no-print` class) so that those other certificates are not printed.

Crucially, when the browser emits the `afterprint` event, we remove the class
that is hiding the other certificates.

## Safari Note Functionality

The "Print Single Certificate" Functionality does not work well on Safari. As a
result, we use the user agent to detect a Safari browser, and un-hide a note so
that the user knows that the functionality is degraded on their browser.
