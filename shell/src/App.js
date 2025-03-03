import React, { Suspense } from 'react';

const RemoteHeader = React.lazy(() => import('header'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Chargement du header...</div>}>
        <RemoteHeader />
      </Suspense>
      <h2>Je suis le Shell 🚀</h2>
    </div>
  );
}

export default App;