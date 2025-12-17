export default function ButtonMain({
  children,
  onClick,
  type = "button",
  href,
  target,
  rel,
  className = "",
  icon,
  disabled = false,
}) {
  const basePadding = "py-2 px-7"; // Padding par défaut
  const baseClass = `flex justify-center items-center gap-2 bg-orange-500 text-black font-jet-brains-mono rounded-sm text-sm cursor-pointer transition-opacity`;
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Vérifie si des classes de padding sont définies dans className
  const hasCustomPadding = /p[xytrbl]?-[0-9]/.test(className);
  const paddingClass = hasCustomPadding ? "" : basePadding;

  const classes =
    `${baseClass} ${paddingClass} ${disabledClass} ${className}`.trim();

  const content = (
    <>
      {children}
      {icon && <span className="inline-flex items-center">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    const computedTarget = target ?? (isExternal ? "_blank" : undefined);
    const computedRel =
      rel ?? (computedTarget === "_blank" ? "noopener noreferrer" : undefined);

    return (
      <a
        href={href}
        target={computedTarget}
        rel={computedRel}
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
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
