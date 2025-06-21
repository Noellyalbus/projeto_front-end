import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Section = ({
  sectionMt = 2,
  sectionMb = 2,
  titleMb = 2,
  title,
  titleAlign = 'between',
  link,
  className = '',
  children
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const justifyMap = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between'
  };

  const justifyContentClass = justifyMap[titleAlign] || 'justify-start';

  return (
    <section
      className={className}
      style={{
        marginTop: isMobile ? `calc(${sectionMt}rem / 2)` : `${sectionMt}rem`,
        marginBottom: isMobile ? `calc(${sectionMb}rem / 2)` : `${sectionMb}rem`,
      }}
    >
      <div className="max-w-[75rem] mx-auto p-3">
        {title && (
          <div
            className={`flex items-center ${justifyContentClass}`}
            style={{ marginBottom: `${titleMb}rem` }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray-2 m-0">
              {title}
            </h2>

            {link && (
              <NavLink
                to={typeof link === 'object' ? link.href : link}
                className="text-primary flex items-center text-sm font-bold hover:underline transition-colors"
              >
                <span>{typeof link === 'object' ? link.text : 'Ver todos'}</span>
                <i className="pi pi-arrow-right ml-2"></i>
              </NavLink>
            )}
          </div>
        )}

        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;