function newSlice(array, begin, end) {
   let result = []
   let newBegin, newEnd;
   if (begin === undefined) newBegin = 0
   if (begin >= 0) newBegin = begin
   else if (begin < 0) newBegin = array.length - Math.abs(begin);
   if (end === undefined) newEnd = array.length
   else if (end >= 0) newEnd = end
   else if (end < 0) newEnd = array.length - Math.abs(end)
   for (let i = newBegin; i < newEnd; i++) {
      result.push(array[i])
   }
   return result
}

module.exports = newSlice
