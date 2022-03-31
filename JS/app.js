console.log('ciaoooo')

const app = new Vue({
    el: '#app',

    data: {
        arrayDischi: [],
    },

    methods: {
        fetchData: function(){
            // Faccio una chiamata al mio file server.php che contiente l'array modificato in un file json 
            axios.get('./server.php')
                .then( res => {
                    // console.log(res.data.response);
                    this.arrayDischi = res.data.response;
                    // console.log(this.arrayDischi);
            })
        }
    },

    mounted() {
        this.fetchData();
    }
}); 