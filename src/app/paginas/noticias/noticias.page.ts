import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const{Share}=Plugins;

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  arrayNoticias: Noticias[]=[
    {
      imagen:'https://elandroidelibre.elespanol.com/wp-content/uploads/2016/10/android-nougat-7.1-3.jpg',
      subtitulo:'Autor: El Androide Libre',
      titulo:'Noticias sobre Novedades y noticias Android',
      contenido:'Durante la corta historia de Android, en la que ha crecido desde ser una anécdota a convertirse en el sistema operativo móvil con mayor cuota de usuarios, nuestro androide preferido se ha hecho mayor hasta madurar en consonancia. Es un sistema completo, potente, muy versátil y con todo lo que cualquiera necesita para disfrutar al máximo de su móvil. ¿Quieres conocerlo todo sobre Android? Entonces has llegado al mejor lugar ya que en El Androide Libre vamos a contarte todas las noticias en torno a este sistema; con las últimas novedades, las que más te interesan.'
    },
    {
      imagen:'https://www.movilzona.es/app/uploads/2020/10/nino-apple-copiando-a-nino-android.jpg?x=810',
      subtitulo:'Autor:movil Zona',
      titulo:'Las tecnologías que Apple debería copiar a Android para el iPhone 12',
      contenido:'Los fans de Apple suelen ser muy fieles a la marca. Vemos cómo muchos usuarios de Android dan el salto a iPhone, pero lo contrario parece darse con menos frecuencia. No obstante, aunque Apple cuenta con unos cimientos sólidos para su iPhone, la carrera de la competencia entre los diferentes fabricantes de Android va a otro ritmo. Esto hace que en esta batalla tecnológica, se den avances que aún no han sido integrados en iPhone y que se ven con cierto recelo incluso por los más acérrimos al móvil de los de Cupertino'
    },
    {
      imagen:'https://www.movilzona.es/app/uploads/2020/10/arreglar-android-no-enciende.jpg?x=810',
      subtitulo:'Autor:movil Zona',
      titulo:'Así puedes volver a encender un móvil Android que se queda «atascado»',
      contenido:'Los móviles no son por desgracia un dispositivo tecnológico sin fallos y en alguna ocasión nos podemos enfrentar ante problemas de uso de los que resulta muy complicado escapar, entre ellos que el móvil no encienda es algo muy repetido y nos puede conllevar muchos quebraderos de cabeza. Esto se agrava si nos encontramos con que el móvil Android no enciende y además el recovery no funciona.'
    },
    {
      imagen:'https://www.movilzona.es/app/uploads/2020/09/permisos-android-11-ajustes.jpg?x=810',
      subtitulo:'Autor:movil Zona',
      titulo:'Controla los permisos en Android 11. Ajustes, opciones y cambios',
      contenido:'Para controlar los permisos de las aplicaciones en Android 11 tenemos dos caminos, entre los cuales veremos cambios en sus opciones. El primero de ellos y el que debe hacer primero es el clásico, lo que nos pregunta cuando iniciamos por primera vez la app. El siguiente será lo que nos encontraremos si accedemos a los ajustes del sistema.'
    },
    {
      imagen:'https://www.movilzona.es/app/uploads/2020/09/dormir-mejor-homer-durmiendo-android.jpg?x=810',
      subtitulo:'Autor: Rubén De la Calle',
      titulo:'¿No consigues dormir bien? Tu móvil Android te puede ayudar a descansar',
      contenido:'Ahora que el móvil se ha convertido en una herramienta que utilizamos para prácticamente todo, solo nos faltaba que nos ayudará también a conseguir dormir mejor. Los problemas de insomnio no se solucionarán de un plumazo, pero nos ayudará a que conciliar el sueño sea más sencillo. Desde Android 10 nos encontramos con estas opciones y esto hace que prácticamente estén disponibles en cualquier móvil Android podamos sacarles partido.'
    },
    {
      imagen:'https://i.blogs.es/c26020/pixel-5/1366_2000.jpg',
      subtitulo:'Autor: Ricardo Aguilar',
      titulo:'La carga inalámbrica en móviles de aluminio es posible: el Google Pixel 5 es la prueba',
      contenido:'Google ya ha hecho oficial el Pixel 5, un móvil a caballo entre la gama alta y la gama media, con una cámara bastante ambiciosa pero un hardware algo ajustado. Una de las características que más han llamado la atención en el Pixel 5 es la carga inalámbrica. Son muchos los teléfonos con esta tecnología, pero esta es la primera vez que una compañía logra incorporar carga inalámbrica en un móvil construido en aluminio.'
    },
    {
      imagen:'https://i.blogs.es/1c0c7e/pixel/1366_2000.jpg',
      subtitulo:'Autor: José Antonio Carmona',
      titulo:'Así es el modo de ahorro de batería extremo del nuevo Pixel 5: hasta 48 horas de autonomía extra',
      contenido:'Hace unas horas que Google fue protagonista con la presentación de su nueva hornada de dispositivos. "Gadgets" para todos los gustos en los que destacaba el nuevo Chromecast con Google TV, el altavoz Nest Audio y cómo no, sus dos nuevos teléfonos basados en Android, los Pixel 4a (5G) y Pixel 5.'
    },
    {
      imagen:'https://ep01.epimg.net/elpais/imagenes/2019/12/23/escaparate/1577102140_313479_1577103747_noticia_normal_recorte1.jpg',
      subtitulo:'Autor: Laura Pajuelo',
      titulo:'Estos son los mejores ‘smartphones’ del año',
      contenido:'Al mirar las listas de los smartphones más vendidos de cada año, los de gama alta no suelen ocupar los primeros puestos. Pero eso no significa que no despierten interés: son los que marcan las tendencias del mercado e incorporan las mejores características. ¿Cuáles son los más destacados de este 2019, que está a punto de terminar? Apple, Samsung, Google... Las principales firmas ya han presentado sus propuestas para lo que resta de año, con terminales que hacen especial foco en sus cámaras y pantalla'
    },
  ]

  num_noticias: number=2;
  @ViewChild(IonInfiniteScroll) scroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  //método para mostrar las noticias

  mostrarNoticias(event){
    setTimeout(()=>{
      if(this.num_noticias<this.arrayNoticias.length){
        this.num_noticias++;
        event.target.complete();
      }else{
        this.scroll.disabled=true;
      }
    },1000);
    console.log(this.num_noticias);
  }
}

interface Noticias{
  imagen: string;
  subtitulo: string;
  titulo: string;
  contenido: string;
}

