import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { ChatService, chat } from '../../servicios/chat.service';
import { ModalController, ActionSheetController } from "@ionic/angular";
import { ChatComponent } from "../../componentes/chat/chat.component";



@Component({
  selector: 'app-inicio-login',
  templateUrl: './inicio-login.page.html',
  styleUrls: ['./inicio-login.page.scss'],
})
export class InicioLoginPage implements OnInit {

  public chatRooms:any=[];

  constructor(public autservice: AuthService,
    public chatservice: ChatService,
    private modal: ModalController,
    public actionSheetController: ActionSheetController) { }


  //método para salir o desconectarse
  Onlogut(){
    this.autservice.Onlogut();
  }

  ngOnInit() {
    this.chatservice.getChatRooms().subscribe(chats=>{
      this.chatRooms=chats;
    });
  }

  openChat(chat){
    this.modal.create({
      component: ChatComponent,
      componentProps:{
        chat: chat
      }
    }).then((modal)=>modal.present())
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.Onlogut();
        },
      }]
    });
    await actionSheet.present();
  }

}


