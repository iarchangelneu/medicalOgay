<template>
    <div class="modal fade" id="howModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <p class="about__what">
                            Как мы лечим
                        </p>
                    </div>
                    <div class="d-flex">
                        <img src="@/assets/img/ben3.svg" style="width:94.003px;height: 99px;" alt="" class="">
                        <div class="benefits__overflow">
                            <h5 style="font-weight:600;margin-right: 92px;">К основным методам лечения относятся методы
                                восточной медицины:
                            </h5>
                            <p v-for="(ben, i) in benefits1" :key="i" class="benefits__p">{{ ben.text }}</p>

                            <h5 style="font-weight:600">Различные виды массажей:
                            </h5>
                            <p v-for="(ben2, i) in benefits2" :key="i" class="benefits__p">{{ ben2.text }}</p>
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
                    text: 'иглорефлексотерапия,'
                },
                {
                    text: 'моксатерапия ( прижигание и прогревание полынными сигарами),'
                },
                {
                    text: 'банки,'
                },
                {
                    text: ' гуаша (скребковый массаж),'
                },
                {
                    text: 'электропунктура,'
                },
                {
                    text: 'пухан (кровопускающие банки, капиллярное кровопускание)'
                },
            ],
            benefits2: [
                {
                    text: 'классический массаж'
                },
                {
                    text: 'зональный,'
                },
                {
                    text: 'юмейхотерапия,'
                },
                {
                    text: 'висцеральный массаж,'
                },
                {
                    text: 'мануальная терапия,'
                },
                {
                    text: 'бамбуковый массаж,'
                },
                {
                    text: 'медовый и др. виды.'
                },
                {
                    text: 'баночный массаж,'
                },
                {
                    text: 'ГТС терапия – глобальная терапия стопы.'
                },
                {
                    text: 'Используется при локальной патологии стопы, вывихи, '
                },
                {
                    text: 'подвывихи, плоскостопие, артрозы стоп.'
                },
                {
                    text: 'Физиотерапия, лечебная гимнастика'
                },
            ]
        }
    }
}
</script>