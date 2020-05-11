<template>
<div>
  <b-button v-b-modal.modal-1>Add an expense</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Please input information about your purchase:</p>
  </b-modal>
</div>
</template>

<script>

export default{
    data() {
        return{
            expenses:[],

        } 
    },
    created(){
     
    },
    methods:{
        addExpense(){
        }
    }
}

</script> 