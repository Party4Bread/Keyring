import { style } from '@vanilla-extract/css';

const statFontFamily = "'Lato' 'Spoqa Han Sans Neo' 'sans-serif'"

export const container = style({
  position: 'relative',
  width: '24rem',
  height: '24rem',
  overflow: 'hidden',
  filter: (
    'drop-shadow(2px 2px 6px #4398E6) '+
    'drop-shadow(-2px 2px 6px #68E643) '+
    'drop-shadow(-2px -2px 6px #E543C9) '+
    'drop-shadow(2px -2px 6px #E6A743) '
  ),
});

export const profileImage = style({
  objectFit: 'cover',
  width: '24rem', // w-96
  height: '24rem', // h-96
  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
});

export const overlay = style({
  position: 'absolute',
  inset: '3.5rem', // inset-14
});

export const rotatedContent = style({
  position: 'absolute',
  inset: 0,
  transform: 'rotate(-45deg)',
  color: 'white'
});

export const gradientOverlay = style({
  position: 'absolute',
  inset: 0,
});

export const bottomGradient = style({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '45%', // h-44
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) -1.85%, rgba(0, 0, 0, 0.70) 101.85%)'
});

export const leftGradient = style({
  position: 'absolute',
  left: 0,
  width: '45%', // w-44
  height: '100%',
  background: 'linear-gradient(to left, rgba(0, 0, 0, 0.00) -1.85%, rgba(0, 0, 0, 0.70) 101.85%)'
});

export const profileContainer = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  wordWrap: 'break-word',
  transform: 'rotate(90deg)'
  // writingMode: 'vertical-rl' // writing-vertical
});

export const profileText = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  wordWrap: 'break-word',
  maxWidth: '75%',
  padding: '0.5rem', // p-2
});

export const username = style({
  fontSize: '2rem',
  fontWeight: 300, // font-light
});

export const bottomSection = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  padding: '0.5rem' // p-2
});

export const qrCode = style({
  width: '4rem', // w-16
  height: '4rem', // h-16
  padding: '0.2rem'
});

export const statsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  maxWidth: '80%',
  fontFamily: statFontFamily
});

export const statsText = style({
  fontSize: '0.875rem', // text-sm
  textAlign: 'right'
});

export const normalText = style({
  fontWeight: 400
});

export const lightText = style({
  fontWeight: 300 // font-light
}); 