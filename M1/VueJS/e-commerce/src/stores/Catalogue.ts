import {defineStore} from "pinia";
import {CatalogueInterface} from "../interfaces/Catalogue";

export const useCatalogueStore = defineStore('catalogue', {
    state: (): CatalogueInterface => {
        const catalogue: CatalogueInterface | Array<CatalogueInterface> = {
            id: 0,
            nom: "",
            descritpion: "",
            image: "",
            status: false
        }
        return catalogue
    },
    getters:{},
    actions:{}
})