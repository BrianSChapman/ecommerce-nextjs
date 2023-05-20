import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react';

export default function Document() {

  const [ darkMode, setDarkMode ] = useState(false);

  function toggleDarkMode() {
    setDarkMode( prevDarkMode => !prevDarkMode )
  }

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
