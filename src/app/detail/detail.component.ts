import { Component, OnInit } from '@angular/core';
import { initialData, Theme } from '../../assets/shared/initial.data'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit{
  
  constructor() { }

  private Data:Theme[];
  private initial: Theme[] = initialData;
  private comments;
  private itemIndex;
  private edit = false;
  private addName;
  private comment;

  ngOnInit() {
    this.getData();
  }

  setData(){
    
    let data = JSON.stringify(this.Data);
    window.localStorage.setItem('ThemesDB',data);
  }

  getData(){
    
    let data = JSON.parse(window.localStorage.getItem('ThemesDB'));
   
    if(data === null || data.length == 0) {
      this.Data = this.initial;
      this.setData();
      return;
    }
    
    this.Data = data;
  }

  delete(id){
    
    let index  = this.Data.indexOf(id);
    this.Data.splice(index, 1);
    this.comments = undefined;
    this.edit = false;
    this.setData();
    this.checkHeight('items');
  }

  showComments(item, event){
    
    let clear = document.getElementsByClassName('red');
    let elem = event.target.parentNode;
     this.checkHeight('comments');
    if(clear.length){
      
      for(let i=0, len = clear.length; i < len; i++){
        clear[i].className = 'item-wrap';
      }
      this.edit = false;
    }
    
    if (elem.className !='item-wrap'){
       elem.parentNode.className += ' red';
    } else {
       elem.className +=' red';
    }
    
    this.comments = item.userComments;
    this.itemIndex = this.Data.indexOf(item);
    
    this.comment = null
    this.edit = true; 
    
    this.checkHeight('comments');
  
   
  }

  createNew(){
    
    if (this.addName.length > 30){
      this.addName = null;
      alert('Too many symbols!');
    }
    
    this.Data.push(new Theme(this.addName) );
    this.setData();
    this.addName = null;
    this.checkHeight('items');
  }

 addComment(event){
     
     if (event.keyCode === 13){
        let currAmountComments: number = +this.Data[this.itemIndex].numberComments;
        
        this.Data[this.itemIndex].userComments.push({
              avatarURL: 'assets/images/avatar_2.gif',
              comment: this.comment
            });
        
        this.Data[this.itemIndex].numberComments = ++currAmountComments;;
        this.setData();
        this.comment = null;
        this.checkHeight('comments');
    
    } else {
        return;
    }
  }

  // checkHeight(element){
   
  //   let item = document.getElementById(element);
  //    console.log(item.clientHeight);
  //   let doc = document.documentElement.clientHeight;
  //   let percent = Math.round(item.clientHeight/doc *100);

  //   if (percent > 80) {
      
  //     item.style.height = '90%';
  //     item.style.overflow = 'auto';
  //   }
  // }
  checkHeight(element){
   
    let item = document.getElementById(element);
     console.log(item.clientHeight);
    let doc = document.documentElement.clientHeight;
    let percent = Math.round(item.clientHeight/doc *100);

    if (percent > 80) {
      
      item.style.height = '90%';
      // item.style.overflow = 'auto';
    } 
  }
}
