/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

function corvertUnitToString(unit){
  switch(unit){
    case 0  : return "B"
    case 1 : return "KB"
    case 2 : return "MB"
    case 3 : return "GB"
    case 4 : return "TB"
    case 5 : return "PB"
    default : return -1
  }
}

export default function convertBytesToHuman(bytes) {
  if (typeof (bytes) != "number")
    return false
  if ((bytes < 0 ) || (isNaN(bytes)))
    return false
  var unit = 0
  var power = 2 ** 10
  while ( bytes >= power){
    bytes /= power;
    unit ++
  }
  //Округление до  2 знаков
  if (corvertUnitToString(unit) == -1)
    return "превышен лимит данных"

  bytes = Math.round(bytes*100)/100
  return bytes.toString() + " " + corvertUnitToString(unit)

}
