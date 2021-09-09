// @ts-ignore
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const getFingetprint = () =>
{
    return new Promise(async (resolve, reject) => {
        const fPromise = await FingerprintJS.load();
        const result = await fPromise.get();
        if (result && result.visitorId)
            resolve(result.visitorId);
        else
            reject();
    });
}

export default getFingetprint;