interface Screen {
desktop:number

}

type Screens = 'large-desktop' | 'desktop' | 'mobile' | 'tablet' | 'small-mobile'

const Responsive = (width:Screen):void => {
    
}



// @mixin respond($breakpoint) {
//     @if $breakpoint==galaxy-fold {
//       @media (max-width: 17.5em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==phone {
//       @media (max-width: 37.5em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==small-phone {
//       @media (max-width: 22.5em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==small-ipad {
//       @media (max-width: 48em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==tab-port {
//       @media (max-width: 56.25em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==tablet {
//       @media (max-width: 52.125em) {
//         @content;
//       }
//     }
  
//     @if $breakpoint==ipad-pro {
//       @media (max-width: 64em) {
//         @content;
//       }
//     }
  
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