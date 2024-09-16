
interface CardType {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' |'spades';
}

const cardObject = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
};


const CardSuits: React.FC<CardType> = ({ rank, suit }) => {
    const suitSymbol = cardObject[suit];

    return (
        <div className="playingCards faceImages">
       <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
          <span className="rank">{rank}</span>
          <span className="suit">{suitSymbol}</span>
        </span>
        </div>
    );
};

export default CardSuits;