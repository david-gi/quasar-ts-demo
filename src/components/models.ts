export class StepItem {
  icon: string;

  title: string;

  heading: string;

  content: string;

  constructor(icon: string, title: string, heading: string, content: string) {
    this.icon = icon;
    this.title = title;
    this.heading = heading;
    this.content = content;
  }
}
