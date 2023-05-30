
export enum USER_ROLES {
    ADMIN =  "admin",
    NORMAL = "normal"
}

export type TPerson = {
    id: number | string,
    name: string,
    email: string,
    password: string;
}

export type TAdminAccount = {
    account: string,
    permission: USER_ROLES.ADMIN
}

export type TNormalAccount = {
    account: string,
    permission: USER_ROLES.NORMAL
}

export enum CORES {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}


export type TPessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

export type TPost = {
    autor: string,
    texto: string
}

export type TUserAdmin = TPerson & TAdminAccount
export type TUserNormal = TPerson & TNormalAccount