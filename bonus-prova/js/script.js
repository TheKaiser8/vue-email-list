"use strict";

// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue;

createApp({
    data() {
        return {
            newMail: '',
            visibleMails: 10,
            mailList: []
        }
    },
    methods: {
        removeMail(i) {
            this.mailList.splice(i, 1);
        },
        addMail() {
            const mailAdded = this.newMail;
            this.mailList.push(mailAdded);
            this.newMail = '';
        }
    },
    mounted () {
        for (let i = 1; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
            this.mailList.push(response.data.response);
            })
        }
    }
}).mount('#app');
