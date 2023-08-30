import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


let current = 0;
let next = 1;
let numbers = 3;
let prev = numbers-1;
// var images = document.querySelectorAll(".scroll-card")

setInterval(function(){
  var images = document.querySelectorAll<HTMLElement>(".scroll-card")
  if(next>=numbers) next = 0;
  console.log(images)
  images[current].style.opacity = "0";
  images[next].style.opacity = "1";
  images[prev].style.transform = "translate(100%)";
  images[next].style.transform = "translate(0%)";
  images[current].style.transform = "translateX(-100%)";
  prev = current;
  current = next;
  next++;
}, 4000)

