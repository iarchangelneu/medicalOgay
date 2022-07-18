<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
  <div>
    <div class="grey darken-1 empty-layout">
      <form class="card auth-card">
        <div class="card-content">
          <span class="card-title">Вход в панель управления</span>
          <div class="input-field">
            <input id="name" type="text" class="validate login" v-model="email" />
            <label for="name">Почта</label>
            <!-- <small class="helper-text invalid" >Email</small> -->
          </div>
          <div class="input-field">
            <input id="password" type="password" class="validate" v-model="password" />
            <label for="password">Пароль</label>
            <!-- <small class="helper-text invalid" v-if="error">Password</small> -->
          </div>
        </div>
        <div class="card-action">
          <div>
            <button class="btn waves-effect waves-light auth-submit" @click.prevent="signIn">
              Войти
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
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

const email = ref("");
const password = ref("");
const router = useRouter();
const signIn = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      console.log("Вход успешен");
      router.push("/leads");
    })
    .catch((error) => {
      console.log(error)
      switch (error.code) {
        case "auth/invalid-email":
          console.log("Почта введена не правильно");
          break;
        case "auth/user-not-found":
          console.log("Аккаунта с таким логином не существует");
          break;
        case "auth/wrong-password":
          console.log("Неправильный пароль");
          break;
        default:
          console.log("Почта или пароль неверны");
          break;
      }
    });

};
</script>

<style scoped>
.empty-layout {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 5rem;
  height: 100vh;
}

.auth-card {
  width: 500px;
}

.auth-submit {
  width: 100%;
}

.helper-text.invalid {
  color: #f44336;
}

.card .card-action {
  border-top: 0 !important;
}
</style>