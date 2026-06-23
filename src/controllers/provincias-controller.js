import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProvinciasService from '../services/provincias-service.js';
import Provincia from '../entities/Provincias.js';

const router = Router();
const currentService = new ProvinciasService();


router.get('', async (req, res) => {
    try {
        
        const returnArray = await currentService.getAllAsync();
        if (returnArray != null){
            res.status(StatusCodes.OK).json(returnArray);
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error interno.`);
        }
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error: ${error.message}`);
    }
});

export default router;