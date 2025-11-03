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
  const baseClass =
    "flex justify-center items-center gap-2 py-2 px-7 bg-orange-500 text-black font-jet-brains-mono rounded-sm text-sm cursor-pointer transition-opacity";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  const classes = `${baseClass} ${disabledClass} ${className}`.trim();

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
