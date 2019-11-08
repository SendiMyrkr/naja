import './polyfills';

import {HttpError, Naja} from './Naja';
import {AbortExtension} from './extensions/AbortExtension';
import {UniqueExtension} from './extensions/UniqueExtension';


const naja = new Naja();
naja.registerExtension(AbortExtension);
naja.registerExtension(UniqueExtension);

export {HttpError, Naja};
export default naja;
