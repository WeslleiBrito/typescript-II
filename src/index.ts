/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

import { TAdminAccount, TNormalAccount, TPerson, TUserAdmin, USER_ROLES } from "./types";

const userAdmin: TPerson & TAdminAccount = {
    id: 2,
    name: "Wesllei",
    email: "wesllei@brito",
    password: "123senha",
    account: "003642",
    permission: USER_ROLES.ADMIN
}
const userAdmin_2: TPerson & TAdminAccount = {
    id: 6,
    name: "Santos",
    email: "santos@brito",
    password: "santosSenha",
    account: "0036752",
    permission: USER_ROLES.ADMIN
}



const userNormal: TPerson & TNormalAccount = {
    id: 5,
    name: "Lincoln",
    email: "lincoln@lincoln",
    password: 'minhasenha',
    account: '0352398',
    permission: USER_ROLES.NORMAL
}

const usersAdmin: TUserAdmin[] = [
    {
        id: 11,
        name: "Brito",
        email: "brito@brito",
        password: "brito123",
        account: "230243",
        permission: USER_ROLES.ADMIN
    }
]

usersAdmin.push(userAdmin)











/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 
