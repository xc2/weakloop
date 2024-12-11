import { ApplicationConfig } from "@loopback/core";
import { RestApplication } from "@loopback/rest";
import { BasicAppComponent } from "./component";
import { MySequence } from "./sequence";

export { ApplicationConfig };

export class BasicApplication extends RestApplication {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    this.component(BasicAppComponent);
  }
}
