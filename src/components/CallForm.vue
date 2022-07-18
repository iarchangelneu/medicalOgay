<script>
export default {
  props: {
    show: Boolean,
  },
  methods: {
    close: function () {
      this.$emit("close");
    },
  },
};
</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal__header">
            <slot name="header" class="trap">default header</slot>
            <button class="close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.close {
  background: transparent;
  border: 0;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.trap {
  text-align: center;
}

.modal-container {
  /* width: 52.34vw; */
  width: 39.27vw;
  margin: 0px auto;
  padding: 1.04vw 1.56vw;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal__header {
  margin-top: 0;
  color: #000000;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.modal-body {
  margin: 1.04vw 0;
}

.modal-default-button {
  float: right;
  border: 0;
  background: transparent;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>