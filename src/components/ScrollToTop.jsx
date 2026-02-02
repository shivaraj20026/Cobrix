import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollTo, scrollToTop } from '../utils/scrollUtils';

// This component will scroll the window to the top whenever the route changes
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      // Get the header height to offset the scroll position
      const navbar = document.querySelector('.navbar');
      const headerOffset = navbar ? navbar.offsetHeight : 0;

      // Scroll to the element with offset for the header
      scrollTo(hash.substring(1), headerOffset);
    } else {
      // No hash, scroll to top
      scrollToTop();
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
