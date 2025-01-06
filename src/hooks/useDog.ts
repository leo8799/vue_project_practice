import { onBeforeMount, onMounted, reactive } from "vue";
import axios from "axios";

export default function () {
  // 將同一個功能的數據、方法都放在同一個文件裏是vue3最大的改變，也就是組合式API，可以增加可維護性

  let dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg",
  ]);

  // async await 兩個關鍵字經常重複出現，async修飾的函數内才能使用await，await函數會等待函數執行完畢才繼續執行下一段代碼
  async function getDog() {
    try {
      let result = await axios.get(
        "https://dog.ceo/api/breed/pembroke/images/random"
      );
      dogList.push(result.data.message);
    } catch (error) {
      alert(error);
    }
  }

  onBeforeMount(()=>{
    getDog()
  })
  return { dogList, getDog };
}
