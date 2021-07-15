window.addEventListener('load', () => {

    //Código baseado em: 
    //https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order

    let ul = document.querySelector('ul.lista');
    ul.innerHTML = construirListagem()

    //O elemento ul possui um array de elementos filhos, então percorremos ele
    for (let i = ul.children.length; i >= 0; i--) {
        /**Em cada iteração do for o tamanho do array de elementos li diminui
         * então usamos esse novo valor para setar qual o valor máximo na função RandZeroToMax
         */
        ul.appendChild(ul.children[RandZeroToMax(i)]);
    }

    function RandZeroToMax(max) {
        return Math.floor(Math.random() * (max + 1));
    }
});

function construirListagem() {
    let lista = ""
    data.forEach((user) => {
        lista += `
        <li>
            <div class="card ${user.cardClasses}">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="assets/images/${user.image}" />
                </div>
                <div class="card-content">
                    <span class="card-title activator ${user.nameClasses}">${user.name}<i
                class="material-icons right">more_vert</i></span>
                    <p>
                        <a href="https://github.com/${user.githubUserName}" target="_blank">
                            <span class="${user.linkClasses}" style="${user.linkStyle}">${user.githubName}</span>
                        </a>
                    </p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${user.informationTitle}<i class="material-icons right">close</i></span>
                    <p>
                        ${user.information}
                    </p>
                </div>
            </div>
        </li>`
    })

    return lista
}