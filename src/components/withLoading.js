import React from 'react';

function withLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Loading campaigns...
      </p>
    );
  };
}
export default withLoading;