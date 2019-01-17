/**
 * 获取时间戳，年，月，日，季度
 */
export const getCurrentDate = async () => {
  const currentDate = new Date(); // 获取当前时间
  const year = currentDate.getFullYear(); // 获取年份
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return { year, month, day,hours, minutes,seconds };
}

// 获取随机数
// 生成3-32位随机串：randomWord(true, 3, 32)
// 生成43位随机串：randomWord(false, 43)
export function randomWord(randomFlag, min, max){
      var str = "",
          range = min,
          arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
          // arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      // 随机产生
      if(randomFlag){
          range = Math.round(Math.random() * (max-min)) + min;
      }
      for(var i=0; i<range; i++){
          pos = Math.round(Math.random() * (arr.length-1));
          str += arr[pos];
      }
      return str;
}
// 获取当前时间时间戳
export function getTimestamp() {
    return Date.parse(new Date())
}