import  { useEffect } from 'react';
// import { useP5 } from 'react-p5-wrapper';

const Ut = {
  h: window.innerHeight,
  w: window.innerWidth,
};

let engineV8;
let earth;
let bx;
let bx2;
const circs = [];

const Particle = (p, x, y, r, props = {}) => {
  const particle = {
    x,
    y,
    radius: r,
    props,
    body: null,
    show: (styler) => {
      const posX = particle.body.position.x;
      const posY = particle.body.position.y;
      const angle = particle.body.angle;

      p.push();
      p.translate(posX, posY);
      p.rotate(angle);
      if (styler !== undefined) {
        styler();
      }
      p.ellipse(0, 0, particle.radius * 2);
      p.pop();
    },
  };

  particle.body = p.Bodies.circle(x, y, r, props);
  p.World.add(earth, particle.body);

  return particle;
};

const Box = (p, x, y, w, h, props = {}) => {
  const box = {
    x,
    y,
    width: w,
    height: h,
    props,
    body: null,
    show: (styler) => {
      const posX = box.body.position.x;
      const posY = box.body.position.y;
      const angle = box.body.angle;

      p.push();
      p.translate(posX, posY);
      p.rotate(angle);
      p.rectMode(p.CENTER);
      if (styler !== undefined) {
        styler();
      }
      p.rect(0, 0, box.width, box.height);
      p.pop();
    },
    isOffScreen: () => {
      return box.y > p.height + box.height + 100 || box.x > p.width + box.width + 100;
    },
    destroy: () => {
      p.World.remove(earth, box.body);
    },
  };

  box.body = p.Bodies.rectangle(x, y, w, h, props);
  p.World.add(earth, box.body);

  return box;
};

const MySketch = (p) => {
  const setup = () => {
    engineSetup();
    bx = new Box(p, 200, 250, 200, 10, { isStatic: true, angle: p.radians(40) });
    bx2 = new Box(p, 290, 450, 200, 10, { isStatic: true, angle: 56 });
  };

  const draw = () => {
    p.background(0);

    bx.show(() => {
      p.stroke(105, 25, 0);
      p.fill(205, 125, 0);
    });
    bx2.show(() => {
      p.stroke(14);
      p.fill(205);
    });

    circs.push(Particle(p, p.mouseX, p.mouseY, p.random(7), { friction: 0, restitution: 0.41 }));

    for (let i = 0; i < circs.length; i++) {
      circs[i].show(() => {
        p.noStroke();
        p.fill(0, 200, 250);
      });

      if (circs[i].isOffScreen()) {
        circs[i].destroy();
        circs.splice(i, 1);
        i--;
      }
    }
  };

  const engineSetup = () => {
    p.createCanvas(Ut.w, Ut.h);
    engineV8 = p.Engine.create();
    earth = engineV8.world;
    p.World.add(earth, engineV8);
    p.Engine.run(engineV8);
  };

  useEffect(() => {
    setup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Box;
