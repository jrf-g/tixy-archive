const rain /*            */ = (t,i,x,y) => Math.tan((t * 5) - i); //-----------|
const wiggle /*          */ = (t,i,x,y) => Math.tan(Math.sin(t * 30) - i); // -|
const wipe /*            */ = (t,i,x,y) => Math.abs(Math.sin(t + y)); //-------|
const glitch_inchworm /* */ = (t,i,x,y) => Math.tan(t - y); //-----------------|
