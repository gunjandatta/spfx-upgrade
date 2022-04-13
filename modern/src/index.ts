// Import jQuery
import "jquery";

// Bootstrap
import "bootstrap";

// DataTables.net
import "datatables.net";
import "datatables.net-bs4";

// Custom Styling
import "./styles.scss";

// Solution References
import { DataSource } from "./ds";
import { Dashboard } from "./dashboard";

// Global Variable
const GlobalVariable = {
    render: (el: HTMLElement, context?) => {
        // See if the context exists
        if (context) {
            // Set the context information
            DataSource.Context = context;
        }

        // Render the dashboard
        new Dashboard(el);
    }
}

// Set the global variable
window["MyTableSolution"] = GlobalVariable;