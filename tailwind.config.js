/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor, html}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      // Primary
      'soft-red': '#fe7867',
      'yellow': '#fad400',
      'dark-desaturated-cyan': '#25564b',
      'dark-blue': '#19536b',
      'dark-moderate-cyan': '#458c7e',
      // Neutral
      'very-dark-desaturated-blue': '#23303e',
      'very-dark-grayish-blue': '#5a636c',
      'dark-grayish-blue': '#818498',
      'grayish-blue': '#a7abae'
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      fraunces: ['Fraunces', 'serif'],
    },
    extend: {
      backgroundImage: {
        'img-header-mb': "url('../images/mobile/image-header.jpg')",
        'img-header-des': "url('../images/desktop/image-header.jpg')",
        'img-transform-mb': "url('../images/mobile/image-transform.jpg')",
        'img-transform-des': "url('../images/desktop/image-transform.jpg')",
        'img-standout-mb': "url('../images/mobile/image-stand-out.jpg')",
        'img-standout-des': "url('../images/desktop/image-stand-out.jpg')",
        'img-graphic-mb': "url('../images/mobile/image-graphic-design.jpg')",
        'img-graphic-des': "url('../images/desktop/image-graphic-design.jpg')",
        'img-photography-mb': "url('../images/mobile/image-photography.jpg')",
        'img-photography-des': "url('../images/desktop/image-photography.jpg')",
        'img-cone-mb': "url('../images/mobile/image-gallery-cone.jpg')",
        'img-cone-des': "url('../images/desktop/image-gallery-cone.jpg')",
        'img-milk-mb': "url('../images/mobile/image-gallery-milkbottles.jpg')",
        'img-milk-des': "url('../images/desktop/image-gallery-milkbottles.jpg')",
        'img-orange-mb': "url('../images/mobile/image-gallery-orange.jpg')",
        'img-orange-des': "url('../images/desktop/image-gallery-orange.jpg')",
        'img-sugarcubes-mb': "url('../images/mobile/image-gallery-sugarcubes.jpg')",
        'img-sugarcubes-des': "url('../images/desktop/image-gallery-sugarcubes.jpg')",
      }
    },
  },
  plugins: [],
}
