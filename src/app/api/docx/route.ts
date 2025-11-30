
import { NextResponse } from "next/server";
import { Document, Packer, Paragraph, TextRun } from "docx";

export async function POST(req: Request) {
  try {
    const { report = "", title = "report" } = await req.json();

    const paragraphs = report.split("\n").map(
      (line: string) =>
        new Paragraph({
          children: [ 
            new TextRun({
          text: line,
          size: 28,  
          font: "Helvetica",
          bold: false,
        }),
      ],
        })
    );

    const doc = new Document({
      sections: [
        {
          children: paragraphs,
        },
      ],
    });


    const buffer = await Packer.toBuffer(doc);
    const uint8Array = new Uint8Array(buffer);

    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${title.replace(
          /\s+/g,
          "-"
        )}.docx"`,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
