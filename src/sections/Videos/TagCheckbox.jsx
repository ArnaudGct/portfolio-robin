import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react"; // facultatif, pour une icône check

export default function TagCheckbox({ type, count, selected, onToggle }) {
  return (
    <button
      onClick={() => onToggle(type)}
      className={`relative border border-orange-600 flex items-center gap-2 px-3 py-1 font-medium rounded-sm text-sm font-rethink-sans cursor-pointer transition
        ${
          selected
            ? "bg-orange-50 text-orange-600"
            : "bg-white text-orange-600 hover:bg-orange-50"
        }`}
    >
      {/* Case à cocher style carré */}
      <span className="relative w-4 h-4 border text-orange-600 border-orange-600 rounded-sm flex items-center justify-center bg-white">
        <AnimatePresence>
          {selected && (
            <motion.div
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Check size={12} />
            </motion.div>
          )}
        </AnimatePresence>
      </span>

      {/* Label */}
      <p className="font-jet-brains-mono text-black font-normal text-xs">
        {type}
      </p>

      {/* Badge de comptage amélioré */}
      <span
        className={`text-xs font-semibold min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center border transition-all duration-200 ${
          selected
            ? "bg-orange-600 text-orange-50 border-orange-600"
            : "bg-orange-50 text-orange-600 border-orange-600"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
