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
    secondsurface.setAngle(-2*Math.PI/5,0)
    thirdsurface.setShape(Surface.SurfaceShape.Flat)
    thirdsurface.setAngle(-4*Math.PI/5,0)
    fourthsurface.setShape(Surface.SurfaceShape.Flat)
    fourthsurface.setAngle(Math.PI/5,0)
    buttonsurface.setShape(Surface.SurfaceShape.Flat)
    buttonsurface.setAngle(3*Math.PI/5,0)


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
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
