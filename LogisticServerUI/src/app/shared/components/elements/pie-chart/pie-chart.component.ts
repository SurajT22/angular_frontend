import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChartOptions, TooltipItem } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnChanges {
  // @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  // @Input() labels: string[] = [];
  // @Input() data: number[] = [];
  // @Input() backgroundColors: string[] = [];

  // public chart: any;

  // ngOnChanges(): void {
  //   if (this.chartCanvas && this.data.length > 0) {
  //     this.renderChart();
  //   }
  // }

  // private renderChart(): void {
  //   const canvasElement = this.chartCanvas.nativeElement;
  //   const ctx = canvasElement.getContext('2d');

  //   if (!ctx) {
  //     console.error('Failed to obtain 2D rendering context for chart canvas.');
  //     return;
  //   }

  //   if (this.chart) {
  //     this.chart.destroy(); // Destroy previous chart instance if exists
  //   }

  //   this.chart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: this.labels,
  //       datasets: [{
  //         data: this.data,
  //         backgroundColor: this.backgroundColors
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       aspectRatio: 1
  //     } as ChartOptions<'pie'>
  //   });
  // }

  
  // createChart() {

  //   this.chart = new Chart("MyChart", {
  //     type: 'pie', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: this.labels,
  //       datasets: [{
  //         label: 'My First Dataset',
  //         data: this.data,
  //         backgroundColor: this.backgroundColors,
  //         hoverOffset: 4
  //       }],
  //     },
  //     options: {
  //       aspectRatio: 1


  //     }

  //   });
  // }

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() backgroundColors: string[] = [];

  public chart?: Chart<'pie', number[], string>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['labels'] || changes['data'] || changes['backgroundColors']) {
      this.renderChart();
    }
  }

  private renderChart(): void {
    const canvasElement = this.chartCanvas.nativeElement;
    const ctx = canvasElement.getContext('2d');

    if (!ctx) {
      console.error('Failed to obtain 2D rendering context for chart canvas.');
      return;
    }

    if (this.chart) {
      this.chart.destroy(); // Destroy previous chart instance if exists
    }

    // Calculate total sum of data values
    const total = this.data.reduce((sum, value) => sum + value, 0);

    // Create an array for additional dataset that will act as separators
    const separatorData = this.data.map(value => 1); // Use a small value (e.g., 1) for separators
    const separatorColors = this.data.map(() => 'rgba(0, 0, 0, 0)'); 

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.data,
          backgroundColor: this.backgroundColors,
          borderWidth: 0 
        },
        ]
      },
      options: {
        responsive: true,
        aspectRatio: 1,
        plugins: {
          legend: {
            display: true, // Set to true if you want to display legend
            position: 'right', // Adjust legend position if needed
            labels: {
              font: {
                size: 12,
                weight: 'bold'
              },
              color: 'white' // Set legend label text color
            }
          }
        }
      } as ChartOptions<'pie'>
    });
  }

  private hexToRgb(hex: string): string {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255, 255, 255';
  }




  // @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  // @Input() labels: string[] = [];
  // @Input() data: number[] = [];
  // @Input() backgroundColors: string[] = [];

  // public chart?: Chart<'pie', number[], string>;

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['labels'] || changes['data'] || changes['backgroundColors']) {
  //     this.renderChart();
  //   }
  // }

  // private renderChart(): void {
  //   const canvasElement = this.chartCanvas.nativeElement;
  //   const ctx = canvasElement.getContext('2d');

  //   if (!ctx) {
  //     console.error('Failed to obtain 2D rendering context for chart canvas.');
  //     return;
  //   }

  //   if (this.chart) {
  //     this.chart.destroy(); // Destroy previous chart instance if exists
  //   }

  //   this.chart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: this.labels,
  //       datasets: [
  //         {
  //           data: this.data,
  //           backgroundColor: this.backgroundColors
  //         }
  //       ]
  //     },
  //     options: {
  //       responsive: true,
  //       aspectRatio: 1,
  //       plugins: {
  //         legend: {
  //           display: true,
  //           position: 'right',
  //           labels: {
  //             font: {
  //               size: 12,
  //               weight: 'bold'
  //             },
  //             color: 'white'
  //           }
  //         }
  //       },
  //       elements: {
  //         arc: {
  //           borderWidth: 0, // Set border width to 0 to remove borders
  //           spacing: 4 // Adjust spacing between segments as needed
  //         }
  //       },
  //       tooltips: {
  //         callbacks: {
  //           label: (tooltipItem: TooltipItem<'pie'>) => {
  //             const dataIndex = tooltipItem.dataIndex;
  //             const label = this.labels[dataIndex] || '';
  //             const value = this.data[dataIndex] || 0;
  //             return `${label}: ${value}`;
  //           }
  //         }
  //       }
  //     } as ChartOptions<'pie'>
  //   });
  // }
}
