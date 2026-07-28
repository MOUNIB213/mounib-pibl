export const transitionPresets = {
  smooth: {
    type: "spring",
    stiffness: 70,
    damping: 18,
    mass: 0.8
  },
  gentle: {
    type: "spring",
    stiffness: 50,
    damping: 15
  },
  linear: {
    type: "tween",
    ease: "linear"
  },
  bezier: [0.16, 1, 0.3, 1] as [number, number, number, number]
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const fadeInUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      delay
    }
  }
});

export const fadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: transitionPresets.bezier,
      delay
    }
  }
});

export const slideInLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      delay
    }
  }
});

export const slideInRight = (delay: number = 0) => ({
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      delay
    }
  }
});

export const zoomIn = (delay: number = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      delay
    }
  }
});
