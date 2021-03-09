// -------- IMPORTS -------- //

import {Button} from '../comps/Buttons';
import {PickQuestion} from '../comps/Buttons';
import {header2} from '../comps/Text';
import {KnowledgeCheck} from '../comps/Text';
import {header1} from '../comps/Text';
import {Paragraph1} from '../comps/Text';
import {CAN1} from '../comps/Buttons'
import {UK1} from '../comps/Buttons'
import {CHI1} from '../comps/Buttons'
import {USA1} from '../comps/Buttons'
import {CryFace} from '../comps/Icons'
import {Arrow1} from '../comps/Icons'
import {Arrow2} from '../comps/Icons'
import {Trash} from '../comps/Icons'
import {GarbageFire} from '../comps/Icons'
import {DeathSymbol} from '../comps/Icons'


// -------- TITLE -------- //

export default {
    title:"Jacob Cordes's Components"
}

// -------- EXPORTS -------- //

export const TryAgainButton = () => Button

export const ChooseQuestion = () => PickQuestion

export const TitleText = () => KnowledgeCheck

export const H1 = () => header1

export const H2 = () => header2

export const Paragraph = () => Paragraph1

export const CanadaFlag = () => CAN1

export const UnitedKingdomFlag = () => UK1

export const ChinaFlag = () => CHI1

export const UnitedStatesFlag = () => USA1

export const CryingFace = () => CryFace

export const BigArrow = () => Arrow1

export const SmallArrow = () => Arrow2

export const TrashBags = () => Trash

export const GarbageFlames = () => GarbageFire

export const ToxicSymbol = () => DeathSymbol