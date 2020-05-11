<template>
    <div class="col-12" v-if="job !== null">
        <h1>{{ job.location }}</h1>

        <table class="table table-striped table-light table-bordered">
            <thead class="thead-dark">
                <tr>
                    <td scope="col">Name</td>
                    <td scope="col">Email</td>
                    <td scope="col">Phone number</td>
                    <td scope="col"></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="model in job.models" :key="model.efModelId">
                    <td scope="row">
                        {{ model.firstName }} {{ model.lastName }}
                    </td>
                    <td>{{ model.email }}</td>
                    <td>{{ model.phoneNo }}</td>
                    <td>
                        <button
                            class="btn btn-danger"
                            v-on:click="removeModel(model.efModelId)"
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <hr />
        <h1>Available models</h1>

        <table class="table table-striped table-light table-bordered">
            <thead class="thead-dark">
                <tr>
                    <td scope="col">Name</td>
                    <td scope="col">Email</td>
                    <td scope="col">Phone number</td>
                    <td scope="col"></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="model in diffModels()" :key="model.efModelId">
                    <td scope="row">
                        {{ model.firstName }} {{ model.lastName }}
                    </td>
                    <td>{{ model.email }}</td>
                    <td>{{ model.phoneNo }}</td>
                    <td>
                        <button
                            class="btn btn-primary"
                            v-on:click="addModel(model.efModelId)"
                        >
                            Add
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { get, del, post } from "@/shared/fetch.js";
export default {
    data() {
        return {
            job: null,
            models: [],
        };
    },
    methods: {
        async getJob() {
            const response = await get("api/jobs/" + this.$route.params.id);
            this.job = await response.json();
        },
        async getModels() {
            const response = await get("api/models");
            this.models = await response.json();
        },
        diffModels() {
            return this.models.filter(
                model =>
                    !this.job.models
                        .map(m => m.efModelId)
                        .includes(model.efModelId)
            );
        },
        putIdsOnModelsInJob() {
            this.job.models = this.job.models.map(model => {
                model.efModelId = this.models.find(
                    m => m.email == model.email
                ).efModelId;
                return model;
            });
        },
        async removeModel(modelId) {
            const jobId = this.$route.params.id;
            await del("api/jobs/" + jobId + "/model/" + modelId);

            await this.getJob();
            this.putIdsOnModelsInJob();
        },
        async addModel(modelId) {
            const jobId = this.$route.params.id;
            await post("api/jobs/" + jobId + "/model/" + modelId);

            await this.getJob();
            this.putIdsOnModelsInJob();
        },
    },
    async created() {
        const jobPromise = this.getJob();
        const modelPromise = this.getModels();
        await Promise.all([jobPromise, modelPromise]);
        this.putIdsOnModelsInJob();
    },
};
</script>
