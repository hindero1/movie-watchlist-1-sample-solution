import db from "$lib/db";
import { redirect } from "@sveltejs/kit"; 

export async function load( {params} ) {
    console.log(params.movie_id);

    return {
        movie: await db.getMovie(params.movie_id)
        
    }
}

export const actions = {
    delete: async ( {request} ) => {
        const data = await request.formData();
        let id = data.get("id");
        db.deleteMovie(id);
        redirect(303, "/movies"); 
    }
}