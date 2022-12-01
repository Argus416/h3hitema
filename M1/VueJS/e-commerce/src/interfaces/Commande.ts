export enum CommandeStaus {
    traiter = "à traiter",
    livrer = "à finalié ",
    finale = "à finalié ",
}

export interface PanierInterface {
    id : String | Number
}

export interface CommandeInterface{
    id: String | Number,
    client: PanierInterface,
    panier: Array<any>
    status: CommandeStaus
}
