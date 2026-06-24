import pkg from 'pg'
import config from './../configs/db-config.js';     

const { Pool }  = pkg;

export default class ProvinciasRepository {
    constructor() {
        this.DBPool     = null;
    }

    getDBPool = () => {
        if (this.DBPool == null){
            this.DBPool = new Pool(config);
        }
        return this.DBPool;
    }

    getAllAsync = async () => {
        
        let returnArray = null;
        
        try {
            const sql = `SELECT * FROM provincia`;
            const resultPg = await this.getDBPool().query(sql);
            returnArray = resultPg.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    
    
    getByIdAsync = async (id) => {
         
        let returnEntity = null;
        try {
            const sql = `SELECT * FROM provincia WHERE id=$1`;
            const values = [id];
            const resultPg = await this.getDBPool().query(sql, values);
            if (resultPg.rows.length > 0){
                returnEntity = resultPg.rows[0];
            }
        } catch (error) {
            LogHelper.logError(error);
        } 
        return returnEntity;
    }

    createAsync = async (entity) => {
        
        let newId = 0;

        try {
            const sql = ` INSERT INTO provincia (
                            name, full_name, latitude, longitude, display_order
                        ) VALUES (
                            $1, 
                            $2, 
                            $3, 
                            $4, 
                            $5
                        ) RETURNING id`;
            const values =  [   entity?.name              ?? '', 
                                entity?.full_name            ?? '', 
                                entity?.latitude            ?? 0, 
                                entity?.longitude    ?? null, 
                                entity?.display_order       ?? 0
                            ];
            const resultPg = await this.getDBPool().query(sql, values);
            newId = resultPg.rows[0].id;
        } catch (error) {
            console.log(error);
        }
        return newId;
    }

    updateAsync = async (entity) => {
         let rowsAffected = 0;
        let id = entity.id;
        
        try {
            const previousEntity = await this.getByIdAsync(id);
            if (previousEntity== null) return 0;
            const sql = `UPDATE provincia SET 
                            name=$2, full_name=$3, latitude=$4, longitude=$5, display_order=$6
                        WHERE id = $1`;
                            
            const values =  [   id,     // $1
                                entity?.name              ?? previousEntity?.name, 
                                entity?.full_name            ?? previousEntity?.full_name, 
                                entity?.latitude            ?? previousEntity?.latitude, 
                                entity?.longitude    ?? previousEntity?.longitude, 
                                entity?.display_order       ?? previousEntity?.display_order
                            ];
            const resultPg = await this.getDBPool().query(sql, values);

            rowsAffected = resultPg.rowCount;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    /*
    deleteByIdAsync = async (id) => {
        console.log(`AlumnosRepository.deleteByIdAsync(${id})`);
        let rowsAffected = 0;
        
        try {
            const sql = `DELETE from alumnos WHERE id=$1`;
            const values = [id];
            const resultPg = await this.getDBPool().query(sql, values);
            rowsAffected = resultPg.rowCount;
        } catch (error) {
            LogHelper.logError(error);
        }
        return rowsAffected;
    }
    */
}
