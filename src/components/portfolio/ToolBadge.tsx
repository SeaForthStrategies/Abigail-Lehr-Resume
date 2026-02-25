import { useState } from "react";
import { Sparkles } from "lucide-react";
import { getToolLogoUrl } from "@/data/toolLogos";
import { getToolFallbackIcon } from "@/data/toolIcons";

type ToolBadgeProps = {
  name: string;
  className?: string;
};

export const ToolBadge = ({ name, className = "" }: ToolBadgeProps) => {
  const logoUrl = getToolLogoUrl(name);
  const [logoError, setLogoError] = useState(false);
  const showLogo = logoUrl && !logoError;
  const FallbackIcon = getToolFallbackIcon(name) ?? Sparkles;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400 ${className}`}
      title={name}
    >
      {showLogo ? (
        <img
          src={logoUrl}
          alt=""
          className="w-3.5 h-3.5 object-contain flex-shrink-0"
          loading="lazy"
          onError={() => setLogoError(true)}
        />
      ) : (
        <FallbackIcon className="w-3.5 h-3.5 flex-shrink-0 text-cyan-400" />
      )}
      <span className={showLogo ? "truncate max-w-[5rem] sm:max-w-[6rem]" : "break-words"}>{name}</span>
    </span>
  );
};
