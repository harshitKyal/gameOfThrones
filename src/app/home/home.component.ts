import {
  Component,
  OnInit
 } from '@angular/core';
 import {
  GotHttpService
 } from '../got-http.service';
 import {
  FormsModule
 } from '@angular/forms';
 
 import {
  Ng4LoadingSpinnerService
 } from 'ng4-loading-spinner';
 
 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
 })
 export class HomeComponent implements OnInit {
  public allData: any[] = []
  public allDumData: any[] = []
  public allCharacters;
  public allBooks;
  public allHouses;
  //public allData : any[]= []
  public allCharArray = [];
  public allBookArray = [];
  public allHouseArray = [];
  public searchBookName = "";
  public searchIsbn = "";
  public searchPublisher = "";
  public searchCharacterName = "";
  public searchGender = "";
  public searchAliases = "";
  public searchHouseName = "";
  public searchRegion = "";
  public allInOne = [];
  public search = "";
 
  constructor(public gotHttpService: GotHttpService, private spinnerService: Ng4LoadingSpinnerService) {}
 
  ngOnInit() {
 
 
   // this.allShow();
   this.spinnerService.show();
   this.allCharacters = this.gotHttpService.getAllCharacters().subscribe(
    data => {
     this.allCharArray = this.allCharArray.concat(data)
     this.allCharacters = data;
     this.all(this.allCharacters)
    }
   );
 
   this.allBooks = this.gotHttpService.getAllBooks().subscribe(
    data => {
     this.allBooks = data;
     this.all(this.allBooks)
     this.allBookArray = this.allBookArray.concat(data);
    });
 
 
 
 
   this.allHouses = this.gotHttpService.getAllHouses().subscribe(
    data => {
     this.allHouses = data;
     this.all(this.allHouses)
     this.allHouseArray = this.allHouseArray.concat(data)
    }
   );
 
 
 
   setTimeout(() => {
    // this.allShow();
    console.log(this.allData);
   }, 100);
  }
 
 
  // tslint:disable-next-line: comment-format
  public allShow() { //to show all
   //  console.log("in all show")
   this.spinnerService.show();
   setTimeout(() => {
    this.spinnerService.hide();
    // console.log("in")
    this.allData = this.allDumData;
    this.allData["all"] = true;
    this.allData["books"] = false;
    this.allData["characters"] = false;
    this.allData["houses"] = false;
   }, 100);
 
 
 
   // console.log(this.allData)
  }
 
  booksShow() { //to show books

   this.spinnerService.show();
   setTimeout(() => {
    this.spinnerService.hide();
    // console.log("in")
    this.allData = this.allBooks;
    this.allData["all"] = false;
    this.allData["books"] = true;
    this.allData["characters"] = false;
    this.allData["houses"] = false;
    // console.log(this.allBooks)
    // console.log(this.allData)
   }, 100);
  }
  charactersShow() { //to show characters
   this.spinnerService.show();
   setTimeout(() => {
    this.spinnerService.hide();
    // console.log("in")
    this.allData = this.allCharacters;
    this.allData["all"] = false;
    this.allData["books"] = false;
    this.allData["characters"] = true;
    this.allData["houses"] = false;
   }, 100);
 
   // console.log(this.allData)
  }
  public housesShow = function() { // to show houses
   this.spinnerService.show();
   setTimeout(() => {
    this.spinnerService.hide();
    // console.log("in")
    this.allData = this.allHouses;
    this.allData["all"] = false;
    this.allData["books"] = false;
    this.allData["characters"] = false;
    this.allData["houses"] = true;
    // console.log(this.allBooks)
    // console.log(this.allData)
   }, 100);
 
   // console.log(this.allData)
 
  }
  //method to concat all data in one variable
  public all = (data): any => { //this is getting evry data in one variable
   // console.log("in all")
   this.allInOne.push(data);
   // console.log(this.allInOne)
   // console.log(this.allData)
   setTimeout(() => {
    this.spinnerService.hide();
    this.allData = [].concat(...this.allInOne);
    this.allDumData = this.allData
    this.allShow()
   }, 10);
   console.log(this.allData)
 
  }
  public resetButton = function() {
   this.searchBookName = "";
   this.searchIsbn = "";
   this.searchPublisher = "";
   this.searchCharacterName = "";
   this.searchGender = "";
   this.searchAliases = "";
   this.search = "";
   this.searchHouseName = "";
   this.searchRegion = "";
   this.allShow();
  }
 }