import MY_IMAGE from './assets/img.png';
import "./index.css";

console.log('Hello World!');

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);