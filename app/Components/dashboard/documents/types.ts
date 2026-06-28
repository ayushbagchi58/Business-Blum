export interface Document {
  id: string;
  fileName: string;
  fileSize: number;
  uploadedDate: string;
  status: "Verified" | "Pending";
  documentType: string;
}

export interface DocumentsData {
  documents: Document[];
}
