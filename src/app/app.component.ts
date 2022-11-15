import { Component, VERSION } from "@angular/core";
import { BitcoinService } from "./bitcoins.service";
import { TimerService } from "./timer.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    public BitcoinService: BitcoinService,
    public timer: TimerService
  ) {
    this.timer.start();
  }

  ngOnInit() {}
}
