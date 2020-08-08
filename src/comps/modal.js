import React from 'react';
import { motion } from 'framer-motion';
function Modal({ selected, reset }) {
  const unfocus = (e) => {
    if (e.target.classList.contains('backdrop')) {
      reset();
    } else {
      return;
    }
  };
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={unfocus}
    >
      <motion.img
        src={selected}
        alt={`modal popup for ${selected}`}
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modal;
