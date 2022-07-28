<template>
    <BoxTarefa>
        <div class='columns'>
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem Descrição' }}
            </div>
            <div class='column'>
                <CronometroTarefa :tempoSegundos="tarefa.duracaoSegundos"></CronometroTarefa>
            </div>
        </div>
    </BoxTarefa>
</template>


<script lang="ts">

import { defineComponent, PropType } from "vue"
import CronometroTarefa from "./CronometroTarefa.vue"
import ITarefa from '../interfaces/ITarefa'
import BoxTarefa from "./BoxTarefa.vue"
export default defineComponent({
    name: 'ListaTarefa',
    components: {
        CronometroTarefa,
        BoxTarefa
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }

})

</script>


<style scoped>

</style>