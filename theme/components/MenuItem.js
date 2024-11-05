export const MenuItem = {
  baseStyle: {
    container: {
      position: 'relative',
      width: ['100%', '', ''],
      mb: 4,
      pr: [0, 2, 4],
      borderRadius: 'lg',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    imageAspectRatio: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      bg: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    imageContainer: {
      borderRadius: 'lg',
      overflow: 'hidden',
      height: '0',
      paddingTop: '100%',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    imageText: {
      position: 'absolute',
      bottom: 0,
      bg: 'rgba(0, 0, 0, 0.7)',
      fontFamily: 'accent',
      px: 3,
      py: 1,
      textTransform: 'uppercase',
      borderRadius: 'md',
      color: 'white',
      fontSize: 'sm',
    },
    heading: {
      fontSize: ['md', 'xl'],
      fontFamily: 'body',
      color: 'white',
      display: 'inline-flex',
      alignItems: 'center',
    },
    description: {
      fontSize: ['sm', 'md'],
      color: 'white',
      lineHeight: 'tall',
      fontFamily: 'body',
      //   maxWidth: 450,
    },
  },
  variants: {},
};
