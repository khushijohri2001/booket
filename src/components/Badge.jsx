import React from "react";

const Badge = ({ children, badgeContent }) => {
  return (
    <div className="relative">
      {badgeContent > 0 && (
        <div className="absolute rounded-full bg-white text-rose-900 font-semibold text-xs -right-2 -top-2 px-1">
          {badgeContent}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Badge;
