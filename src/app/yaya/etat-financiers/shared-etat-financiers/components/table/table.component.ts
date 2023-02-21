import { MatTableDataSource } from '@angular/material/table';
import { Mouvement } from '../../../../../core/models/mouvement';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() mouvements!: Mouvement[];

  displayedColumns: string[] = ['date', 'title', 'montant'];
  dataSource = new MatTableDataSource<Mouvement>();

  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.mouvements;
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

}
