let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;[[´p ekl  ]]
}

funcion draw() {
  background(0);
  mostraBolinha();
  movimetaBolinha();
  verficaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  colisaoMinhaRaqueteBiblioteca();

function motrarBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
function movimentaBoinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  if(yBolinha + raio > heigth || yBolinha - raio < 0){ 
    velocidadeYBolinha *= -1;
    
function mostrarRaquete();
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
    
function movimentaMinhaRaquete(){
  if(KeylsDown(UP_ARROW)){
    yRaquete-= 10;
  if(KelsDown(DOWN_ARROW)){
    yRaquete += 10;
    
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha + raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
 
function colisaoMinhaRaqueteBiblioteca(){
  colidiu = collideRectCircle(xRaquete, yRaquete, yRaquete, yBolinhs, raio);
  if(colidiu){
    velocidadeXolinha *= -1;


      
   

 



 
}