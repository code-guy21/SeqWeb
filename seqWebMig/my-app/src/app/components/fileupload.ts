export class FileUpload {
 
  $key: string;
  name: string;
  soundUrl: string;
  file: File;
 
  constructor(file: File) {
    this.file = file;
  }
}