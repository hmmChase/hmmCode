import React from 'react';

/**
 * Return a simple, empty <i> element
 * with the correct class name for the given `icon` prop
 */

export function FontAwesomeIcon({ icon, size }) {
  const iconClass = Array.isArray(icon) ? icon.join('-') : icon;
  return <i className={`fa ${iconClass} ${size}`} />;
}
