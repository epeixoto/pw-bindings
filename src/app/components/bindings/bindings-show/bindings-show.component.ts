import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-bindings-show",
  templateUrl: "./bindings-show.component.html",
  styleUrls: ["./bindings-show.component.css"],
})
export class BindingsShowComponent implements OnInit {
  //Interpolation
  name = "Maria Rodrigues";

  //attribute binding
  aStyle = "font-size: 5.2rem; color: cornflowerblue;";
  aid = "ola";

  //Two way binding
  model = {
    nome: "Filipe de Almeida",
  };

  //ngIF
  show = true;

  //ngFor
  Products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 5, name: "Product 3" },
    { id: 3, name: "Product 4" },
    { id: 4, name: "Product 5" },
  ];

  //PIPE
  anuncio = {
    visualizacoes: 21,
    dataHoradaInsercao: "2018-03-02T12:51:57",
  };

  //environments
  title = environment.title;

  constructor(private cookieService: CookieService) {}

  //CookieService
  cookieValue = "";

  omega2: any;
  ngOnInit(): void {
    //Interface
    let omega: Carro = {
      motor: "4.1",
      portas: 2,
      combustivel: "Gasolina",
    };

    omega.cor = "preta";
    omega.combustivel = "Gás";

    console.log(omega);

    this.omega2 = omega;

    //Classe
    let employee = new Employee();
    employee.name = "Filipe";
    employee.age = 27;
    employee.setHeight(1.75);

    console.log(employee);

    //CookieService
    this.cookieService.set("Test", "Hello World");
  }

  //Event binding
  onSave(): void {
    console.log("onSave()");

    //CookieService
    this.cookieValue = this.cookieService.get("Test");
    console.log("CookieService: ", this.cookieValue);
  }

  //ngIF
  show2 = false;
  onShow(): void {
    console.log("onShow():", this.show);

    if (!this.show) this.show = true;
    else this.show = false;

    if (this.show) this.show2 = false;
    else this.show2 = true;
  }
}

//Interface
//descreve um objeto e as suas propriedades mas não as implementa
interface Carro {
  readonly motor: string;
  readonly portas: number;
  combustivel: string;
  cor?: string;
  airBag?: boolean;
}

//Class
class Person {
  public name?: string;
  private _age?: number;
  protected height?: number;

  public get age(): number {
    return this._age!;
  }

  public set age(v: number) {
    this._age = v;
  }
}

class Employee extends Person {
  setHeight(height: number) {
    this.height = height;
  }
}
