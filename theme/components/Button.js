export const Button = {
  baseStyle: {
    textTransform: 'uppercase',
  },
  variants: {
    default: {
      bg: 'transparent',
      borderRadius: 'none',
      borderColor: 'dark',
      _hover: {
        bg: 'light',
        color: 'primary',
      },
    },
    primary: {
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: 'dark',
        color: 'white',
      },
      _active: {
        bg: 'dark',
        color: 'white',
      },
    },
    secondary: {
      bg: 'secondary',
      color: 'white',
      _hover: {
        bg: 'light',
        color: 'dark',
      },
      _active: {
        bg: 'light',
        color: 'dark',
      },
    },
    outline: {
      //   A white text transparent button with a purple border. When hovered we add a purple glow effect
      bg: 'transparent',
      color: 'white',
      borderColor: 'purple',
      borderWidth: 2,
      transition: 'all 1.5s ease',
      letterSpacing: 2,
      px: [4, 6],
      py: 5,
      _hover: {
        bg: 'purple',
        color: 'white',
        boxShadow:
          '0 0 10px #4B0082, 0 0 20px #4B0082, 0 0 40px #4B0082, 0 0 80px #4B0082, 0 0 120px #4B0082, 0 0 200px #4B0082, 0 0 300px #4B0082, 0 0 400px #4B0082',
        transition: 'all 1.5s ease',
      },
    },
  },
};
