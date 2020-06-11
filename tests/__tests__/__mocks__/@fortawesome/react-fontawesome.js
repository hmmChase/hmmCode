/**
 * Return a simple, empty <i> element
 * with the correct class name for the given `icon` prop
 */

const FontAwesomeIcon = ({ icon, size }) => (
  <i className={`fa-${icon.iconName}${size ? ' ' + size : ''}`} />
);

export { FontAwesomeIcon };
