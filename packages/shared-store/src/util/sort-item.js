import { string as stringComparator } from './comparators';

export default (itemOne, itemTwo) => {

  if (!itemOne.description) return -1;
  if (!itemTwo.description) return 1;

  return stringComparator(itemOne.description, itemTwo.description);
}
