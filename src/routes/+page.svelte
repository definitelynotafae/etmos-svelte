<script lang='ts'>
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import type { PageServerData } from "./$types";


    let {data}: {data:PageServerData} = $props()
</script>

<div class="flex min-h-screen items-center justify-center bg-surface-50-950 p-4">
    <div class="card w-full max-w-md bg-surface-100-900 p-8 shadow-xl">
        <header class="mb-4 text-center">
			<h1 class="h2 font-bold">Bem Vinde 
                {data.user.name.toString().charAt(0).toUpperCase() + 
                data.user.name.toString().slice(1)}
            </h1>
			<p class="text-surface-600-400 mt-2">Escolha qual painel você deseja acessar</p>
		</header>
        <div class="flex gap-3">
                <a href="/player" class="w-full">
                    <button class="btn preset-filled-primary-500 w-full py-3 font-semibold">
                        Sou Player
                    </button>
                </a>
                <a href="/gm" class="w-full">
                    <button class="btn preset-tonal-surface w-full py-3">
                        Sou Mestre
                    </button>
                </a>
		</div>
        <footer class="mt-4 text-center">
            <p class="text-surface-600-400 mt-2 mb-4">Caso queira desconectar</p>
            <form action="?/signOut" method="post" use:enhance>
                <button class="btn preset-tonal-surface w-full py-3">
					Logout
				</button>
            </form>
        </footer>
    </div>
</div>