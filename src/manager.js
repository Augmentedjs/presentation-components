import { Mediator } from "presentation-mediator";

/**
 * A Component Manager or Mediator
 * @extends Mediator
 * @deprecated Use Mediator
 */
class Manager extends Mediator {
  constructor(options) {
    super(options);
  };
  /**
   * Manages a component (colleague)
   * @param {View} component A component or view to manage
   */
  manageComponent(component) {
    return this.observeColleagueAndTrigger(component, component.name, component.name);
  };
  /**
   * Unmanages a component (colleague)
   * @param {View} component A component or view to manage
   */
  unmanageComponent(component) {
    return this.dismissColleagueTrigger(component, component.name, component.name);
  };
};

export default Manager;
