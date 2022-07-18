<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <p class="about__what">
              Что мы лечим
            </p>
          </div>
          <div class="d-flex">
            <img src="@/assets/img/ben3.svg" style="width:94.003px;height: 99px;" alt="" class="">
            <div class="benefits__overflow">
              <p v-for="(ben, i) in benefits1" :key="i" class="benefits__p">{{ ben.text }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.benefits__p {
  font-weight: 300;
  font-size: 18px;
}

.benefits__overflow {
  height: 400px;
  overflow: auto;
  margin-left: 85px;
}

.modal-header,
.modal-footer {
  border-bottom: 0;
  border-top: 0;
}

.modal-dialog {
  max-width: 1000px !important;
}

.modal-content {
  height: 551px;
}

.modal-body {
  padding: 0 0 55px 68px;
}
</style>
<script>
export default {
  data() {
    return {
      benefits1: [
        {
          text: 'Заболевания опорно-двигательного аппарата'
        },
        {
          text: 'Артриты и артрозы мелких и крупных суставов'
        },
        {
          text: 'Плечелопаточные периартриты (синдром замороженого плеча)'
        },
        {
          text: 'Тендинопатии (пяточные шпоры)'
        },
        {
          text: 'Эпикондилиты'
        },
        {
          text: 'Ушибы и контузии, вывихи и подвывихи суставов'
        },
        {
          text: 'Миофасциальный болевой синдром'
        },
        {
          text: 'Заболевания позвоночника, протрузии и грыжи дисков позвоночника'
        },
        {
          text: 'Люмбалгии, ишиасы, радикулиты'
        },
        {
          text: 'Остеохондрозы различных участков позвоночника'
        },
        {
          text: 'Различные патологии стоп и кисти'
        },
        {
          text: 'Заболевания  желудочно-кишечного тракта функционального характера'
        },
        {
          text: 'Дистопия внутренних органов, птозы'
        },
        {
          text: 'Невриты и невралгии различной локализации'
        },
        {
          text: 'Парезы и параличи центрального и периферического генеза (инсульты)'
        },
        {
          text: 'Неврозы, нарушения сна, вегето-сосудистая дистония'
        },
        {
          text: 'Лечение и реабилитация функций конечностей'
        },
        {
          text: 'Табакокурение'
        },
        {
          text: 'Лимфостазы, избыточный вес'
        },
        {
          text: 'Головные боли вызванные поражением ветра, холодом и сыростью, нарушением кровообращения, мигрени '
        },
        {
          text: 'Остеохондрозы различных участков позвоночника'
        },
        {
          text: 'Некоторые нарушения слуха и обоняния'
        },
        {
          text: 'Ранние нарушения остроты зрения, стабилизация внутриглазного давления'
        },
      ]
    }
  }
}
</script>