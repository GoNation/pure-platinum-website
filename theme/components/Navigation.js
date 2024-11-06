export const Navigation = {
  baseStyle: {
    navigation: {
      gridTemplateColumns: 'repeat(12, 1fr)',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 999,
      width: '100%',
      p: 2,
      bg: 'rgba(0,0,0,.4)',
    },
    // Grid Item containers
    logoGridItem: {
      colSpan: [10, 10, 2], // Logo takes up more space on mobile
      display: 'flex',
      alignItems: 'center',
    },
    navItemsGridItem: {
      colSpan: [0, 0, 10], // Hide nav items on mobile, show on larger screens
      display: ['none', 'none', 'flex'],
      justifyContent: 'flex-end',
    },
    hamburgerGridItem: {
      colSpan: [2, 2, 0], // Show the hamburger menu on mobile
      display: ['flex', 'flex', 'none'],
      justifyContent: 'flex-end',
    },
    alternateGridItem: {
      colSpan: [0, 0, 0], // Only show this on larger screens
      display: ['none', 'none', 'flex'],
      justifyContent: 'flex-end',
    },
    // Logo styles
    logoContainer: {
      align: 'center',
      maxWidth: [100, 100, 'unset'],
    },
    logo: {
      width: 150,
      height: 150,
    },
    // Full-screen mobile menu styles
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      bg: 'rgba(0,0,0,.9)',
      zIndex: 10, // Menu is underneath the hamburger icon
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    hamburgerIconOpen: {
      position: 'fixed', // Fix the position of the hamburger icon
      top: '16px',
      right: '16px',
      zIndex: 999999999, // Higher than the mobile menu to ensure visibility
    },
    hamburger: {
      size: 24,
      color: '#4b0082',
    },
    mobileMenuContent: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 4,
      color: 'white',
      mt: 8,
    },
  },
  variants: {},
};
