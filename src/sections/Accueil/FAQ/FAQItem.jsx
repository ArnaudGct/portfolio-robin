"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@/src/components/icons/Icons";
import ReactMarkdown from "react-markdown";

export default function FAQItem({
  title,
  content,
  index,
  openIndex,
  onOpenChange,
}) {
  const isOpen = openIndex === index;

  return (
    <div className="border border-gray-50 rounded-sm overflow-hidden ">
      <button
        onClick={() => onOpenChange(index)}
        className="w-full flex items-center gap-3 p-4 text-left cursor-pointer"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-orange-500" />
          ) : (
            <Plus className="h-5 w-5 text-orange-500" />
          )}
        </motion.div>
        <span className="text-black font-clash-medium">{title}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 text-black">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
