<template>
    <div class="col-12">
        <h1>Jobs:</h1>
        <p>Click on a job to view more specifics</p>
        <table
            class="table table-striped table-hover table-light table-bordered"
        >
            <thead class="thead-dark">
                <tr>
                    <td scope="col">
                        Customer
                    </td>
                    <td scope="col">
                        Location
                    </td>
                    <td scope="col">
                        Date
                    </td>
                    <td scope="col">
                        Days
                    </td>
                    <td scope="col">
                        Models
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="job in jobs" :key="job.efJobId">
                    <td scope="row">{{ job.customer }}</td>
                    <td>{{ job.location }}</td>
                    <td>{{ job.startDate }}</td>
                    <td>{{ job.days }}</td>
                    <td>
                        {{ job.jobModels !== null ? job.jobModels.length : 0 }}
                    </td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary" v-on:click="createNewJob()">
            Create new job
        </button>
    </div>
</template>

<script>
import { get } from "@/shared/fetch";
import router from "@/router";

export default {
    data() {
        return {
            jobs: [],
        };
    },
    methods: {
        createNewJob() {
            router.push({ name: "Job" });
        },
    },
    async created() {
        let jobs = await get("api/jobs");
        if (jobs.status === 200) {
            this.jobs = await jobs.json();
        }
    },
};
</script>
