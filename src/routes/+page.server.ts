import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/auth';


export const load = (async (event) => {
    if(!event.locals.user){
        throw redirect(303, '/login')
    }
    return {user: event.locals.user};
}) satisfies PageServerLoad;

export const actions: Actions = {
    signOut: async (event) => {
        await auth.api.signOut({
            headers: event.request.headers
        });
        return redirect(302, '/login');
    },
    gmRedirect: async () =>{
        return redirect(302, '/gm') 
    }
};