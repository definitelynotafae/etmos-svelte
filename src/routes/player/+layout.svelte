<script lang="ts">
    import type { LayoutProps } from './$types';
    import {page} from '$app/state'
    import { Navigation } from '@skeletonlabs/skeleton-svelte'
    import {ChessQueen, BookOpen, ChessPawn, HouseIcon, DoorOpen} from '@lucide/svelte'
    import { enhance } from '$app/forms'
    const linksSidebar =[
        {label: 'Inicio', href: '/player', icon: HouseIcon},
        {label: 'Personagens', href: '/player/personagens', icon: ChessPawn},
        {label: 'Campanhas', href: '/player/campanhas', icon:BookOpen},
        
    ]
    let { data, children }: LayoutProps = $props();

    const activePage = (link: string) =>{
        if(page.url.pathname === link){
            return 'preset-tonal'
        }
        else{
            return ''
        }
    }
</script>

<div class="w-full min-h-screen grid grid-cols-[auto_1fr] border border-surface-200-800">
    <Navigation layout='rail' class='grid grid-rows-[auto_1fr_auto] gap-4'>
        <Navigation.Header>
            <Navigation.TriggerAnchor href='/' title='Voltar para o Inicio' aria-label='Voltar para o Inicio'>
                <HouseIcon class='size-6'/>
            </Navigation.TriggerAnchor>
        </Navigation.Header>

        <Navigation.Content>
            <Navigation.Menu>
                {#each linksSidebar as link}
                {@const Icon = link.icon}
                <Navigation.TriggerAnchor href={link.href} class={activePage(link.href)}>
                    <Icon class='size-4'/>
                    <Navigation.TriggerText>{link.label}</Navigation.TriggerText>
                </Navigation.TriggerAnchor>
                {/each}
            </Navigation.Menu>
        </Navigation.Content>

        <Navigation.Footer>
            <form action="/player?/signOut" method="post" use:enhance>
                <Navigation.Trigger type="submit" title='Logout' aria-label='Logout'>
                    <DoorOpen class='size-6'/>
                </Navigation.Trigger>
            </form>
        </Navigation.Footer>
    </Navigation>
    {@render children()}
</div>

