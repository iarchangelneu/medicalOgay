<template>
  <div v-if="people.length !== 0">
    <div style="text-align:right; margin-top:20px; margin-right:20px;"><button class="btn_log btn btn-dark"
        @click="signOut">Выйти</button> </div>

    <div class="card">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Телефон</th>
            <th scope="col">Почта</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, i) in people" :key="person.id">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ person.firstName }}</td>
            <td>{{ person.Phone }}</td>
            <td>{{ person.Email }}</td>
            <td>
              <button class="btn btn-danger" @click="$emit('remove', person.id)">
                Удалить
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <h3>{{ person.firstName }}</h3>
      <h3>{{ person.Phone }}</h3>
      <h3>{{ person.Email }}</h3> -->
    </div>
  </div>
  <div v-else>
    <h4 class="notlogged">Список пуст</h4>
  </div>
</template>
<script setup>

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useRouter } from "vue-router";
import { onBeforeUnmount } from 'vue'

const firebaseConfig = {
  apiKey: "AIzaSyApK-GLc-_9Mjt_J3rFhBcknikL_hG83Xg",
  authDomain: "mkionvue.firebaseapp.com",
  databaseURL: "https://mkionvue-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mkionvue",
  storageBucket: "mkionvue.appspot.com",
  messagingSenderId: "756028481920",
  appId: "1:756028481920:web:a7f8b81c9f34a5e0d66165"
};
firebase.initializeApp(firebaseConfig);



const myRouter = useRouter();


const authListener = firebase

  .auth()
  .onAuthStateChanged(function (user) {

    if (!user) { // not logged in

      myRouter.push({ name: "Main" });
    }

  })
onBeforeUnmount(() => {
  // clear up listener
  authListener()
})
</script>

<script>
export default {
  props: ["people"],
  emits: ["load", "remove"],
  methods: {

    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Main"
          });
        });
    },
  }
};
</script>

<style>
.card {
  width: 75vw;
  margin-left: auto;
  margin-right: auto;
}

.btn_log {
  text-align: right;
}

.notlogged {
  text-align: center;
}
</style>