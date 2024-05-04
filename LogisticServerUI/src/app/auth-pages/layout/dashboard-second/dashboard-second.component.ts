import { Component, OnInit, inject } from '@angular/core';
import { PieChartComponent } from "../../../shared/components/elements/pie-chart/pie-chart.component";
import { BaseComponent } from '../../../shared/components/base/base.component';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { NgSelectComponent } from "../../../shared/components/elements/ng-select/ng-select.component";
import { FormsModule } from '@angular/forms';
import { DashboardSecondService } from './dashboard-second.service';
import { pieChartDashboardData } from '../../../shared/models/entities/dashboard/pie-chart.model';
import { PieChartDashboard } from '../../../shared/models/entities/dashboard/app-dashboard.model';
import { CommonModule } from '@angular/common';
import { dashBatch } from '../../../shared/models/entities/dashboard/dashBatch.model';
import Chart from 'chart.js/auto';
import { Dashboard } from '../../../shared/models/entities/dashboard/dashboard-total.model';
import { DashboardDetailsService } from '../dashboard/dashboard.service';

@Component({
    selector: 'app-dashboard-second',
    standalone: true,
    templateUrl: './dashboard-second.component.html',
    styleUrl: './dashboard-second.component.scss',
    imports: [PieChartComponent, NgSelectComponent, FormsModule, CommonModule]
})
export class DashboardSecondComponent extends BaseComponent implements OnInit  {
    router = inject(Router);
    apiDashboardService = inject(DashboardSecondService)
    dashboardDetailService = inject(DashboardDetailsService);


    BatchList: { label: string, value: string }[] = [];
    pieChartDashboardData: pieChartDashboardData | null = null;
    dashBatch: dashBatch;
    pieChartDashboard: PieChartDashboard;
    dashboardList !: Dashboard;


    constructor() {
        super();
        this.getBatchDetailList();
        this.dashBatch = new dashBatch()
        this.pieChartDashboard = new PieChartComponent()
        // this.getBatchPichart();
        this.dashboardList = new Dashboard();
    }
    ngOnInit(): void {
        
        this.getAllClient();
    }
    getBatchDetailList() {
        this.apiDashboardService.getAllBatchList()
            .pipe(takeUntil(this.destroy$))
            .subscribe((res: string[]) => {
                this.BatchList = res.map((batch: string) => ({ label: batch, value: batch }));
                if (this.BatchList.length > 0) {
                    // Select the first batch by default
                    this.dashBatch.batchName = this.BatchList[3].value;
                    this.onBatchSelect(); // Trigger pie chart update with default batch
                  }
            })
    }


    onBatchSelect(): void {
        const selectedBatchName = this.dashBatch.batchName;
        this.getBatchPichart(selectedBatchName);

    }
    // 


    getBatchPichart(batchName: string): void {
        this.apiDashboardService.getBatchPichart(batchName)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response: any) => {
                if (response) {
                    const keys = Object.keys(response);
                    const labels = keys.slice(0, 8);
                    const data = labels.map((key: string) => parseInt(response[key], 10));
                    // const backgroundColors = ['#522D7B', '#4789C1', '#1956DE', '#FF5733', '#FFC300', '#C70039', '#FF5733', '#FFC300'];
                    const backgroundColors = ['#56C8F7', '#7ABAFA', '#003CAB', '#F53E91', '#3E91F5', '#7380FF', '#3E99F5', '#7977FF'];
                    // Update pieChartDashboard properties with new data
                    this.pieChartDashboard.labels = labels;
                    this.pieChartDashboard.data = data;
                    this.pieChartDashboard.backgroundColors = backgroundColors;
                    // console.log("labels",labels);
                    // console.log("data",data);
                    // console.log("backgroundColors",backgroundColors);
                } else {
                    console.error('Failed to fetch pie chart data.');
                }
            });
    }


    getAllClient() {
        this.dashboardDetailService.getAllDashboard()
            .subscribe((res) => {
                this.dashboardList = res;
            });
    }
}
