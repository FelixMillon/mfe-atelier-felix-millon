module.exports = {
    name: 'shell',
    remotes: {
      header: 'header@http://localhost:3001/remoteEntry.js',
    },
    shared: ['react', 'react-dom'],
  };