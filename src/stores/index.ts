import { defineStore } from 'pinia';
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      place:[{
        name:null,
        width:null,
        height:null,
        x:null,
        y:null,
        borderRadius:"",
        rotate:"",
        flipX:false,
        flipY:false,
        id:"",
        tag:""
      }],
      active:false,
      selectId:"",
      CoreActive:false
    };
  },
  getters: {},
  actions: {
    updateplace(place) {
      console.log(place,"修改值")
     
      this.place = place; 
    },
    updateselectId(Id) {
      this.selectId = Id; 
    },
    updateCoreActive(bol) {
      this.CoreActive = bol; 
    },
    updateActive(active){
      this.active = active;
    }
  },
});
