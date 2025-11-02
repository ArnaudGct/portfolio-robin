// Icône de lien externe (flèche diagonale)
export function ExternalLinkIcon({ className = "", size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.3125 11.0833V2.91667C1.3125 2.49122 1.48163 2.08331 1.78247 1.78247C2.08331 1.48163 2.49122 1.3125 2.91667 1.3125H6.41667C6.65829 1.3125 6.85417 1.50838 6.85417 1.75C6.85417 1.99162 6.65829 2.1875 6.41667 2.1875H2.91667C2.72328 2.1875 2.53787 2.26438 2.40112 2.40112C2.26438 2.53787 2.1875 2.72328 2.1875 2.91667V11.0833C2.1875 11.2767 2.26438 11.4621 2.40112 11.5989C2.53787 11.7356 2.72328 11.8125 2.91667 11.8125H11.0833C11.2767 11.8125 11.4621 11.7356 11.5989 11.5989C11.7356 11.4621 11.8125 11.2767 11.8125 11.0833V7.58333C11.8125 7.34171 12.0084 7.14583 12.25 7.14583C12.4916 7.14583 12.6875 7.34171 12.6875 7.58333V11.0833C12.6875 11.5088 12.5184 11.9167 12.2175 12.2175C11.9167 12.5184 11.5088 12.6875 11.0833 12.6875H2.91667C2.49121 12.6875 2.08331 12.5184 1.78247 12.2175C1.48163 11.9167 1.3125 11.5088 1.3125 11.0833ZM12.6875 5.25C12.6875 5.49162 12.4916 5.6875 12.25 5.6875C12.0084 5.6875 11.8125 5.49162 11.8125 5.25V2.80615L7.30933 7.30933C7.13847 7.48018 6.86153 7.48018 6.69067 7.30933C6.51982 7.13847 6.51982 6.86153 6.69067 6.69067L11.1938 2.1875H8.75C8.50838 2.1875 8.3125 1.99162 8.3125 1.75C8.3125 1.50838 8.50838 1.3125 8.75 1.3125H12.25C12.4916 1.3125 12.6875 1.50838 12.6875 1.75V5.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Icône de flèche vers la droite
export function ArrowRightIcon({ className = "", size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Icône de menu hamburger
export function MenuIcon({ className = "", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Icône de fermeture (X)
export function CloseIcon({ className = "", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Icône de chevron vers le bas
export function ChevronDownIcon({ className = "", size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Icône de play
export function PlayIcon({ className = "", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 5.14001V18.86C8 19.9188 9.19188 20.5688 10.0531 19.9781L18.1969 13.1181C18.9169 12.6306 18.9169 11.3694 18.1969 10.8819L10.0531 4.02192C9.19188 3.43126 8 4.08126 8 5.14001Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Icône de caméra
export function CameraIcon({ className = "", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23 7L16 12L23 17V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Icône de check/validation
export function CheckIcon({ className = "", size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.6667 5L7.50001 14.1667L3.33334 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Icône d'email
export function EmailIcon({ className = "", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Icône de téléphone
export function PhoneIcon({ className = "", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
