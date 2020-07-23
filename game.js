class Game {
    constructor() {
        this.Player = '';
        this.setNextPlayer();
    }

    setNextPlayer() {
        if (this.Player === '') {
            this.Player = 'X';
            return;
        }

        this.Player = this.Player === 'X' ? 'O' : 'X';
    };
};