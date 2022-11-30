import { defineStore } from "pinia";
import { faker } from '@faker-js/faker';
import Taches from "../class/Taches.js";

export const useTodoStore = defineStore("todoStore", {
    state : () =>{
        return {
            taches : [
                {id :1, nom : "Apprendre JS", status : true},
                {id :2, nom : "Apprendre Angular", status: false},
                {id :3, nom : "Créer un e-commerce", status: false}
            ]
        }
    },

    getters: {},
    actions: {
        tachesInit : async function(){
            const taches = await Taches.getTaches()
            this.taches = taches
            return this.taches
        },
        add : async function(data){
            const newTask = await Taches.addTache(data)
            this.taches = [...this.taches, {...newTask}]
        },
        update : async function(id,data){
            const updateData = await Taches.updateTache(id,data)
            this.taches = await Taches.getTaches()
        },
        delete : async function (id) {
            const deleteItem = await Taches.deleteTache(id)
            this.taches = deleteItem
            console.log(`Task with id ${id} has been deleted`)
        },
    },
})