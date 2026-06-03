export const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    margin: "-80px",
  },

  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },

  whileInView: {
    opacity: 1,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.6,
  },
};

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const smoothScale = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  },
};
