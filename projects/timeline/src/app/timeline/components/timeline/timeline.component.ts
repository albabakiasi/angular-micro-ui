import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit, OnDestroy {
  ngOnInit(): void {}

  // Destroy subs
  ngOnDestroy() {}
}
