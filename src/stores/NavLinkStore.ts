import { action, makeObservable, observable } from "mobx";

export class NavLinkStore {
    hoveredStates: { [key: string]: boolean } = {
        features: false,
        pricing: false,
        blog: false,
        discover: false,
    };

    constructor() {
        makeObservable(this, {
            hoveredStates: observable,
            setHovered: action,
        });
    }

    setHovered(navlink: string, state: boolean) {
        this.resetHoverStates();
        this.hoveredStates[navlink] = state;
    }

    resetHoverStates() {
        this.hoveredStates = {
            features: false,
            pricing: false,
            blog: false,
            discover: false,
        };
    }
}

const navLinkStore = new NavLinkStore();
export default navLinkStore;
