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
        if(entity == null){throw new Error("Ninguna data fue enviada. ERRORRRRRR :P")}
        validateFields(["name", "full_name", "latitude", "longitude", "display_order"], entity)
        if(entity.name.length < 3){throw new Error("El nombre debe medir 3 letras por lo menos")}
        
        const rowsAffected = await this.CurrentRepository.createAsync(entity);
        return rowsAffected;
    }

    updateAsync = async (entity) => {
        if(entity == null){throw new Error("Ninguna data fue enviada. ERRORRRRRR :P")}
        if(entity.name != undefined && entity.name.length < 3){throw new Error("El nombre debe medir 3 letras por lo menos")}

        const rowsAffected = await this.CurrentRepository.updateAsync(entity);
        return rowsAffected;
    }
   
    deleteByIdAsync = async (id) => {
         const rowsAffected = await this.CurrentRepository.deleteByIdAsync(id);
        return rowsAffected;
    }
 
 
}


const validateFields = (requiredFields, object) => {
    
    for (const field of requiredFields) {
        if (!object[field]) {
            throw new Error(`\"${field}\" no fue incluido en la peticion :S`);
        }
    }

    return true
}