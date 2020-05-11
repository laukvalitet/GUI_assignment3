<template>
    <div class="w-100 h-100">
        <div class="d-flex flex-column w-100 h-100" v-if="!foo">
            <h3 class="p-3 text-center">List of Models</h3>
            <ul class="list-group">
                <!-- Indsæt modeller her -->
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
        <div class="w-100 h-100">
            <p>Manager: This isnt done yet</p>
        </div>
    </div>
</template>
