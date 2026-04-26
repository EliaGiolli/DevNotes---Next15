'use client';

import { useState } from "react";

function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-black text-white rounded">
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;