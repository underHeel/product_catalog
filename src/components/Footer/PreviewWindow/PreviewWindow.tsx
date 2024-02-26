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
    <div className="GitHubUsersPreview-container">
      <a
        href="#/"
        className="GitHubUsersPreview-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        GitHub Users
      </a>
      {isHovered && (
        <div className="GitHubUsersPreview-window">
          <h3>Top 5 GitHub Users:</h3>
          <ul className="GitHubUsersPreview-list">
            <li className="GitHubUsersPreview-item">Some Github account 1</li>
            <li className="GitHubUsersPreview-item">Some Github account 2</li>
            <li className="GitHubUsersPreview-item">Some Github account 3</li>
            <li className="GitHubUsersPreview-item">Some Github account 4</li>
          </ul>
        </div>
      )}
    </div>
  );
};
