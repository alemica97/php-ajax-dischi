const app = new Vue({
    el: '#app',

    data: {
        arrayDischi: [],
        selectedGenre: '',
    },

    methods: {
        fetchData: function(){
            // Faccio una chiamata al mio file server.php che contiente l'array modificato in un file json 
            axios.get('./server.php',{
                params: {
                    genre: this.selectedGenre
                }
            })
                .then( res => {
                    this.arrayDischi = res.data;
                    // console.log(this.arrayDischi);
                    // console.log(this.selectedGenre);
                    // console.log(res.data);
            })
        }
    },

    mounted() {
        this.fetchData();
    }
}); 