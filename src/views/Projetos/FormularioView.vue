<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label class="label" for="nomeProjeto">Nome do Projeto</label>
                <input type="text" class="input" v-model="nomeProjeto" id="nomeProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>

    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ALTERA_PROJETO, ADICIONA_PROJETO } from "@/store/tipoMutation";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import useNotificador from "@/hooks/notificador";
export default defineComponent({
    name: 'FormularioView',
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeProjeto = projeto?.nome || ''
        }
    },
    data() {
        return {
            nomeProjeto: '',
        }
    },
    methods: {
        salvar() {
            if (this.id) {
                // EDIÇÃO
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeProjeto
                })

            } else {
                // ADIÇÃO
                this.store.commit(ADICIONA_PROJETO, this.nomeProjeto)
            }
            this.nomeProjeto = ''
            this.notificar(TipoNotificacao.SUCESSO, 'Excelente', 'O projeto foi cadastrado com sucesso!')
            this.$router.push('/projetos')
        },
    },
    setup() {
        const store = useStore()
        const { notificar } = useNotificador()
        return {
            store,
            notificar
        }
    }
})
</script>

