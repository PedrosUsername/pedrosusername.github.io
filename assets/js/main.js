window.addEventListener('load', () => {

    //Código baseado em: 
    //https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order

    let ul = document.querySelector('ul');
    //O elemento ul possui um array de elementos filhos, então percorremos ele
    for (var i = ul.children.length; i >= 0; i--) {
        /**Em cada iteração do for o tamanho do array de elementos li diminui
         * então usamos esse novo valor para setar qual o valor máximo na função RandZeroToMax
         */
        ul.appendChild(ul.children[RandZeroToMax(i)]);
    }

    function RandZeroToMax(max) {

        return Math.floor(Math.random() * (max + 1));

    }

});