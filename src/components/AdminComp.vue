<template>
    <div>
        <div class="row mx-0">
            <div class="col">
                <h2 class="display-2">Admin Page</h2>
            </div>
        </div>
        <div class="row mx-0">
            
                 <div class="col ">
                     <button  id="sort-btn">Sort</button>
                 </div>
             
              <!-- Model for the add button -->
             
                 <div class="col">
                     <button type="button"  data-bs-toggle="modal" data-bs-target="#newListing-model" data-bs-whatever="add">ADD</button>
                

                   <div class="modal fade" id="newListing-model" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                       <div class="modal-content">
                         <div class="modal-header">
                           <h1 class="modal-title fs-5" id="modalTitle">Add New Listing</h1>
                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>
                         <div class="modal-body">
                           <form>
                             <div class="mb-3">
                               <label for="listing-type" class="col-form-label">Property type</label>
                               <input v-model="pType" type="text" class="form-control" id="listing-type">
                             </div>
                             <div class="mb-3">
                               <label for="listing-location" class="col-form-label">Location</label>
                               <input  v-model="pLocation" type="text" class="form-control" id="listing-location">
                             </div>
                             <div class="mb-3">
                               <label for="listing-image" class="col-form-label">Image link: </label>
                               <input v-model="pImage" type="text" class="form-control" id="listing-image">
                             </div>
                             <div class="mb-3">
                               <label for="listing-price" class="col-form-label">Price: </label>
                               <input v-model="pPrice" type="text" class="form-control" id="listing-price">
                             </div>
                             <div class="mb-3">
                               <label for="listing-roomNum" class="col-form-label">Number of bedrooms</label>
                               <input v-model="pRooms" type="text" class="form-control" id="listing-roomNum">
                             </div>
                             
                           </form>
                         </div>
                         <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" id="edit-model">Edit</button>
                           <button @click="addProducts" type="button"  id="add-btn">Add Listing</button>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
             
               
              
                
            
        </div>
      
         <div class="row justify-content-center mt-3 mx-0">
             <div class="col  text-center ">
              <div class="tbl-container">
                 <table  id="tblAdmin">
                     <tr>
                         <th>Id</th>
                         <th>Type</th>
                         <th class="tbl-image">Image</th>
                         <th>Location</th>
                         <th>Price</th>
                         <th>Bedrooms</th>
                         <th>Edit</th>
                         <th>Delete</th>
                     </tr>
                     <tbody>
                     <tr v-for="item in products" @change="incre" :key="item.id">
                      <td > {{ item.id }}</td>
                      <td>{{ item.type }}</td>
                      <td class="tbl-image"><img :src="item.image"></td>
                      <td> {{ item.location }}</td>
                      <td>R {{ item.price }}</td>
                      <td> {{ item.rooms }}</td>
                      <td><button data-bs-toggle="modal" data-bs-target="#newListing-model" id="edit-btn">Edit</button></td>
                      <td><button @click="deleteData" id="delete-btn">Delete</button></td>
                     </tr>
                    </tbody>
                   
                 </table>
              </div>
             </div>
         </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        computed:{
        products(){
            return this.$store.state.products
        }
      },
      data(){
        return{
            pPrice:'',
            pRooms:'',
            pType:'',
            pLocation:'',
            pImage:'',
            cnt:0,
            data:{
                id:this.cnt+1,
                type:this.pType,
                image:this.pImage,
                price:this.pPrice,
                quantity:1,
                location:this.pLocation,
                rooms:this.pRooms
            }
        }
      },
      

      methods:{
        
        ...mapActions(['addProducts']),
        addProducts(){
            
           if (this.data){
            this.addProducts(this.data)
           }
        },
        incre(){
            this.cnt++
        },
        ...mapActions(['deleteData']),
        deleteData(){
            this.deleteData(this.cnt)
        },
        ...mapActions(['updateData']),
        updateData(){
            this.updateData(this.data,this.cnt)
        }

       }
        
    }
</script>

<style scoped>
.admin{
    max-width: inherit;
}
 tr th, tr td{
    border: 1px solid black;
    padding: 1rem;
    width: inherit;
    
}
.tbl-container{
    overflow-x: scroll;
    padding: 2rem;
    max-width: 100%;
}
table{
    width: 90%;
}
tr img{
    width: 10rem;
}


</style>