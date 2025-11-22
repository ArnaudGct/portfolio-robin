import Link from "next/link";

export default function ButtonSecondary({
  children,
  onClick,
  type = "button",
  href,
  target,
  rel,
  className = "",
  icon,
  iconPosition = "before", // Nouvelle propriété pour la position de l'icône
  disabled = false,
  size,
}) {
  const baseClass =
    "group flex flex-row items-center gap-2 bg-orange-50 text-orange-600 rounded-lg transition duration-300";
  const paddingClass = children ? "px-4 py-2" : "px-2.5 py-2.5";
  const sizeClass =
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";
  const disabledClass = disabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";
  const classes =
    `${baseClass} ${paddingClass} ${sizeClass} ${disabledClass} ${className}`.trim();

  // Animation pour l'icône si elle est présente
  const animatedIcon = icon && (
    <div className="relative flex items-center justify-center h-5 w-5 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-400 group-hover:-translate-y-full">
        {icon}
      </div>
      <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-400 group-hover:translate-y-0">
        {icon}
      </div>
    </div>
  );

  // Contenu avec positionnement de l'icône
  const content = (
    <>
      {iconPosition === "before" && animatedIcon}
      {children && (
        <span className="relative inline-flex overflow-hidden px-1">
          <div
            className={`block translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[130%] group-hover:skew-y-8`}
          >
            {children}
          </div>
          <div
            className={`absolute top-0 left-0 translate-y-[130%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0`}
          >
            {children}
          </div>
        </span>
      )}
      {iconPosition === "after" && animatedIcon}
    </>
  );

  // If we have a link, render the component as a Link
  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    const computedTarget = target ?? (isExternal ? "_blank" : undefined);
    const computedRel =
      rel ?? (computedTarget === "_blank" ? "noopener noreferrer" : undefined);

    return (
      <Link
        href={href}
        target={computedTarget}
        rel={computedRel}
        className={classes}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
