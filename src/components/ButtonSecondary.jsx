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
    "border solid border-orange-500 font-jet-brains-mono group flex flex-row items-center gap-2 text-black rounded-sm transition duration-300";
  const paddingClass = children ? "px-4 py-2" : "px-2.5 py-2.5";
  const sizeClass =
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-sm";
  const disabledClass = disabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";
  const classes =
    `${baseClass} ${paddingClass} ${sizeClass} ${disabledClass} ${className}`.trim();

  // Icône sans animation
  const staticIcon = icon && (
    <div className="relative flex items-center justify-center h-5 w-5 overflow-hidden text-orange-500">
      <div className="absolute inset-0 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );

  // Contenu avec positionnement de l'icône
  const content = (
    <>
      {iconPosition === "before" && staticIcon}
      {children && (
        <span className="relative inline-flex overflow-hidden px-1">
          <div className="block">{children}</div>
        </span>
      )}
      {iconPosition === "after" && staticIcon}
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
