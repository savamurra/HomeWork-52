import {useState} from 'react';
import './App.css';
import CardDeck from './components/lib/CardDeck';
import CardSuits from './components/deckRender/deckRender.tsx';
import Card from './components/lib/Card';
import PokerHand from './components/lib/Poker.ts';

function App() {

  const [cardDeck] = useState<CardDeck>(new CardDeck());
  const [hand, setHand] = useState<Card[]>([]);
  const pokerHand = new PokerHand(hand);
  const outcome = pokerHand.getOutcome();


  const getCardsOnWindow = () => {
    setHand(cardDeck.getCards(5));
  };

  return (
      <>
        <button onClick={getCardsOnWindow}>Раздать карты</button>
        {hand.length > 0 ? (
            <div className='cardWrapper'>
              <div className="playingCards faceImages">
                {hand.map((card, index) => (
                    <CardSuits key={index} rank={`${card.rank}`} suit={`${card.suit}`}/>
                ))}
                <p>{outcome}</p>
              </div>
            </div>
        ) : <p>Раздайте карты</p>
        }
      </>
  );
}

export default App;
