import fitz
import os

doc = fitz.open('1D_CNN_Traffic_Flow_Prediction (2).pdf')
os.makedirs('pdf_images', exist_ok=True)
for i in range(min(5, len(doc))):
    page = doc.load_page(i)
    pix = page.get_pixmap()
    pix.save(f'pdf_images/page_{i}.png')
