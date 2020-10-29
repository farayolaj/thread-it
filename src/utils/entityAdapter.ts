/**
 * This function takes in a list of objects with `id` properties and 
 * transforms them to an array of ids and an object that contains the  `T` entities
 * on property `id`
 * @example
 * ```
 * const arrayofTypes: Types[] = [
 *   { id: 'a1', name: 'Lorem' },
 *   { id: 'a2', name: 'Ipsum' }
 * ]
 * const { ids, entities } createEntityAdapter<Type>{arrayOfTypes};
 * // ids = ['a1, 'a2'];
 * // entities = {
 * //  a1: { id: 'a1', name: 'Lorem' },
 * //  a2: { id: 'a2', name: 'Ipsum' }
 * //}
 * ```
 * 
 * @param data - The array of T objects to transform
 */
function createEntityAdapter<T extends { id: string }>(data: T[]): IEntityAdapter<T> {
  const entities: {
    [id: string]: T
  } = {};
  const ids = data.map(data => {
    const currentId = data.id;
    entities[currentId] = data;
    return currentId;
  });

  return { ids, entities };
}

interface IEntityAdapter<T> {
  ids: string[],
  entities: {
    [id: string]: T
  }
}

export default createEntityAdapter;