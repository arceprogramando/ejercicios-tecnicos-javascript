import ManagerUsers from "./managers/managerUsers.js";

const manager = new ManagerUsers();

const env = async () => {
    let user = {
        nombre: 'Juan',
        apellido: 'Bida',
        edad: 42,
        curso: 'Backend'
    };

    let result = await manager.crearUsuario(user);
    console.log(result);
};

env();