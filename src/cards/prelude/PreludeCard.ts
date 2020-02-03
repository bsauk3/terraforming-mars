import { CardType } from "../CardType";
import { Player } from "../../Player";

export abstract class PreludeCard  {
    public cost: number = 0;
    public cardType: CardType = CardType.PRELUDE;
    public canPlay(_player: Player): boolean {
        return true;
    }
}
