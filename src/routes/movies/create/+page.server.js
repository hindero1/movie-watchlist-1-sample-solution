import db from "$lib/db";

export const actions = {
    create: async ( {request} ) => {
        let data = await request.formData();

        let movie = {
            title: data.get("title"),
            year: parseInt(data.get("year")),
            length: data.get("length")

        }
        await db.createMovie(movie);

        return {success: true};
    }

}