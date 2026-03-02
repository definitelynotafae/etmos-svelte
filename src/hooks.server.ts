import { redirect, type Handle } from '@sveltejs/kit';
import { building } from '$app/environment';
import { auth } from '$lib/server/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';

const handleBetterAuth: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({ headers: event.request.headers });
	const protectedRoutes = ['/gm', '/player'];
	const isProtectedRoute = protectedRoutes.some(path => event.url.pathname.startsWith(path));

	if (session) {
		event.locals.session = session.session;
		event.locals.user = session.user;
	}

	if(event.url.pathname.startsWith('/login') && session){
		throw redirect(303, '/')
	}
	if(isProtectedRoute && !session){
		throw redirect(303, '/login')
	}

	return svelteKitHandler({ event, resolve, auth, building });
};

export const handle: Handle = handleBetterAuth;
