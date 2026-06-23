import ProvinciasRepository from "../repositories/provincias-repository.js";

export default class ProvinciasService {
    constructor() {
        console.log('Estoy en: MateriasService.constructor()');
        this.ProvinciasRepository = new ProvinciasRepository();
    }

    getAllAsync = async () => {
        
        const returnArray = await this.ProvinciasRepository.getAllAsync();
        return returnArray;
    }

    /*
    getByIdAsync = async (id) => {
        console.log(`MateriasService.getByIdAsync(${id})`);
        const returnEntity = await this.MateriasRepository.getByIdAsync(id);
        return returnEntity;
    }

    createAsync = async (entity) => {
        console.log(`MateriasService.createAsync(${JSON.stringify(entity)})`);
        const rowsAffected = await this.MateriasRepository.createAsync(entity);
        return rowsAffected;
    }

    updateAsync = async (entity) => {
        console.log(`MateriasService.updateAsync(${JSON.stringify(entity)})`);
        const rowsAffected = await this.MateriasRepository.updateAsync(entity);
        return rowsAffected;
    }
    
    deleteByIdAsync = async (id) => {
        console.log(`MateriasService.deleteByIdAsync(${id})`);
        const rowsAffected = await this.MateriasRepository.deleteByIdAsync(id);
        return rowsAffected;
    }

    
    getByIdAsync_PPT = async (id) => {
        console.log('Estoy en: MateriasService.getByIdAsync_PPT()');
        const returnEntity = await this.MateriasRepository.getByIdAsync_PPT(id);
        return returnEntity;
    }
    */
}