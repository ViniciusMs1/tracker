import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import ProjetosView from '../views/ProjetosView.vue'
import Formulario from '../views/Projetos/FormularioView.vue'
import ListaView from '../views/Projetos/ListaView.vue'

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tarefas
}, {
    path: '/projetos',
    component: ProjetosView,
    children: [
        {
            path: '',
            name: 'Projetos',
            component: ListaView,
        }, {
            path: 'novo',
            name: 'Novo Projeto',
            component: Formulario,
        }, {
            path: ':id',
            name: 'Editar Projeto',
            component: Formulario,
            props: true
        }
    ]
}]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})
export default roteador;