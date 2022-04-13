import * as $ from "jquery";
import { DataSource, IItem } from "./ds";

export class Dashboard {
    private _el: HTMLElement = null;

    // Constructor
    constructor(el: HTMLElement) {
        // Save the reference to the element
        this._el = el;

        // Load the data
        DataSource.load().then(items => {
            // Render the datatable
            this.render(items);
        });
    }

    // Renders the datatable
    private render(items: Array<IItem>) {
        // Renders the datatable
        $(this._el).DataTable({
            data: items,
            columns: [
                { title: "Name", data: "name" },
                { title: "Position", data: "position" },
                { title: "Office", data: "office" },
                { title: "Age", data: "age" },
                { title: "Start Date", data: "start-date" },
                { title: "Salary", data: "salary" }
            ]
        });
    }
}