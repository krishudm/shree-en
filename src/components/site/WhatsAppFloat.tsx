import { motion } from "framer-motion";

export const WhatsAppFloat = () => {
  const phone = "918989829551";
  const message = encodeURIComponent(
    "Hello Shree Enterprise, I would like to enquire about your products.",
  );
  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-6 z-50 h-14 w-14 rounded-full grid place-items-center text-white shadow-deep"
      style={{ backgroundColor: "#25D366" }}
    >
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-40"
        style={{ backgroundColor: "#25D366" }}
      />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.87 2.722.87.36 0 2.05-.387 2.05-1.49 0-.717-.07-.717-.86-1.106-.27-.142-1.176-.587-1.176-.587zM16.005 0C7.183 0 .005 7.178.005 16c0 2.91.791 5.633 2.158 7.97L0 32l8.227-2.149A15.93 15.93 0 0 0 16.005 32c8.822 0 16-7.178 16-16s-7.178-16-16-16zm0 29.4c-2.524 0-4.872-.74-6.852-2.011l-4.79 1.252 1.279-4.66A13.34 13.34 0 0 1 2.605 16C2.605 8.6 8.605 2.6 16.005 2.6S29.4 8.6 29.4 16s-6 13.4-13.395 13.4z" />
      </svg>
    </motion.a>
  );
};
