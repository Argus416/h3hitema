import { defineStore } from "pinia";
import { faker } from '@faker-js/faker';
import Taches from "../class/Taches.js";

export const useTodoStore = defineStore("todoStore", {
    state : () =>{
        return {
            tachesInit : [
                {id :1, nom : "Apprendre JS", status : true},
                {id :2, nom : "Apprendre Angular", status: false},
                {id :3, nom : "Créer un e-commerce", status: false}
            ]
        }
    },

    getters: {
        taches :async function (){
            const taches = await Taches.getTaches()
            this.tachesInit = taches
            return this.tachesInit
        },
       // encours : function (){
         //   const result = this.taches.filter(tache => !tache.status)

           // return result
        //}
    },
    actions: {
        add : async function(data){
            const newTask = await Taches.addTache(data)
            this.tachesInit = [...this.tachesInit, {...newTask}]
        },
        delete : async function (id) {
            const deleteItem = await Taches.deleteTache(id)
            this.tachesInit = deleteItem
            console.log(`Task with id ${id} has been deleted`)
        },
    },
})