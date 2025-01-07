import { defineStore } from "pinia";

export const useCountStore = defineStore('Count', {
  actions:{
    add(value: number, school: string, address: string){
      this.sum += value
      this.school = school
      this.address = address
    }
  },
  // 存數據的地方
  state() {
    return {
      sum: 6,
      school: '國立中央大學',
      address: '桃園市中壢區中大路'
    }
  },
})
