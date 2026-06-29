import 'dotenv/config'

import fs from 'fs/promises';


class LogHelper {

    constructor() {

        this.filePath = process.env.LOG_FILE_PATH

        this.fileName = process.env.LOG_FILE_NAME
        
        this.logToFileEnabled = process.env.LOG_TO_FILE_ENABLED.toLowerCase() === 'true'

        this.logToConsoleEnabled = process.env.LOG_TO_CONSOLE_ENABLED.toLowerCase() === 'true'

    }


    /**

     * Este método almacena en un archivo de texto y/o por muestra consola información del Error.

     * @param {*} errorObject

     */

    logError = async (errorObject) => {

        try {    
            if(this.logToFileEnabled){
                const data = await fs.readFile(this.filePath, 'utf8');
                await fs.writeFile(this.filePath, data + "\n \n" + JSON.stringify(errorObject), 'utf8');
            }
            if(this.logToConsoleEnabled){console.log(errorObject)}

        } catch (err) {
            console.error('Error writing files:', err);
        }


    }


}


export default new LogHelper();