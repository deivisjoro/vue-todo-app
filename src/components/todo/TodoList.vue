<script>

export default {
    name: 'TodoList',
    props: {
        todos: Array
    },
    components: {
        
    },
    data(){
        return {

        }
    },
    methods:{

        marcar(e){            
            if(e.target.classList.contains('destroy')) return;
            
            const element = e.target.closest('[data-id]');
            const id = Number(element.getAttribute('data-id'));

            this.$emit('marcarRadio', id);
        }
        
    },
    emits: ['eliminar', 'marcarRadio']
}
</script>
<template>
    <li v-for="task in todos" 
        :key="task.id" 
        :data-id="task.id" 
        :class="{'completed': task.done}"
        @click="marcar">
        <div class="view">
            <input class="toggle" type="checkbox" :checked="task.done">
            <label>{{ task.description }}</label>
            <button class="destroy" @click="$emit('eliminar', task.id)"></button>
        </div>
        <input class="edit" :value="task.description">
    </li>
</template>

<style scoped>

</style>