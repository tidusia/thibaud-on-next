type Props = {
  rootClassNames?: string;
};

const DotsGrid = ({ rootClassNames = "" }: Props) => {
  return (
    <svg
      className={rootClassNames}
      width="404"
      height="784"
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width="404"
        height="784"
        fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
      />
    </svg>
  );
};

export default DotsGrid;
