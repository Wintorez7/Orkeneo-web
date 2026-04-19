import React from "react";

interface TextSectionProps {
  subtitle: string;
  title: string;
  description?: string;
  html?: string;
  subtitleColor?: string;
  subtitleBgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

export const TextSection: React.FC<TextSectionProps> = ({
  subtitle,
  title,
  description,
  html,
  subtitleColor = "#4d77ff",
  subtitleBgColor,
  titleColor = "#181d27",
  descriptionColor = "#535862",
}) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <p
        className={`${
          subtitleBgColor
            ? "inline-flex items-center w-fit px-3 py-1 rounded-full text-xs bg-blue-50"
            : ""
        } font-medium mb-4`}
        style={{ color: subtitleColor, backgroundColor: subtitleBgColor }}
      >
        {subtitle}
      </p>

      <h1
        className={`${
          subtitleBgColor ? "md:text-3xl" : "text-3xl md:text-4xl"
        }  font-bold mb-6 px-2`}
        // className="text-4xl md:text-5xl font-bold mb-6 px-2"
        style={{ color: titleColor }}
      >
        {title}
      </h1>

      {description && (
        <p
        className="text-base max-w-3xl mx-auto px-4"
        style={{ color: descriptionColor }}
        >
        {description}
        </p>
      )}

      {html && (
        <div
          className="px-4"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ color: descriptionColor }}
        />
      )}
    </div>
  );
};
