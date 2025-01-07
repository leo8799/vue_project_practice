import { defineStore } from "pinia";

export const useCountStore = defineStore('Count', {
  // 存數據的地方
  state() {
    return {
      sum: 6
    }
  },
})
