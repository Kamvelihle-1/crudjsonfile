import { createStore } from 'vuex'

export default createStore({
  
  state: {
    products:null
  },
  getters: {
  },
  mutations: {
    async fetchData(state){
      let data=await (await fetch('https://smasherk.github.io/vueJSON/vuejson.json')).json()
      state.products =data.productsList
      console.log(await (await fetch('https://smasherk.github.io/vueJSON/vuejson.json')).json());
     },
     async addData(data){
      //   let data = { this.pType,pImage, pPrice, pLocation, pRooms }
        try {
          return  fetch( 'https://smasherk.github.io/vueJSON/vuejson.json',{
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body:JSON.stringify(data)
        })
        .then(res => res.json())
        } catch (error) {
          console.error(error)
        }
        
      },
      async removeData(id){
   
        try {
          await (await fetch(`https://smasherk.github.io/vueJSON/vuejson.json/productsList/${id}`,{
         method:"DELETE",
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         },
        
       })).json()
       } catch (error) {
         console.error(error)
       }

      },
      async editData(data,id){
        try {
          await (await fetch(`https://smasherk.github.io/vueJSON/vuejson.json/${id}`,{
         method:"PUT",
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         },
         body:JSON.stringify(data)
       })).json()
       } catch (error) {
         console.error(error)
       }
      }
    
  },
  
  actions: {
    getData(context){
      context.commit('fetchData')
    },
    addProducts(context,data){
      context.commit('addData',data)
    },
    deleteData(context,id){
      context.commit('removeData',id)
    },
    updateData(context,data,id){
      context.commit('editData',data,id)
    }
  },
  modules: {
  }
})
