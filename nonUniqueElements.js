/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */
function count(data , letter){
  var i
  var count = 0
  for (i = 0; i < data.length; i++)
    if (data[i] == letter)
      count++
  return count
}


export default function nonUniqueElements(data) {
  var i
  for (i = 0; i < data.length;i ++)
    if (count(data, data[i]) <=1)
      delete data[i]
  data = data.filter( element => element != undefined )
  return data
}
