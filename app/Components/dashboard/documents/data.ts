import { DocumentsData } from "./types";

export const documentsData: DocumentsData = {
  documents: [
    {
      id: "DOC-001",
      fileName: "Bank Statement — April 2024.pdf",
      fileSize: 1200, // in KB
      uploadedDate: "Jun 18",
      status: "Verified",
      documentType: "Bank Statement",
    },
    {
      id: "DOC-002",
      fileName: "Bank Statement — May 2024.pdf",
      fileSize: 1100, // in KB
      uploadedDate: "Jun 19",
      status: "Verified",
      documentType: "Bank Statement",
    },
    {
      id: "DOC-003",
      fileName: "Articles of Incorporation.pdf",
      fileSize: 340, // in KB
      uploadedDate: "Jun 18",
      status: "Verified",
      documentType: "Articles of Incorporation",
    },
    {
      id: "DOC-004",
      fileName: "Government ID.jpg",
      fileSize: 680, // in KB
      uploadedDate: "Jun 19",
      status: "Pending",
      documentType: "Government ID",
    },
  ],
};
