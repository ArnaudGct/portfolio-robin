export default function ButtonMain({
  children,
  onClick,
  type = "button",
  href,
  target,
  rel,
  className = "",
}) {
  const baseClass =
    "flex justify-center py-2 px-7 bg-orange-500 text-black font-jet-brains-mono rounded-sm text-sm";
  const classes = `${baseClass} ${className}`.trim();

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
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
