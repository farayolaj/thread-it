/**
 * Utility
 * @param {Function} updateFunc Function to call with new value
 * @returns function that handles change
 */
export const handleChange = updateFunc => {
  return ev => updateFunc(ev.target.value);
};
