import {defineStore} from "pinia";
import {CatalogueInterface} from "../interfaces/Catalogue";
import Catalogue from "../class/Catalogue";

const useCatalogueStore = defineStore('catalogue', {
    state: (): CatalogueInterface => {
        const catalogue: Promise<CatalogueInterface | CatalogueInterface[] > | CatalogueInterface | Array<CatalogueInterface> = {
            id: 0,
            nom: "",
            descritpion: "",
            image: "",
            status: false
        }
        return catalogue
    },
    getters: {},
    actions: {
        initCatalogue: async function (): Promise<CatalogueInterface[] | undefined> {
            try {
                const catalogues = await Catalogue.getCatalogues();
                this.catalogue = catalogues
                return this.catalogue;
            } catch (err) {
                console.error("Error in Catalogue store, initCatalogue ", err)
            }
        },

        getCatalogue: async function (id: String | Number): Promise<CatalogueInterface[] | undefined> {
            try {
                const catalogue = await Catalogue.getCatalogue(id);
                return catalogue;
            } catch (err) {
                console.error("Error in Catalogue store, getCatalogue ", err)
            }
        },

        addCatalogue: async function (body: CatalogueInterface): Promise<String | undefined> {
            try {
                const newCatalogue = await Catalogue.addCatalogue(body);
                const catalogues : Promise<CatalogueInterface[] | undefined> = await this.initCatalogue()
                return "Catalogue has been added"
            } catch (err) {
                console.error("Error in Catalogue store, addCatalogue ", err)
            }
        },
    }
})


export default useCatalogueStore