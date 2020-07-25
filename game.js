class Game {
    constructor() {
        this.Player = '';
        this.buildGame();
        this.setNextPlayer();
    }

    buildGame() {
        var game = document.querySelector('body');

        for (let i = 0; i < 3; i++) {
            let line = this.buildLine();
            game.append(line);
        }
    }

    buildLine() {
        var divElement = document.createElement('div');

        for (var i = 0; i < 3; i++) {
            var boxElement = this.buildBox()
            divElement.appendChild(boxElement);
        }

        return divElement;
    }

    buildBox() {
        var ulElement = document.createElement('ul');
        var liElement = document.createElement('li');

        liElement.addEventListener("click", () => this.handleClickBox(event));
        ulElement.appendChild(liElement);

        return ulElement;
    }

    handleClickBox(elementClicked) {

        if(elementClicked.target.innerText != "")
            return;

        elementClicked.target.innerText = this.Player;
        this.setNextPlayer();
    }

    setNextPlayer() {
        if (this.Player === '') {
            this.Player = 'X';
        }
        else {
            this.Player = this.Player === 'X' ? 'O' : 'X';
        }

        this.updateNextPlayer();
    };

    updateNextPlayer() {
        var h1Element = document.querySelector('h1');
        h1Element.innerText = "Sua vez: " + this.Player;
    }
};