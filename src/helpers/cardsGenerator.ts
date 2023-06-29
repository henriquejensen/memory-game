import first from "../assets/13.svg";
import second from "../assets/14.svg";
import third from "../assets/15.svg";
import fourth from "../assets/16.svg";
import fifth from "../assets/17.svg";
import sixth from "../assets/18.svg";
import seventh from "../assets/19.svg";
import eighth from "../assets/20.svg";
import ninth from "../assets/21.svg";

export type Card = {
    id: number;
    image: string;
    name: string;
    isFlipped: boolean;
};

export const cardsGenerator = (): Card[] => {

    const cards = [
        { id: 1, image: first, name: "first", isFlipped: false },
        { id: 2, image: second, name: "second", isFlipped: false },
        { id: 3, image: third, name: "third", isFlipped: false },
        { id: 4, image: fourth, name: "fourth", isFlipped: false },
        { id: 5, image: fifth, name: "fifth", isFlipped: false },
        { id: 6, image: sixth, name: "sixth", isFlipped: false },
        { id: 7, image: seventh, name: "seventh", isFlipped: false },
        { id: 8, image: eighth, name: "eighth", isFlipped: false },
        { id: 9, image: ninth, name: "ninth", isFlipped: false },
    ];
    const doubleCards = cards.concat(cards);

    const randomCards = doubleCards.sort(() => Math.random() - 0.5);

    return randomCards;
}
