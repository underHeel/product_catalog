import { useState } from 'react';

export const PreviewWindow = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <a
        href="#/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        CONTACTS
      </a>
      {isHovered && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ul>
            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                Alyona
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                Vlad
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                Nazariy
              </a>
            </li>
            <li>
              <a
                href="https://github.com/YevhenOstrovskiy"
                target="_blank"
                rel="noreferrer"
              >
                Yevhen
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                Danil
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
