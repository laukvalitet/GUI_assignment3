<template>
<div>
  <b-button v-b-modal.modal-1>Add an expense</b-button>

  <b-modal id="modal-1" title="BootstrapVue" hide-footer>
    <p class="my-4">Please input information about your purchase:</p>
    <expense-create></expense-create>
  </b-modal>
</div>
</template>

<script>
import ExpenseCreate from "@/components/HomeModel/ExpenseCreate";


export default{
    data() {
        return{
            expenses:[],

        } 
    },
    created(){
     
    },
    components:{
      ExpenseCreate
    },
    methods:{
        addExpense(){
        }
    }
}

</script> 