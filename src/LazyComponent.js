import React from 'react';

const LazyComponent2 = React.lazy(() => import("./LazyComponent2"));

export default function LazyComponent() {
  return (
    <div>
      My lazy component.......
      <React.Suspense fallback={<div>not loaded yet</div>}>
        <LazyComponent2 />
      </React.Suspense>

    </div>
  )
}
