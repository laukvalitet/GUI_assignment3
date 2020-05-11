<template>
    <div class="card-deck">
        <div class="card" v-for="job in jobs" :key="job.efJobId">
            <div class="card-body">
                <h4 class="card-title">{{ job.location }}  {{job.date}}</h4>
                <p class="card-text">
                    <h5>Description:</h5> <br>
                    <h6>{{job.comments}}</h6>
                    <button type="button" class="btn btn-secondary">Secondary</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { get } from "@/shared/fetch";
import { post } from "@/shared/fetch";


export default {
    data() {
        return{
            jobs: [],
        }
    },
    created() {
        getModelJobs();
    },
    methods:{
        async getModelJobs() {
            let result = await get("api/jobs");
            if(result.status==200){
                jobs = await result.json();
            }
        }
    }
}
</script>
