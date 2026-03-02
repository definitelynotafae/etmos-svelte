<script lang="ts">
    import type { PageProps } from './$types';
    import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-surface-50-950 p-4">
	<div class="card w-full max-w-md bg-surface-100-900 p-8 shadow-xl">
		<header class="mb-8 text-center">
			<h1 class="h2 font-bold">Bem Vinde!</h1>
			<p class="text-surface-600-400 mt-2">Entre na sua conta</p>
		</header>

		<form method="post" action="?/signInEmail" class="space-y-6" use:enhance>
			<label class="label">
				<span class="label-text font-medium">Email</span>
				<input
					type="email"
					name="email"
					class="input mt-1"
					placeholder="email@examplo.com"
					required
				/>
			</label>

			<label class="label">
				<span class="label-text font-medium">Senha</span>
				<input
					type="password"
					name="password"
					class="input mt-1"
					placeholder="••••••••"
					required
				/>
			</label>

			<label class="label">
				<span class="label-text font-medium text-surface-600-400">Nome de usuario (Apenas para cadastro)</span>
				<input
					name="name"
					class="input mt-1"
					placeholder="Maiqui Uasasqui"
				/>
			</label>

			{#if form?.message}
				<aside class="alert preset-filled-error-500 rounded-md p-3">
					<p>{form.message}</p>
				</aside>
			{/if}

			<div class="flex flex-col gap-3 pt-4">
				<button type="submit" class="btn preset-filled-primary-500 w-full py-3 font-semibold">
					Sign-in
				</button>
				<button formaction="?/signUpEmail" class="btn preset-tonal-surface w-full py-3">
					Sign-up
				</button>
			</div>
		</form>
	</div>
</div>
