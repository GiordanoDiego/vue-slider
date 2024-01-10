
const {createApp} = Vue;

createApp({
    data() { // creo le variabili visibili nella parte montata
    return {
        currentActive: 0, 
        //contatore che implementerò per cambiare slides
        slides: [
            {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        };   
    }, 
    methods:{ //creo le funzioni
        prevSlide(){
            if(this.currentActive > 0){
                this.currentActive--; 
            } else {
                console.log("prev dentro elsee");
                this.currentActive = this.slides.length - 1;
            }

        },
        nextSlide(){
            console.log("prima", this.currentActive);

            if(this.currentActive < (this.slides.length - 1)){
                this.currentActive++;
                console.log("dentro if", this.currentActive);

            }else{
                this.currentActive = 0;
                console.log("next dentro else", this.currentActive);

            }
        }, 
        thumbActive(indiceThumb){
            if (this.currentActive == indiceThumb){
                return 'active';
            } else {
                return '';
            }
        },
        changeSlide(indiceThumb){
            this.currentActive = indiceThumb;
        } 
    }

}).mount('#app');

