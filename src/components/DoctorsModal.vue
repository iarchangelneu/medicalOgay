<template>
    <div class="modal fade" id="doctorsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <p class="about__what">
                            Специалисты
                        </p>
                    </div>
                    <div class="d-flex justify-content-between doctors__overflow">
                        <div>
                            <div class="benefits__img">
                                <img src="@/assets/img/ogay.jpg" alt="" class="doctor__img">
                            </div>
                            <p class="doctor__desc mt-2">
                                Огай Юрий Лаврентьевич
                            </p>
                            <ul style="margin-left:90px;">
                                <li>59 лет</li>
                                <li>Врач восточной медицины </li>
                                <li>Иглотерапевт, кинезиолог</li>
                                <li>Общий врачебный стаж 34 года</li>
                                <li>Китайская медицина 22 года</li>
                                <li>Тяньцзиньский институт китайской медицины.</li>
                                <li>Специализации по ГТС терапии (глобальная терапия стопы)</li>
                                <li>ФДМ терапии</li>
                                <li>НК Акупунктура</li>
                                <li>Специалист по лечению заболеваний позвоночника и суставов.</li>
                                <li>Заболевания периферической и центральной нервной системы.</li>
                            </ul>
                        </div>
                        <div>
                            <div class="benefits__img">
                                <img src="@/assets/img/andrew.jpg" alt="" class="doctor__img2">
                            </div>

                            <p class="doctor__desc mt-2">
                                Сапов Андрей Владимирович
                            </p>
                            <ul style="margin-left:90px;">
                                <li>32 года</li>
                                <li>Классический массаж </li>
                                <li>Лечебный</li>
                                <li>Спортивный</li>
                                <li>Точечный Soft tish Rellaks</li>
                                <li>Антицеллюлитный</li>
                                <li>Массаж лица Классический</li>
                                <li>Массаж лица Жаке</li>
                                <li>Массаж лица пластический</li>
                                <li>массаж лица Шиацу</li>
                                <li> Биолифтинг лица</li>
                                <li>Массаж лица Кабидо</li>
                                <li> Гуаша</li>
                                <li>Юмейхо</li>
                                <li>Баночный массаж лица</li>
                                <li> Бамбуковый массаж лица и тела</li>
                                <li>Медовый</li>
                                <li>Мисциральный</li>
                                <li>ГТС</li>
                                <li>Детский массаж</li>
                                <li>Лимфадренажный массаж</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
ul li {
    font-weight: 300;
    font-size: 18px;
}

/* 
.doctors__overflow::-webkit-scrollbar {
    width: 0;
} */

.doctors__overflow {
    margin-right: -74px;
    height: 400px;
    overflow: auto;
}

.modal-body {
    padding-right: 74px;
}

.doctor__desc {
    margin-left: 100px;
    font-weight: 300;
    font-size: 26px;
}

.doctor__img2 {
    width: 119px;
    margin-left: -10px;
    margin-top: -10px;
}

.doctor__img {
    width: 119px;
    margin-left: -15px;
}

.benefits__img {
    border-radius: 100px;
    width: 94px;
    height: 99px;
    overflow: hidden;
}

.benefits__p {
    font-weight: 300;
    font-size: 18px;
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
</style>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>