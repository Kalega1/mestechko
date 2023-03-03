const myBg = document.createElement("div");
myBg.classList.add("bg");
document.body.append(myBg);
const day = new Date();
const hour = day.getHours();
// const hour = 15;

if (hour >= 8 && hour < 20) {
  myBg.classList.remove("night");
  myBg.classList.add("morning");
} else if (hour >= 20 || hour < 8) {
  myBg.classList.remove("morning");
  myBg.classList.add("night");
}