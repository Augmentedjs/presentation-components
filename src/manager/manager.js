import { Mediator } from "presentation-mediator";

/**
 * A Component Manager
 * @constructor Presentation.Component.Header
 * @memberof Presentation.Component
 * @extends Presentation.Mediator
 */
class Manager extends Mediator {
  constructor(options) {
    super(options);
  };
  manageComponent(component) {
    return this.observeColleagueAndTrigger(component, component.name, component.name);
  };
  unmanageComponent(component) {
    return this.dismissColleagueTrigger(component, component.name, component.name);
  };
};

export default Manager;
