import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {
  elementType = 'svg';
  value = 'A001';
  format = 'CODE128';
  lineColor = '#000000';
  width = 5;
  height = 100;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'top';
  textMargin = 8;
  fontSize = 60;
  background = '#ffffff';
  margin = 10;
  marginTop = 10;
  marginBottom = 10;
  marginLeft = 10;
  marginRight = 10;

  public textHead: string = 'ALMEGATEX';
  public textInfo: string = 'Nomer Antrian Anda : ';
  public textInfo2: string = 'Mohon Menunggu';
  public dateNow = new Date().toLocaleDateString('id-ID');
  public timeNow = new Date().toLocaleTimeString('en-US');
  public textDesc: string = 'Budayakan antri untuk kenyamanan bersama Terima Kasih atas kunjungan anda';

  constructor() { }

  ngOnInit(): void {
  }

  get values(): string[] {
    return this.value.split('\n');
  }
  codeList: string[] = [
    '', 'CODE128',
    'CODE128A', 'CODE128B', 'CODE128C',
    'UPC', 'EAN8', 'EAN5', 'EAN2',
    'CODE39',
    'ITF14',
    'MSI', 'MSI10', 'MSI11', 'MSI1010', 'MSI1110',
    'pharmacode',
    'codabar'
  ];

}
