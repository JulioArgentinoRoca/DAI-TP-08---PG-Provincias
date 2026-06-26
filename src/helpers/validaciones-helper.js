import 'dotenv/config'

import fs from 'fs/promises';


class LogHelper {

    constructor() {

        this.filePath = /**process.env.LOG_FILE_PATH */ "C:/Users/49008593/Desktop/loghelper.txt";

        this.fileName = /**process.env.LOG_FILE_NAME  */ "not used";

        this.logToFileEnabled = /**process.env.LOG_TO_FILE_ENABLED.toLowerCase() === 'true' */ true;

        this.logToConsoleEnabled = /**process.env.LOG_TO_CONSOLE_ENABLED.toLowerCase() === 'true' */ true;

    }


    /**

     * Este método almacena en un archivo de texto y/o por muestra consola información del Error.

     * @param {*} errorObject

     */

    logError = async (errorObject) => {

        try {    
            if(this.logToFileEnabled){await fs.writeFile(this.filePath, JSON.stringify(errorObject), 'utf8');}
            if(this.logToConsoleEnabled){console.log(errorObject)}

        } catch (err) {
            console.error('Error writing files:', err);
        }


    }


}


export default new LogHelper();