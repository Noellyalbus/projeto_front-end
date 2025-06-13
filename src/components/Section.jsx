import React from 'react';
import { NavLink } from 'react-router-dom';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[titleAlign];

  return (
    <section className="w-full px-4 lg:px-6 py-10">
      {title && (
        <div className={`flex flex-col ${alignClass} mb-6`}>
          <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray">{title}</h2>
          {link && (
            <NavLink
              to={link}
              className="text-primary mt-2 text-sm font-medium hover:underline transition-colors"
            >
              Ver todos
            </NavLink>
          )}
        </div>
      )}

      {/* Conteúdo da seção */}
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
