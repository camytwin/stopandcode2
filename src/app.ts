import {config} from "dotenv";
config();

import * as orm from "./orm";

const mainOrm = async () => {
    //console.log(await orm.insertPost("Le spiagge più belle d'Europa", "Spiagge da sogno per le vacanze estive"));
    //console.log(await orm.getPosts());
    //console.log(await orm.updatePosts("66e7647ac40a1f0243a1a15d", false));
    console.log(await orm.deletePost("66e7647ac40a1f0243a1a15d"));
    
}


mainOrm();