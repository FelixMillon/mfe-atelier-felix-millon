module.exports = {
    name: 'header',
    filename: 'remoteEntry.js',
    exposes: {
      './Header': './src/Header',
    },
    shared: ['react', 'react-dom'],
  };