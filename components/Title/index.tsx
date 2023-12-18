import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  level: "h1" | "h2" | "h3";
  as: "h1" | "h2" | "h3";
  mainText: React.ReactNode;
  secondText?: React.ReactNode;
};

export default function Title({
  className,
  level,
  as,
  secondText,
  mainText,
}: Props): React.ReactElement {
  const Tag = as;

  let levelClassName = "";
  if (level === "h1") {
    levelClassName = "text-4xl sm:text-5xl leading-10 sm:leading-none";
  }
  if (level === "h2") {
    levelClassName = "text-3xl leading-8 sm:text-4xl sm:leading-10";
  }
  if (level === "h3") {
    levelClassName = "text-2xl sm:text-3xl leading-8 sm:leading-9";
  }

  return (
    <Tag
      className={clsx(
        className,
        levelClassName,
        "tracking-tight font-extrabold text-gray-900",
      )}
    >
      {mainText}
      {secondText && (
        <span className="text-blue-500 whitespace-pre-line">{secondText}</span>
      )}
    </Tag>
  );
}
