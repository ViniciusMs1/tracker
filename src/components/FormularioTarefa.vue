<template>
    <div class='box formulario'>
        <div class='columns'>
            <div class='column is-8' role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input v-model="descricao" class='input' placeholder="Qual tarefa você deseja iniciar?" type="text">
            </div>
            <div class='column'>
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"></Temporizador>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Temporizador from './TemporizadorTarefa.vue'
export default defineComponent({
    name: 'FormularioTarefa',
    emits: ['aoSalvarTarefa'],
    components: {
        Temporizador
    },
    data(){
        return {
            descricao: ''
        }
    },
    methods:{
        finalizarTarefa(tempoDecorrido: number) : void{
            this.$emit('aoSalvarTarefa',{
                duracaoSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ''
        }
    }
})
</script>
<style>
    .formulario{
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }
</style>