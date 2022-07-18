<template>
    <div class="modal fade" id="callModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header" class="trap">default header</slot>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body">
                    <slot name="body">default body</slot>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal-header {
    align-items: baseline !important;
    display: contents !important;
}

.modal-dialog {
    max-width: 754px;
}

.modal-header {
    border-bottom: 0;
}
</style>