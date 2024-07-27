//endpoint:/api/speedtest/service/*

import BaseTableWidget from "./BaseTableWidget.js";

export default class Speedtest extends BaseTableWidget {
    constructor() {
        super();
        this.title = "Speedtest";
        this.tickTimeout = 5000;
    }


    getMarkup() {
        let $container = $('<div></div>');
        let $table = this.createTable('speedtest-table', {
            headerPosition: 'left',
            headers: [
                "Most Recent:",
                "Avg. Latency",
                "Avg. Download",
                "Avg. Upload"
            ]
        });

        $container.append($table);
        return $container;
    }

    async onMarkupRendered() {
        const recentData = await this.ajaxCall('/api/speedtest/service/showrecent');
        const statData = await this.ajaxCall('/api/speedtest/service/showstat');
    }
}