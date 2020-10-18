import { ChangeEventHandler } from 'react';

interface IHandleChange {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (updateFunc: (value: string) => void): ChangeEventHandler<any>;
}

/**
 * Utility
 * @param updateFunc Function to call with new value
 * @returns function that handles change
 */
const handleChange: IHandleChange = updateFunc => ev => updateFunc(ev.target?.value);

export default handleChange;