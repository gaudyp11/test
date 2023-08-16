/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

class ClickerClientAction extends Component {
    static template = "awesome_clicker.ClickerClientAction";

    setup() {
        this.clickService = useState(useService("awesome_clicker.clicker_service"));
    }
}

registry.category("actions").add("awesome_clicker.dashboard", ClickerClientAction);
