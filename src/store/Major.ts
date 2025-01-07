import { defineStore } from "pinia";

export const useMajorStore = defineStore('Major',{
  state() {
    return {
        majorList:[
          {id:'001', name:'資訊工程學系'},
          {id:'002', name:'電機工程學系'},
          {id:'003', name:'機械工程學系'}
        ]
    }
  }
})
