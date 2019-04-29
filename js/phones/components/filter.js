import Component from "./component";

export default class Filter extends Component {
    constructor({element}) {
        super({element});

        this._render();
    }
    _render(){
        this.element.innerHTML = `
        <p>
            Search:
            <input>
        </p>

        <p>
            Sort by:
            <select>
                <option value="name">Alphabetical<option>
                <option value="age">Newest<option>
            </select>
        </p>
        `
    }
}
