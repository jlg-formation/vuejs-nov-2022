/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faRotateRight,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faRotateRight);
library.add(faPlus);
library.add(faTrashCan);
