import { defineStore } from "pinia";
import { faker } from '@faker-js/faker';

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

    getters: {
        encours : function (){
            const result = this.taches.filter(tache => !tache.status)

            return result
        }
    },
    actions: {
        add : function(data){
            this.taches = [...this.taches, {...data, id: faker.datatype.uuid()}]
        },
        delete : function (id) {
            const deleteItem = this.taches.filter(tache => tache.id !== id)
            this.taches = deleteItem
            console.log(`Task with id ${id} has been deleted`)
        },
    },
})