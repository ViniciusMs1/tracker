<template>
    <FormularioTarefa @aoSalvarTarefa="salvarTarefa"></FormularioTarefa>
    <div class="lista">
        <ListaTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"></ListaTarefa>
        <BoxTarefa v-if="verificarListaVazia">Você não está muito produtivo hoje =(</BoxTarefa>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTarefa from '../components/FormularioTarefa.vue';
import ListaTarefa from '../components/ListaTarefa.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxTarefa from '../components/BoxTarefa.vue';
export default defineComponent({
    name: "App",
    components: { FormularioTarefa, ListaTarefa, BoxTarefa },
    data() {
        return {
            tarefas: [] as ITarefa[],
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        },
    },
    computed: {
        verificarListaVazia(): boolean {
            return this.tarefas.length === 0
        }
    }
});
</script>

<style>
</style>
