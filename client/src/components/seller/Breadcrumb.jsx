import React from 'react';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="mb-2">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#!">Page 1</a></li>
        <li className="breadcrumb-item"><a href="#!">Page 2</a></li>
        <li className="breadcrumb-item active" aria-current="page">Default</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;