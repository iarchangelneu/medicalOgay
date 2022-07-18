<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>

<script setup>
import { ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
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
import { useRouter } from "vue-router"; // import router
const email = ref("");
const password = ref("");
const router = useRouter(); // get a reference to our vue router
const register = () => {
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>