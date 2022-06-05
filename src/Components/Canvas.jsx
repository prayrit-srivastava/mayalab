import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react';
import { fabric } from 'fabric';

const Canvas = ()=>{

  useEffect(() => {
  
  
  
    return () => {
  
   const canvas = new fabric.Canvas('canvas-main');
  
  
   const rect = new fabric.Rect({
  
       height: 100,
  
        width: 100,
  
        fill: 'yellow',
  
      });
  
   canvas.add(rect);
  
    }
  }, [])
  
   return (
      <>
        <canvas
  
  
          style={{ border: 'solid 1px #555' }}
  
  
          id="canvas-main"
  
  
          width="10000px"
  
  
          height="10000px"
        />
      </>
    );
  };
  export default Canvas;