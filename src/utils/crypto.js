// ***** MOCK PROVISSORIO DA SOSTITUIRE CON API ***** //
import { cryptoJson } from "@/pages/api/crypto";

// return all cripto
export function getAllCrypto() {
    return cryptoJson[0];
}
  
//return all slugs
export function getAllSlugs() {
    let id = [];
    getAllPosts().map((p) => {
        id.push(`/crypto/${p.id}`);
    });
  
    return ids;
}