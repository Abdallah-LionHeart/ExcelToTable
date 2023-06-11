import { Component } from '@angular/core';

@Component({
  selector: 'app-file-generator',
  templateUrl: './file-generator.component.html',
  styleUrls: ['./file-generator.component.scss']
})
export class FileGeneratorComponent {
  downloadFile() {
    const fileContent = 'assets/ClientFile/test.xlsx'; // Replace with your file URL
    const fileName = 'test.xlsx'; // Replace with your desired file name

    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    window.URL.revokeObjectURL(url);
  }

}
