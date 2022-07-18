<template>
  <!-- HEADER  -->

  <div class="sidebar">

    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle" @click="menuOpen = !menuOpen">
      <span></span>
    </label>

    <ul class="menu__box">
      <img src="../assets/img/menulogo.svg" alt="" class="menulogo">
      <li><a class="menu__item" href="#about" @click="closeSideBar">О клинике</a></li>
      <li><a class="menu__item" @click="closeSideBar" data-bs-toggle="modal"
          data-bs-target="#doctorsModal">Специалисты</a></li>
      <li><a class="menu__item" @click="closeSideBar" href="#company">Ценности компании</a></li>
      <li><a class="menu__item" @click="closeSideBar" href="#mission">Наша миссия </a></li>
      <!-- <li><a class="menu__item" href="#">Сертификаты</a></li> -->

      <li><a class="menu__item" @click="closeSideBar" href="#callus">Контакты</a></li>
    </ul>
  </div>

  <div class="container-fluid container-p">
    <div class="header">
      <span class="header__text"><a class="phone__src" href="tel:+77273670159">+7 (727) 367-01-59</a><br />
        <a class="phone__src" href="tel:+77052056446">+7 (705) 205-64-46</a></span>
      <img src="../assets/img/logo1.png" class="header-logo" />
    </div>
  </div>

  <!-- MAIN  -->

  <div class="container-fluid container-p">
    <div class="row">
      <div class="col-6">
        <nobr>
          <div class="main__text">
            <p class="main__clinika">
              Клиника<br />
              Doctor Ogay
            </p>
            <p class="main__almaty">Лечение и реабилитация в Алматы</p>
            <ul class="main__ul">
              Лечение
              <li>Остеохондроза суставов</li>
              <li>Протрузии и грыжи позвоночника</li>
              <li>И т.д.</li>
            </ul>
          </div>
        </nobr>
      </div>
      <div class="col-6 main__img">
        <img src="../assets/img/women.png" alt="" class="main__women" />
        <div class="main__button">
          <button class="main__btn" data-bs-toggle="modal" data-bs-target="#callModal">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- BENEFITS  -->

  <!-- Форма -->
  <call-back-modal>
    <template #header>
      <div class="d-flex justify-content-center">
        <p class="form__header">
          Оставьте заявку<br />
          и получите консультацию<br />
          от доктора Огай Ю.Л.
        </p>
      </div>
    </template>
    <template #body>
      <form id="contact" action="#" name="contact" @submit.prevent="validation">
        <input id="name" class="txt" name="name" type="text" placeholder="Ваше имя" v-model.trim="name" />
        <input id="phone-mask" class="txt" name="phone" type="text" placeholder="Ваш телефон" v-model.trim="phone" />
        <input id="email" class="txt" name="email" type="email" placeholder="Ваш e-mail" v-model.trim="email" />
        <div class="privacy">
          <input type="checkbox" id="privacy" />
          <div class="privacy__text">
            <p id="privacy__text">
              Я даю согласие на обработку персональных данных в соответствие с
              условиями<a href="#"> Пользовательского соглашения.</a>
            </p>
          </div>
        </div>

        <button class="form__button">Оставьте
          заявку</button>
      </form>
    </template>
  </call-back-modal>

  <!-- Модалки -->
  <about-modal>
  </about-modal>

  <div class="container-fluid container-bp benefits">
    <div class="benefits__full">
      <div class="benefits__col">
        <img src="../assets/img/ben1.svg" alt="" class="benefits__img" style="width: 7.24vw" />
        <p class="benefits__main">Что мы лечим</p>
        <div class="benefits__block" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <p class="benefits__text">
            Заболевания опорно-двигательного аппарата
          </p>
          <p class="benefits__text">
            Артриты и артрозы мелких и крупных суставов
          </p>
        </div>
      </div>
      <div class="benefits__col">
        <img src="../assets/img/ben2.svg" alt="" class="benefits__img" style="width: 7.24vw" />
        <p class="benefits__main">Как мы лечим</p>
        <div class="benefits__block" data-bs-toggle="modal" data-bs-target="#howModal">
          <p class="benefits__text">
            Иглорефлексотерапия
          </p>
          <p class="benefits__text">
            Моксатерапия
          </p>
          <p class="benefits__text">
            Банки
          </p>
          <p class="benefits__text">
            Различные виды массажей
          </p>

        </div>
      </div>
      <div class="benefits__col">
        <img src="../assets/img/ben3.svg" alt="" class="benefits__img" style="width: 7.24vw" />
        <p class="benefits__main">Специалисты</p>
        <div class="benefits__block" data-bs-toggle="modal" data-bs-target="#doctorsModal">
          <p class="benefits__text">
            Сапов Андрей<br>
            Массажист

          </p>
          <p class="benefits__text">
            Огай Юрий<br>
            <nobr>Врач восточной медицины</nobr><br>
            Иглотерапевт, кинезиолог
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- ABOUT -->

  <div class="container-fluid pl benefits pr about">
    <a name="about"></a>
    <div class="about__button">
      <button class="about__btn" data-bs-toggle="modal" data-bs-target="#callModal">
        Оставьте заявку
      </button>
    </div>
    <div class="about__fullgreen">
      <a name="company"></a>
      <p class="about__main">Ценности компании</p>
      <ul class="about__ul">
        <li class="about__li">
          <span class="about__span">принимать пациентов как партнера</span>
        </li>
        <li class="about__li">
          <span class="about__span">слышать пациента</span>
        </li>
        <li class="about__li">
          <span class="about__span">оказывать помощь</span>
        </li>
        <li class="about__li">
          <span class="about__span">полная прозрачность касающиеся лечения и диагностики</span>
        </li>
        <li class="about__li">
          <span class="about__span">стремится сделать больше ожидание пациента</span>
        </li>
      </ul>
    </div>
    <div class="about__red">
      <a name="mission"></a>
      <p class="about__main">Наша миссия</p>
      <p class="about__text">
        Мы помогаем людям возвратить здоровье и улучшить качество жизни,
        проявляя заботу о пациенте, используя опыт, профессионализм и
        эффективные технологии Восточный и Европейской Медицины.
      </p>
    </div>
    <div class="about_green">
      <p class="about__main">Порядок приема</p>
      <div class="about__images">
        <img src="../assets/img/about1.svg" class="ab1" alt="" style="width: 2.66vw" />
        <p class="about__p">запись на консультацию</p>
      </div>
      <div class="about__images">
        <img src="../assets/img/about2.svg" class="ab2" alt="" style="width: 2.66vw" />
        <p class="about__p">консультация</p>
      </div>
      <div class="about__images">
        <img src="../assets/img/about3.svg" class="ab3" alt="" style="width: 2.81vw" />
        <p class="about__p">осмотр</p>
      </div>
      <div class="about__images">
        <img src="../assets/img/about4.svg" class="ab4" alt="" style="width: 2.5vw" />
        <p class="about__p">мануально-мышечные тестирование</p>
      </div>
      <div class="about__images">
        <img src="../assets/img/about5.svg" class="ab5" alt="" style="width: 2.34vw" />
        <p class="about__p">
          ортопедические следование -интерпретация анализов и снимков
          -определение методик лечения и срока терапии
        </p>
      </div>
      <div class="about__images">
        <img src="../assets/img/about6.svg" class="ab6" alt="" style="width: 3.39vw" />
        <p class="about__p">лечение</p>
      </div>
      <div class="about__images">
        <img src="../assets/img/about7.svg" class="ab7" alt="" style="width: 3.85vw" />
        <p class="about__p">выписка и рекомендации</p>
      </div>
    </div>
  </div>

  <!-- FEEDBACK -->

  <div class="container-fluid pr pl">
    <p class="feedback__h1">Отзывы</p>
    <div class="feedback__blocks">
      <div class="feedback__left">
        <img src="../assets/img/feedback.svg" alt="" class="feedback__img" style="width: 4.64vw" />
        <div class="feedback__lefttext">
          <p class="feedback__text">
            Высочайший профессионал, внимательный и заинтересованный в
            выздоровлении каждого пациента врач, человек, обладающий мудростью
            восточных философов – все это о Юрии Лаврентьевиче Огае. Юрий
            Лаврентьевич искусный иглорефлексотерапевт, фитотерапевт.
          </p>
          <p class="feedback__sign">Подпись</p>
        </div>
      </div>
      <div class="feedback__right">
        <img src="../assets/img/feedback.svg" alt="" class="feedback__img" style="width: 4.64vw" />
        <div class="feedback__righttext">
          <p class="feedback__text">
            Высочайший профессионал, внимательный и заинтересованный в
            выздоровлении каждого пациента врач, человек, обладающий мудростью
            восточных философов – все это о Юрии Лаврентьевиче Огае. Юрий
            Лаврентьевич искусный иглорефлексотерапевт, фитотерапевт.
          </p>
          <p class="feedback__sign">Подпись</p>
        </div>
      </div>
    </div>
  </div>

  <!-- GALERY -->

  <div class="containter-fluid pl pr pad">
    <p class="galery__main">Галерея</p>
  </div>

  <!-- CALL US  -->

  <div class="callus">
    <div class="callus__block">
      <a name="callus"></a>
      <p class="callus__main">Контактная информация</p>
      <div class="callus__blocks">
        <img src="../assets/img/map.png" alt="" class="callus__map" style="width: 25.47vw" />
        <div class="callus__right">
          <div class="callus__rightcontent">
            <img src="../assets/img/callus_cont.png" alt="" class="callus__ico" style="width: 5.83vw" />
            <p class="callus__text">
              г. Алматы, Бульвар Бухар Жырау 27/5 <br />Уг. ул. Маркова Ж/к
              Бухар Жырау Тауэрс
            </p>

            <p class="callus__text">
              <a class="phone__src" href="tel:+77273670159"> +7 (727) 367-01-59<br /></a>
              <a class="phone__src" href="tel:+77052056446"> +7 (705) 205-64-46 Виктория<br /></a>
              <a class="phone__src" href="tel:+77071801193">+7 (707) 180-11-93 Алла<br /></a>
              info@osteohondroz.kz
            </p>
          </div>
        </div>
      </div>
      <div class="callus__button">
        <button class="callus__btn" data-bs-toggle="modal" data-bs-target="#callModal">
          Оставить заявку
        </button>
      </div>
    </div>
  </div>

  <!-- FOOTER  -->

  <div class="footer">
    <div class="footer__links">
      <a href="#"><img src="../assets/img/footer1.svg" class="footer__ico" alt="" style="width: 4.79vw" /></a>
      <a href="#"><img src="../assets/img/footer2.svg" class="footer__ico" alt="" style="width: 4.79vw" /></a>
      <a href="#"><img src="../assets/img/footer3.svg" class="footer__ico" alt="" style="width: 4.79vw" /></a>
    </div>
    <p class="copyright">Все права защищены</p>
  </div>
  <doctors-modal></doctors-modal>
  <how-modal></how-modal>
</template>
<script>
import IMask from 'imask';
import AboutModal from "../../../medical/src/components/AboutModal.vue";
import VueCarousel from "@chenfengyuan/vue-carousel";
import CallForm from "../../../medical/src/components/CallForm.vue";
import HowModal from './HowModal.vue';
import DoctorsModal from './DoctorsModal.vue';
import CallBackModal from './CallBackModal.vue';
import { doc } from '@firebase/firestore';
// import navbar from "./navbar.vue"

export default {
  name: "App",
  data() {
    return {
      menuOpen: true,
      name: "",
      phone: "",
      email: "",
      showModal: false,
      showModal2: false,
      showModal3: false,
      showForm: false,
    };
  },
  components: {
    AboutModal,
    VueCarousel,
    CallForm,
    HowModal,
    DoctorsModal,
    CallBackModal
    // navbar
  },

  methods: {
    closeSideBar() {
      let chckbox = document.getElementById('menu__toggle')
      if (chckbox.checked == true) {
        chckbox.checked = false
      }
    },






    validation() {
      let name = document.getElementById('name')
      let phone = document.getElementById('phone-mask')
      let email = document.getElementById('email')
      let chckbox = document.getElementById('privacy')
      let text = document.getElementById('privacy__text')

      if (name.value.length <= 0) {
        name.classList.add('error')
      }
      else {
        name.classList.remove('error')
      }


      if (phone.value.length <= 0) {
        phone.classList.add('error')
      }
      else {
        phone.classList.remove('error')
      }


      if (email.value.length <= 0) {
        email.classList.add('error')
      }
      else {
        email.classList.remove('error')
      }
      if (chckbox.checked == false) {
        text.classList.add('error__text')
      }
      else {
        text.classList.remove('error__text')
        this.createPerson()
        $('#callModal').modal('hide');
      }
    },






    async createPerson() {
      const response = await fetch(
        "https://mkionvue-default-rtdb.europe-west1.firebasedatabase.app/people.json",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: this.name,
            Phone: this.phone,
            Email: this.email,
          }),
        }
      );
      Swal.fire({
        icon: 'success',
        title: 'Успех!',
        text: 'Ваша заявка успешно отправлена',
      })

      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
  mounted() {
    var element = document.getElementById('phone-mask');
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    var mask = IMask(element, maskOptions);
  }
};

</script>
<style scoped>
.error__text {
  color: red;
}

.error {
  border-bottom: 1px solid red;
}

.phone__src:hover {
  color: #000;
}

.phone__src {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.82);
}

.galery__slider {
  width: 45.05vw;
  margin-left: 14.06vw;
}

.vue-carousel__control {
  background-color: #38b97f !important;
  width: 3.8vw !important;
  height: 3.85vw !important;
}

.vue-carousel__control--next:before {
  border-right-width: 3px !important;
  border-top-width: 3px !important;
}

.vue-carousel__control--prev:before {
  border-right-width: 3px !important;
  border-top-width: 3px !important;
}
</style>