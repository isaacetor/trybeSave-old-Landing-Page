const DecorativeGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.12]">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
        />
      </svg>
    </div>
  );
};

export default DecorativeGrid;
