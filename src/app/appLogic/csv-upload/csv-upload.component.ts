import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.scss']
})
export class CsvUploadComponent implements OnInit {
  tableHeaders: string[] = [];
  tableData: string[][] = [];


  ngOnInit(): void {
    this.somthing();
  }



  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.readFile(file);
  }

  readFile(file: File) {
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const contents: string = e.target.result;
      this.parseCSV(contents);
    };
    reader.readAsText(file);
  }

  parseCSV(contents: string) {
    const rows: string[] = contents.split('\n');
    this.tableHeaders = rows[0].split(',');

    this.tableData = [];
    for (let i = 1; i < rows.length; i++) {
      const columns: string[] = rows[i].split(',');
      this.tableData.push(columns);
    }
  }
  somthing() {
    var table = document.getElementById('table') as HTMLTableElement;
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].onclick = function () {
          console.log(table.rows[i].cells[j].innerHTML)

        }
      }
    }
  }
}
