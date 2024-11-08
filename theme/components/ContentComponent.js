const baseStyle = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    p: 4,
    position: 'relative',
    zIndex: 99,
  },
  titleStyle: {
    fontSize: ['2xl', '3xl', '4xl'],
    fontWeight: 'bold',
    textTransform: 'uppercase',
    mb: 4,
    textAlign: 'center',
  },
  subtitleStyle: {
    fontSize: 'xl',
    textAlign: 'center',
    mb: 2,
  },
  bodyContainerStyle: {
    mt: 2,
    lineHeight: 1.75,
    fontSize: 'md',
    fontWeight: 500,
    color: 'white',
    textAlign: 'center',
    p: {
      textAlign: 'center',
    },
  },
  button: {
    mt: 4,
    mx: 2,
    variant: 'outline',
    fontSize: 'xs',
    // wrap text
    whiteSpace: 'normal',
    textAlign: 'center',
  },
};

export const ContentComponent = {
  baseStyle,
  variants: {
    hero: {
      titleStyle: {
        fontSize: ['2xl', '3xl', '3xl', '5xl'],
        fontWeight: '200',
        // Add a purple text glow neon
        textShadow:
          '0 0 10px #4B0082, 0 0 20px #4B0082, 0 0 40px #4B0082, 0 0 80px #4B0082, 0 0 120px #4B0082, 0 0 200px #4B0082, 0 0 300px #4B0082, 0 0 400px #4B0082',
        textAlign: 'center',
        mx: 'auto',
      },
      subtitleStyle: {
        fontSize: 'xl',
        fontWeight: 'bold',
        textShadow:
          '0 0 10px #4B0082, 0 0 20px #4B0082, 0 0 40px #4B0082, 0 0 80px #4B0082, 0 0 120px #4B0082, 0 0 200px #4B0082, 0 0 300px #4B0082, 0 0 400px #4B0082',
        textAlign: 'center',
        mx: 'auto',
      },
    },
    darkText: {
      containerStyle: {
        bg: 'gray.800',
        color: 'dark',
      },
      titleStyle: {
        color: 'dark',
      },
      subtitleStyle: {
        color: 'dark',
      },
      bodyContainerStyle: {
        color: 'dark',
      },
      button: {
        variant: 'outline',
      },
    },
    whiteText: {
      containerStyle: {
        color: 'white',
      },
      titleStyle: {
        color: 'white',
      },
      subtitleStyle: {
        color: 'white',
      },
      bodyContainerStyle: {
        color: 'white',
      },
      button: {},
    },
  },
};
