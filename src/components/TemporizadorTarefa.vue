<template>
  <section class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroTarefa :tempoSegundos="tempoSegundos"/>
    <ButtonTarefa @clicado="iniciar" icone="fas fa-play" texto="Play" :desabilitado="cronometroRodando" />
    <ButtonTarefa @clicado="finalizar" icone="fas fa-stop" texto="Stop" :desabilitado="!cronometroRodando" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CronometroTarefa from './CronometroTarefa.vue'
import ButtonTarefa from './ButtonTarefa.vue'
export default defineComponent({
    name: 'TemporizadorTarefa',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        CronometroTarefa,
        ButtonTarefa
    },
    data() {
        return {
            tempoSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
        }
    },

    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoSegundos++
            }, 1000);
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado',this.tempoSegundos)
            this.tempoSegundos = 0
        }
    }
})
</script>