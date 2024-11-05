export const Parallax = {
  variants: {
    default: {
      container: {
        minHeight: '50vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: ['none', 'none', 'fixed'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: [4, 8],
      },
      contentContainer: {},
      content: {
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,.3)',
      },
      title: {
        fontSize: ['2xl', '3xl'],
        maxWidth: 1200,
        mx: 'auto',
        textShadow: '2px 2px 4px rgba(0,0,0,.3)',
        textTransform: 'uppercase',
        mb: 8,
      },
      subtitle: {
        fontSize: ['lg', 'lg', 'lg', 'xl', '2xl'],
        textShadow: '2px 2px 4px rgba(0,0,0,.3)',
      },
      body: {
        color: 'white',
        fontSize: ['lg', 'lg', 'lg', 'xl', '2xl'],
        textShadow: '2px 2px 4px rgba(0,0,0,.3)',
        mb: 4,
      },
      button: {
        variant: 'outline',
      },
    },
  },
  //   baseStyle: ,
};
