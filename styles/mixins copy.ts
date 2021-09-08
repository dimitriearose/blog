export const ScreenWidths =  {
    'large-desktop':'125em',
    'desktop':'',
    'mobile':'37.5em',
    'ipad-pro':'64em',
    'tablet':'52.125em',
    'small-ipad':'48em',
    'small-phone':'22.5em',
    'laptop':'85.375em'
}

export type Screens = 'large-desktop' | 'desktop' | 'mobile' | 'tablet' | 'small-mobile' | 'ipad-pro'

export const BreakPoint =(breakPoint:Screen):void => {
    const mediaQuery =  `
    @media (max-width: 25.875em) {
    @content;
}
    `
}


// @mixin respond($breakpoint) {
  
  

//     @if $breakpoint==tablet-medium-landscape {
//       @media (max-width: 64em) and (max-height: 48em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==ipad-pro-landscape {
//       @media (max-width: 85.375em) and (max-height: 64em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==iphoneXSMax {
//       @media (max-width: 25.875em) and (max-height: 56em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==iphoneXSMaxLandscape {
//       @media (max-width: 56em) and (max-height: 25.875em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==iphoneXS {
//       @media (max-width: 23.4375em) and (max-height: 50.75em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==iphoneXSLandscape {
//       @media (max-width: 50.75em) and (max-height: 23.4375em) {
//         @content;
//       }
//     }
//     @if $breakpoint==iphone-7plus {
//       @media (max-width: 25.875em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==tablet-landscape {
//       @media (max-width: 70em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==tab-land {
//       @media (max-width: 75em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==laptop-small {
//       @media (max-width: 80em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==iphone-5s {
//       @media (max-width: 20em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==laptop-medium {
//       @media (max-width: 85.375em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==laptop {
//       @media (max-width: 85.375em) and (max-height: 50em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==macbook {
//       @media (max-width: 90em) and (max-height: 56.25em) {
//         @content;
//       }
//     }
  
  
//     @if $breakpoint==big-desk {
//       @media (min-width: 125em) {
//         @content;
//       }
//     }
//   }