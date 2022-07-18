<template>
  <leads-list 
  :people="people" 
  @load="loadPeople"
  @remove="removePerson"
  ></leads-list>
</template>

<script>
import LeadsList from "../components/LeadsList.vue";
import axios from "axios";
export default {
  components: {
    LeadsList,
  },
  data() {
    return {
        people:[]
    };
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    async loadPeople() {
      try {
        const { data } = await axios.get(
          "https://mkionvue-default-rtdb.europe-west1.firebasedatabase.app/people.json"
        );
        if (!data) {
          throw new Error("Список людей пуст");
        }
        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
      } catch (e) {
        this.alert = {
          type: "danger",
          title: "Ошибка",
          text: e.message,
        };
      }
    },
    async removePerson(id) {
      try {
        const name = this.people.find((person) => person.id === id).firstName;
        await axios.delete(
          `https://mkionvue-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`
        );
        this.people = this.people.filter((person) => person.id !== id);
      } catch (e) {}
    },
  },
};
</script>

<style>
</style>