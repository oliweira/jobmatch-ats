import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';
import html2pdf from 'html2pdf.js';

export function exportToPDF(elementId: string, filename: string) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const opt = {
    margin: 10,
    filename: `${filename}.pdf`,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
  };

  html2pdf().set(opt).from(element).save();
}

export async function exportToDocx(title: string, content: string, filename: string) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: title,
            heading: HeadingLevel.HEADING_1,
            spacing: { after: 200 }
          }),
          ...content.split('\n').map(line => 
            new Paragraph({
              children: [new TextRun({ text: line, size: 24 })],
              spacing: { after: 120 }
            })
          )
        ]
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${filename}.docx`);
}