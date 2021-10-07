export function formatDate(date) {
  let newArr = date.split('T')
  let newD = newArr[0]
  let time = newArr[1]
  let arr = time.split('.')
  return `${newD} - ${arr[0]}`;
}