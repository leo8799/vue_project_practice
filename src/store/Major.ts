import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import { reactive } from "vue";

// 選項式寫法
// export const useMajorStore = defineStore('Major',{
//   actions:{
//     getMajor(){
//       let obj = {id: nanoid(), name:'測試'}
//       this.majorList.unshift(obj)
//     }
//   },
//   state() {
//     return {
//         majorList:JSON.parse(localStorage.getItem('majorList') as string) || []
//     }
//   }
// })

// 組合式寫法
export const useMajorStore = defineStore("Major", ()=>{

  let majorList = reactive(
    JSON.parse(localStorage.getItem("majorList") as string) || []
  )

  function getMajor() {
    let obj = { id: nanoid(), name: "測試" };
    majorList.unshift(obj);
  }
  return {majorList, getMajor}
});
