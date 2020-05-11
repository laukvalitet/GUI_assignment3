<template>
    <div class="card-deck">
        <div class="card" v-for="job in jobs" :key="job.efJobId">
            <div class="card-body">
                <h4 class="card-title">{{ job.location }}</h4>
                <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
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
        this.jobs = getModelJobs();
    },
    methods:{
        getModelJobs() {
            let result = await get("api/jobs");
            if(result.status==200){
                modelJobs = await result.json();
            }
        }
    }
}
</script>
