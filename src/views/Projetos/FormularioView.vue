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
import { TipoNotificacao } from "@/interfaces/INotificacao";
import useNotificador from "@/hooks/notificador";
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from "@/store/tipoAcoes";
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
                this.store.dispatch(ALTERAR_PROJETO, {
                    id: this.id,
                    nome: this.nomeProjeto
                }).then(() => { this.lidarSucesso() })

            } else {
                // ADIÇÃO
                this.store.dispatch(CADASTRAR_PROJETO, this.nomeProjeto)
                    .then(() => {
                        this.lidarSucesso()
                    })
            }

        },
        lidarSucesso() {
            this.nomeProjeto = ''
            this.notificar(TipoNotificacao.SUCESSO, 'Excelente', 'O projeto foi cadastrado com sucesso!')
            this.$router.push('/projetos')
        }
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

