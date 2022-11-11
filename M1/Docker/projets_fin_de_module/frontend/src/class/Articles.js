import axios from "axios";

const url = "http://127.0.0.1:8000";

class Articles {
    constructor() {}

    async getItems() {
        try {
            const items = await axios({
                method: "get",
                url: `${url}/items/`,
            });
            return items;
        } catch (e) {
            console.error("error fetching items", e);
        }
    }

    async getItem(id) {
        try {
            const items = await axios({
                method: "get",
                url: `${url}/item/${id}`,
            });
            return items;
        } catch (e) {
            console.error("error fetching item", e);
        }
    }
}

export const articles = new Articles();