import React from 'react';

const Courses = () => {
  return (
    <div className="container">
      <h1>Conheça nossos cursos</h1>
      <div className="showcase">
        <div>
          <h3>Desenvolvimento de API REST</h3>
          <img alt="" src="https://source.unsplash.com/Fi-GJaLRGKc" />
          <button className="btn">Saiba Mais</          button>
        </div>
        <div>
          <h3>Single Page Application</h3>
          <img alt="" src="https://source.unsplash.com/vpOeXr5wmR4" />
          <button className="btn">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
};
export default Courses;
