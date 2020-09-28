import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  helloMessage;
  helloForm;

  constructor(
    private helloService: HelloService,
    private formBuilder: FormBuilder,
  ) { 
    this.helloForm = this.formBuilder.group({
      time:'',
      message:'',
    });
   }

  ngOnInit(): void {
    // this.helloMessage = this.helloService.getHelloMessage();
    // console.log(this.helloMessage);
  }

}
