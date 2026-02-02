/**
 * Smoothly scrolls to a specific element or position on the page
 * @param {string|number} target - Element ID or Y position to scroll to
 * @param {number} offset - Optional offset from the top (e.g., to account for fixed header)
 * @param {string} behavior - Scroll behavior ('auto', 'smooth')
 */
export const scrollTo = (target, offset = 0, behavior = 'smooth') => {
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    let position = 0;
    
    if (typeof target === 'string') {
      // If target is an element ID
      const element = document.getElementById(target);
      if (element) {
        // Get element's position relative to the viewport
        const rect = element.getBoundingClientRect();
        position = rect.top + window.pageYOffset - offset;
      }
    } else if (typeof target === 'number') {
      // If target is a Y position
      position = target - offset;
    }
    
    // Scroll to the calculated position
    window.scrollTo({
      top: position,
      behavior: behavior
    });
  }, 100);
};

/**
 * Scrolls to the top of the page
 * @param {string} behavior - Scroll behavior ('auto', 'smooth')
 */
export const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior: behavior
  });
};
