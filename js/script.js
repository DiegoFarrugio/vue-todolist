const { createApp } = Vue;
createApp({
    data(){
        return {
            new_task: {
                text: '',
                done: false
            },

            new_task_text: '',
            tasks: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Andare in palestra',
                    done: true
                },
                {
                    text: 'Far mangiare i cani',
                    done: false
                }
            ]
        };
    },
    methods: {
        delete_task(i){
            this.tasks.splice(i, 1);
        },
        // add_task(){
        //     this.tasks.push(this.new_task);
        // }
        add_task(){
            if (this.new_task_text.length == 0) {
                return;
            }

            let new_task = {
                text: this.new_task_text,
                done: false,
            };

            this.tasks.push(new_task);
            this.new_task_text = '';
        }
    }
}).mount('#app');



/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no



MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, 
che quindi viene aggiunto alla lista dei todo esistenti. */