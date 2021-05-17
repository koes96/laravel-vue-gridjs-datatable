<template>
    <grid 
    :cols="cols"
    :search="search"
    :sort="sort"
    :server="server"
    :pagination="pagination"
    ></grid>
</template>

<script>
import Grid from 'gridjs-vue'
import { h } from "gridjs";
export default {
    name: 'Cars',
    components: {
        Grid
    },
    data() {
        return {
            cols: [
                {
                    name: 'Make',
                }, 
                {
                    name : 'Model',
                }, 
                {
                    name: 'Color', 
                }, 
                {
                    name:'Action',
                    formatter: (cell, row) => {
                        return h('button', {
                            className: 'py-2 mb-4 px-4 border rounded-md text-black bg-blue-600', 
                            onclick: () => alert(`Editing "${row.cells[0].data}""${row.cells[1].data}"`)
                        }, 'Edit');
                    }
                },
                ],
            server: {
                //url: 'http://swapi.dev/api/films/',
                url: 'http://127.0.0.1:8000/blogs/',
                then: data => data.results.map(data => [data.title, data.url, data.category])
            },
            search: true,
            sort:true,
            pagination: true
        }
    }
}
</script>
