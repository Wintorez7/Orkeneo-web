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
  subtitleColor = "#2F5BFF",
  subtitleBgColor,
  titleColor = "#111827",
  descriptionColor = "#4B5563",
}) => {
  return (
    <div className="max-w-4xl mx-auto text-center font-sans">
      <div className="flex justify-center mb-6">
        <span
          className={`inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase ${
            subtitleBgColor ? "" : "bg-blue-50/80 border border-blue-100"
          }`}
          style={{ color: subtitleColor, backgroundColor: subtitleBgColor }}
        >
          {subtitle}
        </span>
      </div>

      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 px-2 drop-shadow-sm"
        style={{ color: titleColor }}
      >
        {title}
      </h1>

      {description && (
        <p
          className="text-lg md:text-xl font-medium max-w-2xl mx-auto px-4 leading-relaxed"
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      )}

      {html && (
        <div
          className="px-4 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ color: descriptionColor }}
        />
      )}
    </div>
  );
};
