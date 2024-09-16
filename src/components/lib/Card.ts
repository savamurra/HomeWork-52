
class Card {
    constructor(public rank: string | number, public suit:'diams' | 'hearts' | 'clubs' | 'spades') {
        this.rank = rank;
        this.suit = suit;
    }
}

export default Card;