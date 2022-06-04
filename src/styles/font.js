export const FontStyles = `
  @font-face {
    font-family: 'friz';
    src: url('/friz-quadrata-webfont.eot');
    src: url('/friz-quadrata-webfont.eot?#iefix') format('embedded-opentype'),
        url('/friz-quadrata-webfont.woff2') format('woff2'),
        url('/friz-quadrata-webfont.woff') format('woff'),
        url('/friz-quadrata-webfont.ttf')  format('truetype'),
        url('/friz-quadrata-webfont.svg#frizQuadrata') format('svg');
  }

  @font-face {
    font-family: 'icomoon';
    src:  url('/icomoon.eot?ocqrce');
    src:  url('/icomoon.eot?ocqrce#iefix') format('embedded-opentype'),
      url('/icomoon.ttf?ocqrce') format('truetype'),
      url('/icomoon.woff?ocqrce') format('woff'),
      url('/icomoon.svg?ocqrce#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'LOL';
    src: url('/BeaufortforLOL-Regular.woff');
  }

  @font-face {
    font-family: 'LOL';
    src: url('/BeaufortforLOL-Bold.woff');
    font-weight: bold;
  }

  body {
    font-family: 'LOL', serif;
  }
`;