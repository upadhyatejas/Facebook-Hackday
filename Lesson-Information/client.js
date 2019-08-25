import {ReactInstance, Surface, Environment} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const firstsurface=new Surface(
    900,
    600,
    );
    const secondsurface=new Surface(
      900,
      600,
    );

    const thirdsurface=new Surface(
      900,
      600,
    );
    const fourthsurface=new Surface(
      800,
      600,
    );
    const buttonsurface=new Surface(
      900,
      600,
    );

    firstsurface.setShape(Surface.SurfaceShape.Flat)
    firstsurface.setAngle(0,0)
    secondsurface.setShape(Surface.SurfaceShape.Flat)
    secondsurface.setAngle(Math.PI/2,0)
    thirdsurface.setShape(Surface.SurfaceShape.Flat)
    thirdsurface.setAngle(Math.PI,0)
    fourthsurface.setShape(Surface.SurfaceShape.Flat)
    fourthsurface.setAngle(-Math.PI/2,0)
    buttonsurface.setShape(Surface.SurfaceShape.Flat)
    buttonsurface.setAngle(5*Math.PI/6,0)


  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Screen1'),
    firstsurface
  );
  r360.renderToSurface(
    r360.createRoot('Screen2'),
    secondsurface
  );
  r360.renderToSurface(
    r360.createRoot('Screen3'),
    thirdsurface
  );
  r360.renderToSurface(
    r360.createRoot('Screen4'),
    fourthsurface
  );
  r360.renderToSurface(
    r360.createRoot('buttonpage'),
    buttonsurface
  );
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('35230450492_4f44c1a4cb_o.jpg'));
}

window.React360 = {init};
