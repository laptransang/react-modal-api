/**
 *
 * @param condition
 * @param className
 */
function triggerHiddenClassName(condition: boolean, className: string, ) {
  if (condition) {
    return `${className} ${className}--hidden`;
  }

  return className;
}

export default triggerHiddenClassName;
