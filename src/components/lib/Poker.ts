import Card from './Card';

class PokerHand {
    private hand: Card[];

    constructor(hand: Card[]) {
        this.hand = hand;
    }

    public getRankCounts(): number[] {
        const counts: { [key: string]: number } = {};
        this.hand.forEach(card => {
            const rank = card.rank.toString();
            if (counts[rank]) {
                counts[rank] += 1;
            } else {
                counts[rank] = 1;
            }
        });
        return Object.values(counts).sort((a, b) => b - a);
    }

    public getFlash() {
        const countsSuit: { [key: string]: number } = {};
        this.hand.forEach(card => {
            const suit = card.suit;
            if (countsSuit[suit]) {
                countsSuit[suit] += 1;
            } else countsSuit[suit] = 1;
        });
        return Object.values(countsSuit).sort((a, b) => b - a);
    }

    public getOutcome(): string {
        const rankCounts = this.getRankCounts();
        const flash = this.getFlash();
        if (rankCounts[0] === 3 && rankCounts[1] === 2) {
            return 'Фулл-Хаус';
        }
        if (flash[0] === 5) {
            return 'Флеш';
        }
        if (rankCounts[0] === 4){
            return 'Карэ';
        }
        if (rankCounts[0] === 3) {
            return 'Тройка';
        }
        if (rankCounts[0] === 2 && rankCounts[1] === 2) {
            return 'Две пары';
        }
        if (rankCounts[0] === 2 || rankCounts[1] === 2) {
            return 'Одна пара';
        }

        return 'Старшая карта';
    }
}

export default PokerHand;
