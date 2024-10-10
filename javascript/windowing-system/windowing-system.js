// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    let newWidth = newSize.width;
    let newHeight = newSize.height;
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    if (newWidth < 1) newWidth = 1;
    if (newHeight < 1) newHeight = 1;
    if (newWidth > maxWidth) newWidth = maxWidth;
    if (newHeight > maxHeight) newHeight = maxHeight;

    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    let newX = newPosition.x;
    let newY = newPosition.y;
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX > maxX) newX = maxX;
    if (newY > maxY) newY = maxY;

    this.position.move(newX, newY);
  }

  changeWindow(newProgramWindow) {
    newProgramWindow.resize({ width: 400, height: 300 });
    newProgramWindow.move({ x: 100, y: 150 });
    return newProgramWindow;
  }
}
