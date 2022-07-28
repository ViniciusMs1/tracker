<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"></BarraLateral>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTarefa @aoSalvarTarefa="salvarTarefa"></FormularioTarefa>
      <div class="lista">
        <ListaTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"></ListaTarefa>
        <BoxTarefa v-if="verificarListaVazia">Você não está muito produtivo hoje =(</BoxTarefa>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import ListaTarefa from './components/ListaTarefa.vue';
import ITarefa from './interfaces/ITarefa'
import BoxTarefa from './components/BoxTarefa.vue';
export default defineComponent({
  name: "App",
  components: { BarraLateral, FormularioTarefa, ListaTarefa, BoxTarefa },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  },
  computed: {
    verificarListaVazia(): boolean {
      return this.tarefas.length === 0
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
