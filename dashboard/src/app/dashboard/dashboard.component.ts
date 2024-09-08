import { Component, OnInit } from '@angular/core';
import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  
  public title: string = "Dashboard";
  private dados: any;

  constructor(private dadosService: DadosService) {}

  public ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      });
  }

  private init(): void {
    if (typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages': ['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos())
      }, 1000);
    }
  }

  private exibirGraficos(): void {
    this.exibirPieChart();
    this.exibirThreeDPieChart();
    this.exibirDonutChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
  }

  private exibirPieChart(): void {
    const element: HTMLElement = document.getElementById('pie_chart');
    const chart: any = new google.visualization.PieChart(element);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  private exibirThreeDPieChart(): void {
    const element: HTMLElement = document.getElementById('3d_pie_chart');
    const chart: any = new google.visualization.PieChart(element);
    const opcoes:any = this.obterOpcoes();
    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  private exibirDonutChart(): void {
    const element: HTMLElement = document.getElementById('donut_chart');
    const chart: any = new google.visualization.PieChart(element);
    const opcoes:any = this.obterOpcoes();
    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  private exibirBarChart(): void {
    const element: HTMLElement = document.getElementById('bar_chart');
    const chart: any = new google.visualization.BarChart(element);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  private exibirLineChart(): void {
    const element: HTMLElement = document.getElementById('line_chart');
    const chart: any = new google.visualization.LineChart(element);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  private exibirColumnChart(): void {
    const element: HTMLElement = document.getElementById('column_chart');
    const chart: any = new google.visualization.ColumnChart(element);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  private obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  private obterOpcoes(): any {
    return {
      'title': 'Quantidade de cadastros do primeiro semestre',
      'width': 400,
      'height': 300
    };
  }

}
