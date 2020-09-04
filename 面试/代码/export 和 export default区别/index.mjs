import {a as A,b,c,d,e,abc} from "./export.mjs";
import af from "./export default.mjs";


console.log(A,b,c,d,e)

abc(1234)
af();

export {a,b} from "./export";