import {CAR_DATA} from "./_FAKE_DATA_API";


// Simulez un appel API
export const FETCH_SIMULATING_API = (data = CAR_DATA,time = 3000) => {
    return new Promise((resolve,reject) => {
        // Simulation de la promesse
        setTimeout(()=> {
            resolve(data)
        },time)
        // Rejet de la promesse.
        if(!data){
            reject("Aucun donnee")
        }
    })
}