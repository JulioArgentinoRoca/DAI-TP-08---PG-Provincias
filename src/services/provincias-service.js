import ProvinciasRepository from "../repositories/provincias-repository.js";

export default class ProvinciasService {
    constructor() {
        
        this.CurrentRepository = new ProvinciasRepository();
    }

    getAllAsync = async () => {
        
        const returnArray = await this.CurrentRepository.getAllAsync();
        return returnArray;
    }

    
    getByIdAsync = async (id) => {
         const returnEntity = await this.CurrentRepository.getByIdAsync(id);
        return returnEntity;
    }

    createAsync = async (entity) => {
        
        const rowsAffected = await this.CurrentRepository.createAsync(entity);
        return rowsAffected;
    }

    updateAsync = async (entity) => {
        const rowsAffected = await this.CurrentRepository.updateAsync(entity);
        return rowsAffected;
    }
   
    deleteByIdAsync = async (id) => {
         const rowsAffected = await this.CurrentRepository.deleteByIdAsync(id);
        return rowsAffected;
    }
 
 
}