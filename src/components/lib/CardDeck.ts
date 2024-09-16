import Card from './Card.ts';

class CardDeck {
    private ranks: (string | number)[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    private suits:('diams' |'hearts' | 'clubs'| 'spades')[] = ['diams', 'hearts', 'clubs', 'spades'];
    public deck: Card [];

    constructor() {
        this.deck = [];
        this.createCard();
    }

    createCard(): void {
        for (let i = 0; i < this.suits.length; i++){
            for (let j = 0; j < this.ranks.length; j++){
                this.deck.push(new Card(this.ranks[j], this.suits[i]));
            }
        }
    }

    getCard(): Card {
        const randomCard = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomCard, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const getCardArray: Card[] = [];
        for (let i = 0; i < howMany; i++){
            if (this.deck.length === 0) break;
            getCardArray.push(this.getCard());
        }
        return getCardArray;
    }
}


export default CardDeck;