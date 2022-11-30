import { defineStore } from "pinia";
import { faker } from '@faker-js/faker';

export const useUserStore = defineStore("userStore", {
    state : () =>{
        return {
            currentUser : {},
            users : []
        }
    },

    getters: {
        activeAccoutns : function (){
            const result = this.users.filter(tache => !tache.status)

            return result
        }
    },
    actions: {
        add : function(data){
            this.users = [...this.users, {...data, id: faker.datatype.uuid(), isLoggedIn: false}]
        },
        delete : function (id) {
            const deleteUser = this.users.filter(tache => tache.id !== id)
            this.users = deleteUser
        },

        login : function ({ email, password }) {
            console.log(email, password, "email, password")
            const user = this.users.find(user => {
                const emailMatch = user.email === email
                const passwordMatch = user.password === password

                if(emailMatch && passwordMatch){
                    console.log('User is logged in')
                    return user
                }
                return false
            })

            if(user){
                this.currentUser = {...user, isLoggedIn: true }
                return true
            }
            return false
        },

    },
})