# 220224 - ML Workshop (Milieux x Frederik de Bleser)

## Links
[Workshop event](https://www.eventbrite.ca/e/creative-machine-learning-using-figment-tickets-254585962467)  
[Workshop video](https://www.youtube.com/watch?v=J4mnzP7nP0Y)  
[Figment](https://figmentapp.com/)  
[Algorithmic Gaze](https://algorithmicgaze.com/)

## Notes

### Figment
Segment - remove background/foreground  
trail - keeps trace of previous video  
composite - XXX two videos  
mirror  

detect pose  
detect faces  
detect objects  

detect pose + trail (change alpha of detect post background!)

segment + solid background -> composite = green screen

unsplash: random image from internet
Lookup: color lookup

### PAPERSPACE 
Virtual machine using Jupyter/Python (alternative to Google Colab - also better paid GPU)

GRADIENT - notebook

set-up:
- tensor flow/freeGPU
- advanced options: workspace: https://github.com/fdb/pix2pix-from-scratch

workflow URL -> imports code to virtual computer


if see something interesting online on Google Colab, can download

- run
- open in Jupyter (LEFT icon) -> scripts
- open pix2pix_train (Jupyter notebook)
- upload zipped files from main Jupiter
- terminal - pwd, ls, cd, mkdir
- 
mkdir -p dancer/input
cd dancer/input
unzip ../../dancers-004.zip

when done training, need to shut down, because takes space in memory

Jupyter notebooks are foundational in coding, store input AND output
also J new>terminal
BAS (born-again) short-hand
pwd (print working directory)
ls (list of files)
cd (change directory)
zip (zip )
-r (all subfiles)
9 (best quality)
mkdir (make directory)
-p (make subfolders)


RUN
in J, SHIFT+ENTER to run cell  
edit cell 8 (?) project directory to input and output directories!!  
Takes a few hours to train BUT no load on physical computer  
Creates a generator.zip files (e.g. https://bit.ly/36l8c44)  


Upload generator.zip to ‘dancer’ folder then unzip through terminal (ls -> cd -> unzip generator.zip)  
In pix2pix_generate, change project directory to ‘dancer’, dataset_dir to , output_image_dir, output_dir and ‘glob pattern’.  

dancer/dancer/output/v001/generator’ and 

Insert cell above -> “%pip install pillow matplotlib”

Images in “dancer/dancer/output/v001/sequence” -> convert to video in other software


### Post
Convert generator to TensorFlow.js model as tfjs.zip (e.g. https://bit.ly/3skz8z5) using (convert_to_tfjs.ipynb) -> unzip to ‘tfjs model’  
Image to Image Model (0.3.7)

TF.js model can be used in Figment in ‘Image-to-Image Model’, needs model and image sized 512x512.


## Other

Karpaty - charRNN
Post-2015: transformers
GPT-3
Hugging face(facilitating text-generation AI)
